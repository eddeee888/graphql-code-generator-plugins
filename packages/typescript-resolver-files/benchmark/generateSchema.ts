/**
 * Synthetic workload generator for the benchmark harness.
 *
 * Produces a realistically large `mode: 'modules'` schema plus diverging mapper
 * files, modelled on `packages/typescript-resolver-files-e2e/src/test-modules`.
 * The mappers deliberately diverge from the schema so that the type-checker path
 * in `getGraphQLObjectTypeResolversToGenerate` (phase 7) and `postProcessFiles`
 * actually does work — that is where the run-time cost lives.
 *
 * Output goes to a gitignored `.workload/` dir. Nothing here is committed.
 *
 * Utility module only — imported by `run.ts`; not runnable on its own.
 */
import * as fs from 'fs';
import * as path from 'path';

interface WorkloadPreset {
  modules: number;
  typesPerModule: number;
  fieldsPerType: number;
  /** Fraction (0..1) of object types that get a diverging mapper file. */
  mapperRatio: number;
}

export const workloadPresets: Record<string, WorkloadPreset> = {
  // ~ existing e2e fixtures (~20 types)
  small: { modules: 4, typesPerModule: 5, fieldsPerType: 6, mapperRatio: 0.5 },
  // ~100 types
  medium: {
    modules: 10,
    typesPerModule: 10,
    fieldsPerType: 8,
    mapperRatio: 0.5,
  },
  // ~200 types — a realistically large service schema
  large: {
    modules: 20,
    typesPerModule: 10,
    fieldsPerType: 8,
    mapperRatio: 0.5,
  },
  // ~400 types — stress; may exhaust the default heap (see README)
  xlarge: {
    modules: 40,
    typesPerModule: 10,
    fieldsPerType: 10,
    mapperRatio: 0.5,
  },
};

const scalarFieldTypes = ['String', 'Int', 'Boolean', 'Float', 'DateTime'];

const typeName = (mod: number, t: number): string => `M${mod}T${t}`;

/** Generate the `.graphqls` body for a single module. */
const moduleSchema = (mod: number, preset: WorkloadPreset): string => {
  const { typesPerModule, fieldsPerType } = preset;
  const lines: string[] = [];

  // Root query fields contributed by this module.
  lines.push('extend type Query {');
  for (let t = 0; t < typesPerModule; t++) {
    lines.push(`  m${mod}t${t}(id: ID!): ${typeName(mod, t)}`);
  }
  lines.push('}');
  lines.push('');

  for (let t = 0; t < typesPerModule; t++) {
    lines.push(`type ${typeName(mod, t)} {`);
    lines.push('  id: ID!');
    // scalar fields
    for (let f = 0; f < fieldsPerType; f++) {
      const scalar = scalarFieldTypes[f % scalarFieldTypes.length];
      lines.push(`  field${f}: ${scalar}!`);
    }
    // relation field to another type in the same module (drives resolver gen
    // when the mapper omits/diverges it)
    const relTarget = typeName(mod, (t + 1) % typesPerModule);
    lines.push(`  relation: ${relTarget}!`);
    lines.push(`  relationList: [${relTarget}!]!`);
    lines.push('}');
    lines.push('');
  }

  return lines.join('\n');
};

/**
 * Generate a diverging mapper for a type: keeps `id` + scalar fields (compatible),
 * replaces the relation with a plain id string (missing -> resolver required),
 * and makes one scalar field the wrong type (incompatible -> resolver required).
 */
const typeMapper = (mod: number, t: number, preset: WorkloadPreset): string => {
  const name = typeName(mod, t);
  const lines: string[] = [];
  lines.push(`export interface ${name}Mapper {`);
  lines.push('  id: string;');
  for (let f = 0; f < preset.fieldsPerType; f++) {
    const scalar = scalarFieldTypes[f % scalarFieldTypes.length];
    // Make field0 deliberately the wrong type to exercise the "incompatible"
    // assignability branch; keep the rest compatible.
    if (f === 0) {
      lines.push(`  field${f}: { nested: string };`);
      continue;
    }
    const tsType =
      scalar === 'Int' || scalar === 'Float'
        ? 'number'
        : scalar === 'Boolean'
        ? 'boolean'
        : 'string';
    lines.push(`  field${f}: ${tsType};`);
  }
  // relation replaced by an id string; the object-typed `relation`/`relationList`
  // fields are absent -> resolvers must be generated.
  lines.push('  relationId: string;');
  lines.push('}');
  return lines.join('\n');
};

const baseSchema = (): string =>
  [
    'type Query',
    'type Mutation',
    'type Subscription',
    '',
    'scalar DateTime',
    '',
  ].join('\n');

const workloadTsConfig = (): string =>
  JSON.stringify(
    {
      compilerOptions: {
        target: 'es2022',
        lib: ['es2022'],
        module: 'nodenext',
        moduleResolution: 'nodenext',
        strict: true,
        skipLibCheck: true,
        noEmit: true,
        types: [],
      },
      include: ['modules/**/*.ts'],
    },
    null,
    2
  );

interface GeneratedWorkload {
  workloadDir: string;
  modulesDir: string;
  tsConfigPath: string;
  stats: { modules: number; types: number; mappers: number };
}

export const generateWorkload = ({
  preset,
  workloadDir,
}: {
  preset: WorkloadPreset;
  workloadDir: string;
}): GeneratedWorkload => {
  const modulesDir = path.join(workloadDir, 'modules');
  // Fresh output every time so cold-start numbers are honest.
  fs.rmSync(workloadDir, { recursive: true, force: true });
  fs.mkdirSync(modulesDir, { recursive: true });

  // base module
  const baseDir = path.join(modulesDir, 'base');
  fs.mkdirSync(baseDir, { recursive: true });
  fs.writeFileSync(path.join(baseDir, 'base.graphqls'), baseSchema());

  let typeCount = 0;
  let mapperCount = 0;
  const mapperEvery =
    preset.mapperRatio > 0 ? Math.round(1 / preset.mapperRatio) : 0;

  for (let m = 0; m < preset.modules; m++) {
    const modDir = path.join(modulesDir, `mod${m}`);
    fs.mkdirSync(modDir, { recursive: true });
    fs.writeFileSync(
      path.join(modDir, `mod${m}.graphqls`),
      moduleSchema(m, preset)
    );

    const mapperBodies: string[] = [];
    for (let t = 0; t < preset.typesPerModule; t++) {
      typeCount++;
      if (mapperEvery > 0 && typeCount % mapperEvery === 0) {
        mapperBodies.push(typeMapper(m, t, preset));
        mapperCount++;
      }
    }
    if (mapperBodies.length > 0) {
      // parseTypeMappers expects `<sourceName>.mappers.ts` next to the schema.
      fs.writeFileSync(
        path.join(modDir, `mod${m}.mappers.ts`),
        mapperBodies.join('\n\n') + '\n'
      );
    }
  }

  const tsConfigPath = path.join(workloadDir, 'tsconfig.json');
  fs.writeFileSync(tsConfigPath, workloadTsConfig());

  return {
    workloadDir,
    modulesDir,
    tsConfigPath,
    stats: { modules: preset.modules, types: typeCount, mappers: mapperCount },
  };
};

export const defaultWorkloadDir = (): string =>
  path.join(import.meta.dirname, '.workload');
