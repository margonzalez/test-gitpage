/* eslint-disable */
import React from 'react';
import Radium from 'radium';

import styles from './styles';

class Drawer extends React.Component {
  render() {
    return (
      <div>
        <div style={[styles.container, this.props.open ? styles.container.opened : {}]}>
          {this.props.children}
        </div>
        <div
          style={[styles.overlay, this.props.open ? styles.overlay.opened : {}]}
          onClick={this.props.closeSidebar}
        />
      </div>
    );
  }
}

export default Radium(Drawer);
