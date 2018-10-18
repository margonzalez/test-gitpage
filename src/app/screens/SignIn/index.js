import React, { Component } from 'react';
import { bool } from 'prop-types';
import { submit, isInvalid, hasSubmitFailed } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import AuthFormWrapper from 'app/components/AuthFormWrapper';
import UTButton from 'app/components/UTButton';
import AuthFormBox from 'app/components/AuthFormBox';
import UTLabel from 'app/components/UTLabel';
import { PUBLIC_MAP, MAP, DASHBOARD } from 'app/components/Routes/constants';

import styles from './styles.scss';
import SignIn from './layout';

class SignInContainer extends Component {
  handleSignIn = values => {
    // this.props.dispatch(authActions.signIn(values));
    this.props.dispatch(push(DASHBOARD));
  };

  submitForm = () => this.props.dispatch(submit('SIGN_IN_FORM'));

  goToMap = () => this.props.dispatch(push(PUBLIC_MAP));

  render() {
    return (
      <AuthFormWrapper>
        <div className={styles.container}>
          <AuthFormBox title="¡Hola! Ingresá tu usuario y contraseña">
            <SignIn onSubmit={this.handleSignIn} />
          </AuthFormBox>
          <UTButton
            disabled={this.props.submitFailed && this.props.invalid}
            primary
            borderless
            type="submit"
            onPress={this.submitForm}
            className={styles.signInButton}
          >
            {'Ingresar'}
          </UTButton>
          <UTButton flat onPress={this.goToMap} className={styles.signInButton}>
            {'Localizacion'}
          </UTButton>
        </div>
      </AuthFormWrapper>
    );
  }
}

SignInContainer.propTypes = {
  signInLoading: bool,
  submitFailed: bool,
  invalid: bool
};

const mapStateToProps = state => ({
  invalid: isInvalid('SIGN_IN_FORM')(state),
  submitFailed: hasSubmitFailed('SIGN_IN_FORM')(state)
  // signInLoading: store.auth.signInLoading || store.auth.loading || store.account.loading,
});

export default connect(mapStateToProps)(SignInContainer);
