import React from 'react';
import Radium from 'radium';

import logo from 'app/screens/Dashboard/assets/isologo.png';

import styles from './styles';

class Logo extends React.Component {
  render() {
    return (
      <span
        style={[this.props.styles ? this.props.styles : {}, styles.logo, { backgroundImage: `url(${logo})` }]}
      />
    );
  }
}

export default Radium(Logo);
