import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class UTCheckRow extends Component {
  handleChange = () => this.props.onChange(this.props.value);

  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox checked={this.props.checked} onChange={this.handleChange} value={this.props.value} />
        }
        label={this.props.label}
      />
    );
  }
}

UTCheckRow.propTypes = {
  onChange: func,
  label: string,
  value: string,
  checked: bool
};

export default UTCheckRow;
