import React, { PureComponent } from 'react';
import { bool, string } from 'prop-types';
import { connect } from 'react-redux';

import AlertActions from 'redux/alert/actions';

import UTDialog from '../UTDialog';

class UTAlertDialog extends PureComponent {
  handleCloseDialog = () => this.props.dispatch(AlertActions.closeAlertDialog());

  render() {
    return (
      <UTDialog
        isOpen={this.props.dialogIsOpen}
        title={this.props.dialogTitle}
        onRequestClose={this.handleCloseDialog}
        acceptButton={{
          text: 'Cerrar',
          onPress: this.handleCloseDialog
        }}
      >
        {this.props.dialogContent}
      </UTDialog>
    );
  }
}

UTAlertDialog.propTypes = {
  dialogIsOpen: bool,
  dialogTitle: string,
  dialogContent: string
};

const mapStateToProps = store => ({
  dialogIsOpen: store.alert.alertDialogOpen,
  dialogTitle: store.alert.alertDialogTitle,
  dialogContent: store.alert.alertDialogContent
});

export default connect(mapStateToProps)(UTAlertDialog);
