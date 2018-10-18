import React, { PureComponent } from 'react';
import { func, any, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import UTTextInput from 'app/components/UTTextInput';
import UTLabel from 'app/components/UTLabel';
import UTButton from 'app/components/UTButton';
import UTFormField from 'app/components/UTFormField';
import { required, validDate, maxDate, minDate } from 'utils/inputValidations';
import { FIELD_DATE } from 'constants/userForms';

import styles from '../../styles.scss';

class ClientConsumption extends PureComponent {
  required = [required('Este campo es obligatorio')];
  validDate = [
    validDate('Formato de fecha invalido'),
    maxDate('31-12-2018', 'Debe ingresar una fecha menor'),
    minDate('01-12-2017', 'Debe ingresar una fecha mayor')
  ];
  render() {
    const { isClient } = this.props;
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className={`${styles.formContainer} ${this.props.containerProps}`}
      >
        <UTLabel xlarge bold>
          {this.props.title || 'Consumo de un cliente'}
        </UTLabel>
        <div className={styles.fieldsContainer}>
          {!isClient && (
            <div className={styles.textField}>
              <Field
                name="clientUsername"
                component={UTTextInput}
                placeholder="Ingrese nombre de usuario del cliente"
                validate={this.required}
              />
            </div>
          )}
          <Field
            name="dateInit"
            component={UTFormField}
            validate={this.validDate}
            field={{
              type: FIELD_DATE,
              id: 'date',
              placeholder: 'Ingrese la fecha inicial'
            }}
          />
          <Field
            name="dateFinal"
            component={UTFormField}
            placeholder="Ingrese la fecha final"
            validate={this.validDate}
            field={{
              type: FIELD_DATE,
              id: 'date',
              placeholder: 'Ingrese la fecha final'
            }}
          />
        </div>
        <UTButton onPress={this.props.submit}>Obtener consumo</UTButton>
      </form>
    );
  }
}

ClientConsumption.propTypes = {
  handleSubmit: func,
  submit: func,
  title: string,
  isClient: bool,
  containerProps: any // eslint-disable-line react/forbid-prop-types
};

export default reduxForm({ form: 'CLIENT_CONSUMPTION' })(ClientConsumption);
