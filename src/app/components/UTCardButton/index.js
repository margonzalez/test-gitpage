import React, { Component } from 'react';
import { bool, string, func, node } from 'prop-types';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ListItem from '@material-ui/core/ListItem';

import UTCard from 'app/components/UTCard';

import styles from './styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class UTCardButton extends Component {
  render() {
    const { children, withoutIcon, onClick, className, contentClassName, icon: Icon } = this.props;
    return (
      <UTCard horizontal className={`${styles.container} ${className}`}>
        <ListItem button className={styles.wrapper} onClick={onClick}>
          <div className={`${styles.content} ${contentClassName}`}>
            {children}
            {!withoutIcon && (Icon ? <Icon /> : <KeyboardArrowRight color="action" />)}
          </div>
        </ListItem>
      </UTCard>
    );
  }
}

UTCardButton.propTypes = {
  withoutIcon: bool,
  onClick: func,
  className: string,
  contentClassName: string,
  icon: node
};

export default UTCardButton;
