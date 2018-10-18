import React, { PureComponent } from 'react';
import { submit } from 'redux-form';

import ClientConsumption from './ClientConsumption';
import DeviceConsumption from './DeviceConsumption';
import TransformerConsumption from './TransformerConsumption';

class Reports extends PureComponent {
  handleClientConsumption = () => alert('test');

  handleSubmitClientConsumption = () => this.props.dispatch(submit('CLIENT_CONSUMPTION'));

  handleSubmitDeviceConsumption = () => this.props.dispatch(submit('DEVICE_CONSUMPTION'));

  handleSubmitTransformerConsumption = () => this.props.dispatch(submit('TRANSFORMER_CONSUMPTION'));

  render() {
    return (
      <div>
        <ClientConsumption
          submit={this.handleSubmitClientConsumption}
          onSubmit={this.handleClientConsumption}
        />
        <DeviceConsumption
          submit={this.handleSubmitDeviceConsumption}
          onSubmit={this.handleClientConsumption}
        />
        <TransformerConsumption
          submit={this.handleSubmitTransformerConsumption}
          onSubmit={this.handleClientConsumption}
        />
      </div>
    );
  }
}

export default Reports;
