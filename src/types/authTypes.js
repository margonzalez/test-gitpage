import { string, shape, arrayOf, number } from 'prop-types';

export const signUpUserInformationTypes = shape({
  document_type: string,
  document_number: string,
  last_name: string,
  first_name: string,
  phone: shape({
    number: string.isRequired
  }),
  email: string.isRequired,
  password: string
});

export const identityValidationFormTypes = arrayOf(
  shape({
    answer: arrayOf(string),
    field_type: string,
    id: number.isRequired,
    order: number.isRequired,
    question: string
  })
);
