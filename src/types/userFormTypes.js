import { string, shape, number, bool, arrayOf, oneOf, oneOfType } from 'prop-types';

import { CLAIM, PROCEDURE } from 'constants/userForms';

export const formTypeTypes = oneOf([CLAIM, PROCEDURE]);

export const statusTypes = oneOfType([
  string,
  shape({
    description: string,
    isPending: bool
  })
]);

export const formResponseTypes = shape({
  id: number.isRequired,
  form_id: number.isRequired,
  form_name: string.isRequired,
  account_id: number.isRequired,
  external_id: number,
  status: statusTypes,
  action_type: string.isRequired,
  reiteration_count: number.isRequired,
  started_at: string,
  expected_completion_at: string,
  completion_at: string,
  created_by: string.isRequired,
  last_operation_by: string.isRequired,
  cancellable: bool.isRequired,
  reiterable: bool.isRequired,
  form_type: formTypeTypes,
  field_details: arrayOf(shape({ name: string.isRequired, value: string.isRequired })).isRequired
});

export const formTypes = shape({
  id: number.isRequired,
  form_category_id: number.isRequired,
  url: string,
  name: string.isRequired,
  cancellable: bool.isRequired,
  reiterable: bool.isRequired,
  auto_closure: bool.isRequired,
  type: oneOf(['Forms::Procedure', 'Forms::Claim', 'Forms::Complaint']).isRequired
});

export const formCategoryTypes = shape({
  id: number.isRequired,
  utility_id: number.isRequired,
  name: string.isRequired,
  forms_type: formTypeTypes.isRequired,
  forms: arrayOf(formTypes).isRequired
});
