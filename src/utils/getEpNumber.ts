export const getEpNumber = (slug) => {
  return parseInt(slug.match(/^([0-9]+)-/)[1]);
};
