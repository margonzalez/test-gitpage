import React, { PureComponent, Fragment } from 'react';
import { string, bool } from 'prop-types';
import { Visibility, VisibilityOff, HelpOutline } from '@material-ui/icons';
import { TextField, IconButton, InputAdornment, Grid } from '@material-ui/core';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import { shouldShowErrors } from 'utils/formUtils';
import { inputPropTypes, metaPropTypes } from 'types/formTypes';
import UTLabel from 'app/components/UTLabel';

import styles from './styles.scss';
import stylesJS from './stylesJS';

const preventDefault = event => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

class UTTextInput extends PureComponent {
  state = { visible: false };

  handleClickShowPassword = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleChange = event => this.props.input.onChange(event.target.value);

  render() {
    const TextInput = (
      <TextField
        label={this.props.placeholder}
        onKeyPress={preventDefault}
        error={shouldShowErrors(this.props.meta)}
        helperText={(shouldShowErrors(this.props.meta) && this.props.meta.error) || ''}
        disabled={this.props.disabled}
        onChange={this.handleChange}
        value={this.props.input.value}
        fullWidth
        margin="none"
        autoComplete="off"
        InputProps={{
          endAdornment: this.props.type === 'password' && (
            <InputAdornment position="end">
              <IconButton onClick={this.handleClickShowPassword}>
                {!this.state.visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          type: this.props.type === 'password' && !this.state.visible ? 'password' : 'text'
        }}
        InputLabelProps={{
          classes: {
            root: this.props.labelRootClassName
          }
        }}
      />
    );
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        {this.props.tooltipMessage ? (
          <Fragment>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs>
                {TextInput}
              </Grid>
              <Grid item style={stylesJS.icon}>
                <Tooltip
                  theme="dark"
                  delay={350}
                  hideDelay={100}
                  animation="scale"
                  interactive
                  hideOnClick={false}
                  html={
                    <div className={styles.tooltipContentContainer}>
                      <UTLabel white>{this.props.tooltipMessage}</UTLabel>
                    </div>
                  }
                  position="top-end"
                  arrow
                  popperOptions={{
                    modifiers: {
                      preventOverflow: {
                        enabled: false
                      }
                    }
                  }}
                >
                  <div>
                    <HelpOutline />
                  </div>
                </Tooltip>
              </Grid>
            </Grid>
          </Fragment>
        ) : (
          <Fragment>{TextInput}</Fragment>
        )}
      </div>
    );
  }
}

UTTextInput.propTypes = {
  type: string,
  placeholder: string,
  className: string,
  input: inputPropTypes.isRequired,
  meta: metaPropTypes.isRequired,
  disabled: bool,
  tooltipMessage: string,
  labelRootClassName: string
};

export default UTTextInput;
