export const isWhitelistedModule = ({
  moduleName,
  whitelistedModules,
  blacklistedModules,
}: {
  moduleName: string;
  whitelistedModules: string[];
  blacklistedModules: string[];
}): boolean => {
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
