import moment from 'moment';

const emailRegex = /^([a-zA-Z\d]+[+._-]*)+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

const numericalFourDigitsRegex = /^[0-9]{4}$/;

const numericalTenDigitsRegex = /^[0-9]{10}$/;

const lettersAndSpacesRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u0027]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\u0027]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\u0027\s]+$/;

const validateLetterAndNumberRequired = str => {
  if (str.search(/\d/) === -1) {
    return false;
  }
  if (str.search(/[a-zA-Z]/) === -1) {
    return false;
  }
  return true;
};

export const validDate = errorMessage => val =>
  moment(val, 'DD/MM/YYYY').format('YYYY-MM-DD') === 'Invalid date' ? errorMessage : undefined;

export const meetCuitRequirements = cuit => {
  const digits = cuit.split('');
  const lastDigit = parseInt(digits.pop(), 10);

  let accum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    accum += digits[9 - i] * (2 + (i % 6));
  }

  let requiredDigit = 11 - (accum % 11);

  if (requiredDigit === 11) requiredDigit = 0;

  return lastDigit === requiredDigit;
};

const validateMaxDate = (date, years) => {
  const dateToValidate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  const maxDate = moment(years, 'DD/MM/YYYY').format('YYYY-MM-DD');

  return moment(dateToValidate).isSameOrBefore(maxDate);
};

const validateMinDate = (date, years) => {
  const dateToValidate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  const minDate = moment(years, 'DD/MM/YYYY').format('YYYY-MM-DD');

  return moment(dateToValidate).isSameOrAfter(minDate);
};

export const required = errorMessage => val => (val ? undefined : errorMessage);

export const validateMinLength = (val, min) => val && val.length >= min;

export const minLength = (min, errorMessage) => val =>
  val && !validateMinLength(val, min) ? errorMessage : undefined;

export const validateMaxLength = (val, max) => val && val.length <= max;

export const maxLength = (max, errorMessage) => val =>
  val && !validateMaxLength(val, max) ? errorMessage : undefined;

export const validateEquals = (val, length) => val && val.length === length;

export const lengthEquals = (length, errorMessage) => val =>
  val && !validateEquals(val, length) ? errorMessage : undefined;

export const phoneLength = (length, errorMessage) => val => {
  const value = val && val.replace(/[-]/, '');
  return value && value.length !== length ? errorMessage : undefined;
};

export const pattern = (exp, errorMessage) => val => (exp.test(val) ? undefined : errorMessage);

export const email = errorMessage => pattern(emailRegex, errorMessage);

export const numericalFourDigits = errorMessage => pattern(numericalFourDigitsRegex, errorMessage);

export const numericalTenDigits = errorMessage => pattern(numericalTenDigitsRegex, errorMessage);

export const lettersAndSpaces = errorMessage => pattern(lettersAndSpacesRegex, errorMessage);

export const cuitFormat = errorMessage => val => (meetCuitRequirements(val) ? undefined : errorMessage);

export const maxDate = (years, errorMessage) => val =>
  val && !validateMaxDate(val, years) ? errorMessage : undefined;

export const minDate = (years, errorMessage) => val =>
  val && !validateMinDate(val, years) ? errorMessage : undefined;

export const maxNum = (max, errorMessage) => value => (value <= max ? undefined : errorMessage);

export const minYear = (year, errorMessage) => value => (value >= year ? undefined : errorMessage);

export const letterAndNumberRequired = errorMessage => val =>
  validateLetterAndNumberRequired(val) ? undefined : errorMessage;

export const passwordValidations = [
  required('Este campo es requerido'),
  minLength(5, 'La contraseña debe tener mas de 5 caracteres'),
  maxLength(15, 'La contraseña debe tener menos de 15 caracteres')
];

export const validateDependantField = (dependantFieldValue, errorMessage) => val =>
  val || dependantFieldValue ? undefined : errorMessage;

export const validateRequiredOnField = (requiredOnFieldValue, errorMessage) => val =>
  requiredOnFieldValue && !val ? errorMessage : undefined;
