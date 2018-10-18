import React, { Component } from 'react';
import { arrayOf, shape, number, string, any, func, bool } from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

import UTCheckRow from './components/UTCheckRow';
import styles from './styles.scss';

class UTCheckList extends Component {
  state = { selectAll: false };

  componentDidMount = () => {
    if (this.props.allChecked) this.handleCheckAll();
  };

  handleChange = id => {
    const newValues =
      this.props.input.value.indexOf(id) === -1
        ? [...this.props.input.value, id]
        : this.props.input.value.filter(elem => elem !== id);
    this.props.input.onChange(newValues);
    this.setState({ selectAll: newValues.length === this.props.list.length });
  };

  handleCheckAll = () =>
    this.setState(prevState => {
      if (!prevState.selectAll && this.props.list) {
        this.props.input.onChange(this.props.list.map(item => item[this.props.valueKey]));
      } else {
        this.props.input.onChange([]);
      }
      return { selectAll: !prevState.selectAll };
    });

  render() {
    return (
      <div className={styles.container}>
        <UTCheckRow
          onChange={this.handleCheckAll}
          checked={this.state.selectAll}
          label={this.props.additionalInfo.header}
        />
        <FormGroup>
          {this.props.list.map(item => (
            <UTCheckRow
              key={item[this.props.valueKey]}
              value={item[this.props.valueKey]}
              label={item[this.props.labelKey]}
              checked={this.props.input.value.indexOf(item[this.props.valueKey]) !== -1}
              onChange={this.handleChange}
            />
          ))}
        </FormGroup>
        <FormHelperText>{this.props.additionalInfo.footer}</FormHelperText>
      </div>
    );
  }
}

UTCheckList.defaultProps = {
  list: []
};

UTCheckList.propTypes = {
  valueKey: string.isRequired,
  labelKey: string.isRequired,
  input: shape({
    onChange: func,
    value: any
  }),
  additionalInfo: shape({ header: string, footer: string }),
  list: arrayOf(
    shape({
      id: number,
      label: string,
      checked: bool
    })
  ),
  allChecked: bool
};

export default UTCheckList;
