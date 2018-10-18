import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import WithLoading from 'app/components/WithLoading';
import UTTextInput from 'app/components/UTTextInput';
import { required, passwordValidations } from 'utils/inputValidations';
import { submitListener } from 'utils/formUtils';

import styles from './styles.scss';

class SignIn extends PureComponent {
  handleKeyDown = event => submitListener(event, this.props.handleSubmit);
  requiredValidation = [required('Este campo es obligatorio')];
  render() {
    return (
      <form onKeyDown={this.handleKeyDown} onSubmit={this.props.handleSubmit}>
        <div className={styles.field}>
          <Field
            component={UTTextInput}
            name="username"
            placeholder="Usuario"
            validate={this.requiredValidation}
            autoComplete="off"
          />
        </div>
        <div className={styles.field}>
          <Field
            component={UTTextInput}
            name="password"
            placeholder="Contraseña"
            type="password"
            validate={passwordValidations}
            autoComplete="off"
            password
          />
        </div>
      </form>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: func
};

export default WithLoading(props => props.loading)(reduxForm({ form: 'SIGN_IN_FORM' })(SignIn));
