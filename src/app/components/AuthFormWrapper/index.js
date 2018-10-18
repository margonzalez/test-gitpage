import React from 'react';
import { bool } from 'prop-types';

import Loading from 'app/components/WithLoading/components/Loading';

import styles from './styles.scss';

const AuthFormWrapper = ({ children, loading }) => (
  <div className={styles.container}>{loading ? <Loading containerSpinner={styles.spinner} /> : children}</div>
);

AuthFormWrapper.propTypes = {
  loading: bool
};

export default AuthFormWrapper;
