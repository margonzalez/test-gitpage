import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import UTTextInput from 'app/components/UTTextInput';
import UTLabel from 'app/components/UTLabel';
import UTButton from 'app/components/UTButton';
import UTFormField from 'app/components/UTFormField';
import { required, validDate, maxDate, minDate } from 'utils/inputValidations';
import { FIELD_DATE } from 'constants/userForms';

import styles from '../../styles.scss';

class DeviceConsumption extends PureComponent {
  required = [required('Este campo es obligatorio')];
  validDate = [
    validDate('Formato de fecha invalido'),
    maxDate('31-12-2018', 'Debe ingresar una fecha menor'),
    minDate('01-12-2017', 'Debe ingresar una fecha mayor')
  ];
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={styles.formContainer}>
        <UTLabel xlarge bold>
          {'Consumo de un dispositivo'}
        </UTLabel>
        <div className={styles.fieldsContainer}>
          <div className={styles.textField}>
            <Field
              name="deviceType"
              component={UTTextInput}
              placeholder="Ingrese el tipo de dispositivo"
              validate={this.required}
            />
          </div>
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

DeviceConsumption.propTypes = {
  handleSubmit: func,
  submit: func
};

export default reduxForm({ form: 'DEVICE_CONSUMPTION' })(DeviceConsumption);
