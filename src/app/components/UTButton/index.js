import React from 'react';
import { bool, func, string } from 'prop-types';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { retrieveClassNamesFromProps } from 'utils/styleUtils';

import styles from './styles.scss';

const variants = ['small', 'medium', 'large', 'blue', 'darkBlue', 'green', 'white', 'disabled', 'rounded'];

const UTButton = props => {
  const size = props.small ? 'small' : props.large ? 'large' : 'medium';

  const style = retrieveClassNamesFromProps(variants, styles, props, props.flat && 'Flat');

  return (
    <Button
      type={props.type}
      size={size}
      variant={props.flat ? 'flat' : 'raised'}
      disabled={props.disabled || props.loading}
      onClick={props.onPress}
      classes={{
        root: `${props.flat ? styles.baseFlat : styles.base} ${style} ${props.className}`,
        label: styles.labelFullWidth
      }}
    >
      {props.children}
      {props.loading && <CircularProgress size={24} className={styles.buttonProgress} />}
    </Button>
  );
};

UTButton.propTypes = {
  small: bool,
  large: bool,
  flat: bool,
  disabled: bool,
  loading: bool,
  type: string,
  onPress: func,
  className: string
};

export default UTButton;
