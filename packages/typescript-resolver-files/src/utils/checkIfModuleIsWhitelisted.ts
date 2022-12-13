interface CheckIfModuleIsWhitelistedParams {
  moduleName: string;
  whitelistedModules: string[];
  blacklistedModules: string[];
}

export const checkIfModuleIsWhitelisted = ({
  moduleName,
  whitelistedModules,
  blacklistedModules,
}: CheckIfModuleIsWhitelistedParams): boolean => {
  if (blacklistedModules.includes(moduleName)) {
    return false;
  }

  const isInWhitelistedModule =
    // whitelistedModules is empty a.k.a. all are whitelisted
    whitelistedModules.length === 0
      ? true
      : whitelistedModules.includes(moduleName);

  return isInWhitelistedModule;
};
