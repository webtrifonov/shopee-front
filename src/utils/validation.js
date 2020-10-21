export const priceFormat = (value, maxPrice) => {
  if (value > maxPrice) {
    value = maxPrice;
  }
  if (value === '') {
    value = 0;
  }
  return parseInt(value);
}
