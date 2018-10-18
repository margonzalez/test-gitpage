import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { shape, string, bool, number } from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { CheckCircle, Error, Info, Close } from '@material-ui/icons';

import AlertActions from 'redux/alert/actions';

import styles from './styles.scss';

const variantIcon = {
  success: CheckCircle,
  error: Error,
  info: Info
};

class UTAlert extends PureComponent {
  handleClose = (event, reason) => {
    // In case you don't want to dismiss notification clicking away
    if (reason === 'clickaway') {
      return;
    }
    this.props.dispatch(AlertActions.closeAlertSnackbar());
  };

  selectAlertType = () => {
    switch (this.props.alert.type) {
      case 'info':
        return styles.info;
      case 'error':
        return styles.error;
      default:
        return styles.success;
    }
  };

  render() {
    const anchor = {
      vertical: this.props.alert.topRight ? 'top' : 'bottom',
      horizontal: this.props.alert.topRight ? 'right' : 'left'
    };
    const transition = { direction: this.props.alert.topRight ? 'left' : 'up' };
    const AlertTypeIcon = variantIcon[this.props.alert.type];
    return (
      <Snackbar
        anchorOrigin={anchor}
        open={this.props.alert.open}
        autoHideDuration={this.props.alert.timeDuration}
        onClose={this.handleClose}
        TransitionProps={transition}
        ContentProps={{
          className: `${styles.snackbarContent} ${this.selectAlertType()}`,
          classes: { action: styles.action }
        }}
        message={
          <div className={styles.content}>
            <AlertTypeIcon classes={{ root: styles.alertTypeIcon }} />
            {this.props.alert.message}
          </div>
        }
        action={[
          <IconButton key="close" color="inherit" onClick={this.handleClose}>
            <Close />
          </IconButton>
        ]}
      />
    );
  }
}

const mapStateToProps = store => ({
  alert: store.alert.alertSnackbar
});

UTAlert.propTypes = {
  alert: shape({
    message: string,
    open: bool,
    type: string,
    topRight: bool,
    timeDuration: number
  })
};

export default connect(mapStateToProps)(UTAlert);
