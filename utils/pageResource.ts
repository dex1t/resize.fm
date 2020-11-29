export const getEpNumber = (resourcePath) => {
  return resourcePath.match(/^ep\/([0-9]+)-/)[1];
};

export const formatPath = (resourcePath) => {
  return `/${resourcePath.replace(/\.mdx$/, "")}`;
};
