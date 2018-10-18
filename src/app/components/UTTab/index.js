import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { arrayOf, shape, string, bool, func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { style } from './styles';

class UTTab extends Component {
  state = { value: this.props.defaultValue };

  componentDidMount = () => this.props.defaultValue && this.props.onChange(this.props.defaultValue);

  handleChange = (_, value) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { classes } = this.props;
    return (
      <Tabs
        fullWidth
        value={this.state.value}
        onChange={this.handleChange}
        classes={{
          root: this.props.tabsRootClassName || classes.tabsRoot
        }}
        TabIndicatorProps={{
          className: this.props.indicatorClassName || classes.indicator
        }}
      >
        {this.props.options.map(opt => (
          <Tab
            classes={{
              root: this.props.tabRootClassName || classes.tabRoot,
              selected: this.props.selectedClassName || classes.selected,
              textColorPrimary: this.props.textColorPrimary,
              label: this.props.labelClassName
            }}
            key={opt.value}
            value={opt.value}
            label={opt.label}
            disabled={opt.disabled}
            icon={opt.icon}
          />
        ))}
      </Tabs>
    );
  }
}

UTTab.propTypes = {
  options: arrayOf(shape({ label: string, disabled: bool, icon: string })),
  defaultValue: string,
  onChange: func.isRequired,
  classes: object, // eslint-disable-line react/forbid-prop-types
  tabsRootClassName: string,
  indicatorClassName: string,
  tabRootClassName: string,
  selectedClassName: string,
  textColorPrimary: string,
  labelClassName: string
};

export default withStyles(style)(UTTab);
