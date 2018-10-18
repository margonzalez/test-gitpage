import React from 'react';
import { connect } from 'react-redux';

import { UtFormFieldPropTypes } from 'types/formTypes';
import { shouldShowErrors as showErrors } from 'utils/formUtils';
import * as FORMS from 'constants/userForms';
import UTLabel from 'app/components/UTLabel';
import UTTextInput from 'app/components/UTTextInput';
import UTSelect from 'app/components/UTSelect';
// import UTMap from 'app/components/UTMap';
import UTCheckbox from 'app/components/UTCheckbox';
import UTTextArea from 'app/components/UTTextArea';
import UTDatePicker from 'app/components/UTDatePicker';

import styles from './styles.scss';

export const shouldShowErrors = (meta, type) =>
  [FORMS.FIELD_TEXT, FORMS.FIELD_SELECT, FORMS.FIELD_PASSWORD, FORMS.FIELD_CREDIT_CARD].indexOf(type) ===
    -1 && showErrors(meta);

const chooseStyle = (useModal, modalStyle, fullScreenStyle) => (useModal ? modalStyle : fullScreenStyle);

const shouldShowTitle = field =>
  [
    FORMS.FIELD_LABEL,
    FORMS.FIELD_URL,
    FORMS.FIELD_CHECKBOX,
    FORMS.FIELD_CAPTCHA,
    FORMS.FIELD_TEXT,
    FORMS.FIELD_SELECT,
    FORMS.FIELD_PHONE,
    FORMS.FIELD_CREDIT_CARD,
    FORMS.FIELD_PASSWORD
  ].indexOf(field.type) === -1;

const getFieldTitle = field => (field.required ? `${field.title} *` : field.title);

/* eslint-disable react/display-name */
const FIELD_COMPONENT_MAP = {
  [FORMS.FIELD_LABEL]: field => <UTLabel semibold>{getFieldTitle(field)}</UTLabel>,
  [FORMS.FIELD_IMAGE_LABEL]: field => (
    <div className={styles.imageContainer}>
      <img alt={getFieldTitle(field)} src={field.description} className={styles.imageLabel} />
    </div>
  ),
  [FORMS.FIELD_URL]: field => (
    <a href={field.description} className={styles.url}>
      {field.title}
    </a>
  ),
  [FORMS.FIELD_SELECT]: (field, input, meta) => (
    <UTSelect
      input={input}
      meta={meta}
      valueKey="value"
      labelKey="name"
      shouldDisplayErrors={false}
      placeholder={field.placeholder || field.title}
      options={field.options}
      disabled={field.read_only}
      withOrder
    />
  ),
  [FORMS.FIELD_TEXT]: (field, input, meta) => (
    <UTTextInput
      input={input}
      meta={meta}
      placeholder={field.placeholder || field.title}
      disabled={field.read_only}
      tooltipMessage={field.tooltip}
    />
  ),
  [FORMS.FIELD_PASSWORD]: (field, input, meta) => (
    <UTTextInput
      input={input}
      meta={meta}
      placeholder={field.placeholder || field.title}
      disabled={field.read_only}
      type="password"
    />
  ),
  [FORMS.FIELD_TEXT_AREA]: (field, input) => (
    <UTTextArea
      onChange={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
      style={styles.textArea}
      disabled={field.read_only}
      placeholder={field.placeholder}
    />
  ),
  [FORMS.FIELD_DATE]: (field, input, meta, componentProps) => (
    <UTDatePicker
      input={input}
      meta={meta}
      shouldDisplayErrors={false}
      style={chooseStyle(componentProps.useModal, null, styles.textInput)}
      onChange={input.onChange}
      disabled={field.read_only}
      name={`id${field.id}`}
      placeholder={field.placeholder}
    />
  ),
  [FORMS.FIELD_CHECKBOX]: (field, input, meta) => (
    <UTCheckbox label={getFieldTitle(field)} input={input} meta={meta} />
  )
};
/* eslint-enable react/display-name */

function UTFormField({ field, input, meta, ...props }) {
  const fieldConstructor = FIELD_COMPONENT_MAP[field.type];
  if (!fieldConstructor) return null;

  return (
    <div className={`${styles.fieldContainer} ${field.style && styles.textAreaCorrector}`}>
      {shouldShowTitle(field) && (
        <UTLabel darkBlue className={styles.fieldTitle}>
          {getFieldTitle(field)}
        </UTLabel>
      )}
      {fieldConstructor(field, input, meta, props)}
      <div className={styles.error}>
        {shouldShowErrors(meta, field.type) && (
          <UTLabel error small>
            {meta.error}
          </UTLabel>
        )}
      </div>
    </div>
  );
}

UTFormField.propTypes = UtFormFieldPropTypes;

export default connect()(UTFormField);
