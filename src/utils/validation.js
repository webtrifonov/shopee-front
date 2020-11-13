export const emailReg = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const passwordReg = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/
);

export const validationEmail = (value) => {
  const errors = [];
  if (!emailReg.test(value)) {
    errors.push('Wrong email, ex: test@gmail.com');
  }
  return errors;
};
export const validationPassword = (value) => {
  const errors = [];
  if (!passwordReg.test(value)) {
    errors.push(
      'Password must contain specific symbols, lower case, upper case symbols and numbers'
    );
  }
  return errors;
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
