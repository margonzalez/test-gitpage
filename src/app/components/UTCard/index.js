import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import { cardActionsTypes } from 'types/commonTypes';

import UTCardHeader from './components/UTCardHeader';
import styles from './styles.scss';
import UTCardFooter from './components/UTCardFooter';

class UTCard extends Component {
  state = { expandIsSelected: false };

  handleOnPress = () => this.setState({ expandIsSelected: !this.state.expandIsSelected });

  render() {
    const { header, footer, children, horizontal, className, isCollapsible } = this.props;

    return !isCollapsible ? (
      <div className={`${styles.base} ${!horizontal && styles.column} ${className}`}>
        {header && <UTCardHeader header={header} />}
        {children}
        {footer && <UTCardFooter footer={footer} />}
      </div>
    ) : (
      <div
        className={`${styles.base} ${styles.column} ${className} ${
          this.state.expandIsSelected ? styles.collapsed : styles.uncollapsed
        }`}
      >
        <div className={styles.header}>
          {header && <UTCardHeader header={header} />}
          <IconButton onClick={this.handleOnPress}>
            {this.state.expandIsSelected ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </div>
        <div className={this.state.expandIsSelected ? styles.active : styles.inactive}>{children}</div>
        {footer && <UTCardFooter footer={footer} />}
      </div>
    );
  }
}

UTCard.propTypes = {
  header: cardActionsTypes.header,
  footer: cardActionsTypes.footer,
  horizontal: bool,
  className: string,
  isCollapsible: bool
};
export default UTCard;
