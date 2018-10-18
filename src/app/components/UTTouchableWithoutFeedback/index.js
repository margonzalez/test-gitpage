import React from 'react';
import { func, string } from 'prop-types';

import styles from './styles.scss';

/* eslint-disable jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */
function UTTouchableWithoutFeedback({ children, className, onClick, containerSetter, ...props }) {
  return (
    <div
      {...props}
      role="button"
      onClick={onClick}
      className={`${styles.container} ${className}`}
      ref={containerSetter}
    >
      {children}
    </div>
  );
}
/* eslint-enable jsx-a11y/interactive-supports-focus */

UTTouchableWithoutFeedback.propTypes = {
  onClick: func,
  containerSetter: func,
  className: string
};

export default UTTouchableWithoutFeedback;
