export const getMaxPrice = (categories) => {
  if (!!categories?.length) {
    return categories.map((item) => item.maxPrice).reduce((acc, item) => acc > item ? acc : item);
  }
  return 0;
}
