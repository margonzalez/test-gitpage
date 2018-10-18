import React, { Component } from 'react';
import { string } from 'prop-types';

import { retrieveClassNamesFromProps } from 'utils/styleUtils';
import Skeleton from 'app/components/Skeleton';

import styles from './styles.scss';

const variants = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'title',
  'light',
  'semibold',
  'bold',
  'extrabold',
  'blue',
  'darkBlue',
  'gray',
  'white',
  'error'
];

// eslint-disable-next-line react/prefer-stateless-function
class UTLabel extends Component {
  render() {
    const style = retrieveClassNamesFromProps(variants, styles, this.props);
    return (
      <Skeleton>
        <span className={`${styles.base} ${style} ${this.props.className}`}>{this.props.children}</span>
      </Skeleton>
    );
  }
}

UTLabel.propTypes = {
  className: string
};

export default UTLabel;
