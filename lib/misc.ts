export const getEpNumber = (resourcePath) => {
  return resourcePath.match(/^ep\/([0-9]+)-/)[1];
};
