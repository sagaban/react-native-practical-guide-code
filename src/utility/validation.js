/**
 * @format
 * @flow
 */
const validate = (val: any, rules: Object, extraValues: Object): boolean => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case 'equalTo':
        isValid = isValid && equalToValidatorValidator(val, extraValues[rules[rule]]);
        break;
      default:
        break;
    }
  }
  return isValid;
};

const emailValidator = (email: string): boolean => {
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email.toLowerCase());
};

const minLengthValidator = (val: string, minLength: number): boolean => {
  return val.length >= minLength;
};

const equalToValidatorValidator = (val: string, other: string): boolean => {
  return val === other;
};

export default validate;
