import React, { Fragment } from 'react';
import { string } from 'prop-types';

import UTLabel from 'app/components/UTLabel';

import styles from './styles.scss';

const AuthFormBox = ({ children, title }) => (
  <Fragment>
    <div className={styles.formContainer}>
      <UTLabel black large medium className={styles.title}>
        {title}
      </UTLabel>
      {children}
    </div>
  </Fragment>
);

AuthFormBox.propTypes = {
  title: string.isRequired
};

export default AuthFormBox;
