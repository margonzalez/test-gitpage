import { shape, string, number, func, arrayOf, oneOfType, bool, any } from 'prop-types';

export const inputPropTypes = shape({
  name: string.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  onDragStart: func.isRequired,
  onDrop: func.isRequired,
  onFocus: func.isRequired,
  value: string.isRequired
});

export const metaPropTypes = shape({
  active: bool.isRequired,
  asyncValidating: bool.isRequired,
  autofilled: bool.isRequired,
  dirty: bool.isRequired,
  dispatch: func.isRequired,
  form: string.isRequired,
  invalid: bool.isRequired,
  pristine: bool.isRequired,
  submitFailed: bool.isRequired,
  submitting: bool.isRequired,
  touched: bool.isRequired,
  valid: bool.isRequired,
  visited: bool.isRequired
});

export const UtFormFieldPropTypes = {
  field: shape({
    type: string.isRequired,
    key: string.isRequired,
    title: string,
    field_options: arrayOf(
      shape({
        name: string.isRequired,
        id: oneOfType([string, number]).isRequired
      })
    ),
    description: string,
    visibility_parent_field_key_id: number,
    visibility_parent_field_option_value_id: oneOfType([number, arrayOf(number)]),
    parent_field_option_id: number,
    read_only: bool,
    default_value: oneOfType([string, bool, number])
  }).isRequired,
  formAccount: any, // eslint-disable-line react/forbid-prop-types
  input: inputPropTypes,
  meta: metaPropTypes,
  selectedOptionIds: any, // eslint-disable-line react/forbid-prop-types
  useModal: bool,
  isPublic: bool
};

export const formResponseTypes = shape({
  // TODO: Check this type. Maybe will change
  title: string.isRequired,
  id: number.isRequired,
  status: string.isRequired,
  date: string.isRequired,
  notification: bool
});
