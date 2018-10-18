import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { bool, string, func } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { DatePickerStyle, styles } from './styles';

class UTDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.onChange(moment(date).format('DD-MM-YYYY'));
  };

  render() {
    return (
      <div name={this.props.name} style={styles.container}>
        <DatePickerStyle />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          className="react-datepicker__input"
          fixedHeight
          placeholderText={this.props.placeholder}
        />
      </div>
    );
  }
}

UTDatePicker.propTypes = {
  onChange: func.isRequired,
  disabled: bool,
  name: string,
  placeholder: string
};

export default UTDatePicker;
