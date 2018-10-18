import { string, shape, number, bool, func, arrayOf } from 'prop-types';

export const userTypes = shape({
  id: number.isRequired,
  email: string,
  total_points: number,
  created_at: string,
  first_name: string,
  last_name: string,
  document_type: string,
  document_number: string,
  updated_profile: shape({
    status: bool,
    attributes: shape({
      request_document: bool,
      request_name: bool,
      request_gender: bool,
      request_email: bool,
      request_phone: bool
    })
  }),
  is_customer: bool
});

export const phonePropTypes = {
  number: string,
  carrier: string
};

export const userDataViewTypes = {
  key: number,
  name: string,
  title: string,
  placeholder: string,
  labelKey: string,
  normalize: func,
  validate: arrayOf(func)
};

export const emailPropType = {
  emails: arrayOf(
    shape({
      id: number,
      email: string
    })
  )
};
