import React, { PureComponent } from 'react';
import { Select, InputLabel, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
import { string, arrayOf, shape, bool } from 'prop-types';
import i18next from 'i18next';

import { shouldShowErrors } from 'utils/formUtils';
import { inputPropTypes, metaPropTypes } from 'types/formTypes';

import styles from './styles.scss';

class UTSelect extends PureComponent {
  handleChange = event => this.props.input.onChange(event.target.value);

  render() {
    let sortedOptions = [...this.props.options];
    sortedOptions = this.props.withOrder
      ? sortedOptions.sort((a, b) => (a.order < b.order ? -1 : 1))
      : sortedOptions;

    return (
      <FormControl className={styles.container} error={shouldShowErrors(this.props.meta)}>
        <InputLabel>{this.props.placeholder}</InputLabel>
        <Select
          name={this.props.input.name}
          value={this.props.input.value}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        >
          <MenuItem value="">{i18next.t('Forms:selectOption')}</MenuItem>
          {sortedOptions.map(option => (
            <MenuItem key={option[this.props.valueKey]} value={option[this.props.valueKey]}>
              {option[this.props.labelKey]}
            </MenuItem>
          ))}
        </Select>
        {shouldShowErrors(this.props.meta) && <FormHelperText>{this.props.meta.error}</FormHelperText>}
      </FormControl>
    );
  }
}

UTSelect.defaultProps = {
  options: []
};

UTSelect.propTypes = {
  input: inputPropTypes.isRequired,
  meta: metaPropTypes.isRequired,
  disabled: bool,
  valueKey: string.isRequired,
  labelKey: string.isRequired,
  placeholder: string.isRequired,
  withOrder: bool,
  options: arrayOf(shape({}).isRequired)
};

export default UTSelect;
