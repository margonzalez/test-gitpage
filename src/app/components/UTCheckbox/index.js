import React, { PureComponent } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { string } from 'prop-types';

import { inputPropTypes } from 'types/formTypes';
import UTLabel from 'app/components/UTLabel';

class UTCheckbox extends PureComponent {
  handleChange = (event, value) => this.props.input.onChange(value);

  render() {
    return (
      <React.Fragment>
        <FormControlLabel
          value={this.props.input.value}
          label={<UTLabel>{this.props.label}</UTLabel>}
          control={<Checkbox />}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

UTCheckbox.propTypes = {
  input: inputPropTypes,
  label: string.isRequired
};

export default UTCheckbox;
