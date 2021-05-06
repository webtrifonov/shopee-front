export const getMaxPrice = (categories) => {
  if (!!categories?.length) {
    return categories
      .map((item) => item.maxPrice)
      .reduce((acc, item) => (acc > item ? acc : item));
  }
  return 0;
};
export const priceFormat = (value, maxPrice) => {
  if (value > maxPrice) {
    value = maxPrice;
  }
  if (value === '') {
    value = 0;
  }
  return parseInt(value);
};
