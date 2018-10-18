import { shape, number, string, bool } from 'prop-types';

export const notificationTypes = shape({
  id: number.isRequired,
  body: string.isRequired,
  created_at: string.isRequired,
  entity_id: number,
  form_type: string,
  notification_type: string.isRequired,
  read: bool.isRequired
});
