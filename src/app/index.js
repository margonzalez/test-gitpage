import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium';
import { MuiThemeProvider } from '@material-ui/core';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// import AuthActions from '../redux/auth/actions';

import { apiSetup } from 'config/api';
import Routes from 'app/components/Routes';
import '../App.css';

import { theme } from './styles';
import UTAlertDialog from './components/UTAlertDialog';
import UTAlert from './components/UTAlert';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
    // this.props.dispatch(AuthActions.init());
  }

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <StyleRoot>
            <UTAlert />
            <UTAlertDialog />
            <Routes />
          </StyleRoot>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default connect()(App);
