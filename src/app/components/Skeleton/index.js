import React from 'react';
import { createSkeletonElement } from '@trainline/react-skeletor';

import styles from './styles.scss';

const SkeletonWrapper = createSkeletonElement('div', styles.skeleton);

//Si fallo el skeleton es aca!
const hasMock = string => string && string.props.source && string.props.source.toString().includes('MOCK');

const hiddenChildren = child =>
  React.cloneElement(child, {
    className: `${child.className} ${styles.skeletonHiddenChild}`
  });

class Skeleton extends React.PureComponent {
  render() {
    return hasMock(this.props.children) ? (
      <SkeletonWrapper>{hiddenChildren(this.props.children)}</SkeletonWrapper>
    ) : (
      this.props.children
    );
  }
}

export default Skeleton;
