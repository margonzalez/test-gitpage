import React from 'react';
import i18next from 'i18next';
import { string, number } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import UTLabel from '../../../UTLabel';

import styles from './styles.scss';

const Loading = ({ text, className, thickness, size }) => (
  <div className={`${styles.container} ${className}`}>
    <CircularProgress className={styles.loading} size={size || 55} thickness={thickness || 3.5} />
    <UTLabel className={styles.text} medium>
      {text || i18next.t('Commons:loading')}
    </UTLabel>
  </div>
);

Loading.propTypes = {
  text: string,
  size: number,
  thickness: number,
  className: string
};

export default Loading;
