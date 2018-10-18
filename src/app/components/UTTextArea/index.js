import React from 'react';
import { func, string, bool } from 'prop-types';

import styles from './styles.scss';

function UTTextArea({ onChange, onBlur, onFocus, value, className, disabled, placeholder }) {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}

UTTextArea.propTypes = {
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onFocus: func.isRequired,
  value: string.isRequired,
  disabled: bool,
  placeholder: string,
  className: string
};

export default UTTextArea;
