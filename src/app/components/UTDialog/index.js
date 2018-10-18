import React from 'react';
import { bool, func, string, shape } from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import UTButton from '../UTButton';

import styles from './styles.scss';

const UTDialog = ({
  isOpen,
  onRequestClose,
  title,
  cancelButton,
  acceptButton,
  children,
  contentClassName
}) => (
  <Dialog
    open={isOpen}
    onClose={onRequestClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    classes={{ paper: styles.container }}
  >
    {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
    <DialogContent className={contentClassName}>{children}</DialogContent>
    <DialogActions>
      {cancelButton && (
        <UTButton flat className={cancelButton.className} onPress={cancelButton.onPress}>
          {cancelButton.text}
        </UTButton>
      )}
      {acceptButton && (
        <UTButton
          flat
          onPress={acceptButton.onPress}
          disabled={acceptButton.disabled}
          className={`${styles.acceptButton} ${acceptButton.className}`}
        >
          {acceptButton.text}
        </UTButton>
      )}
    </DialogActions>
  </Dialog>
);

const dialogButtonPropTypes = shape({
  onPress: func.isRequired,
  text: string.isRequired,
  disabled: bool
});

UTDialog.propTypes = {
  isOpen: bool.isRequired,
  onRequestClose: func.isRequired,
  title: string,
  cancelButton: dialogButtonPropTypes,
  acceptButton: dialogButtonPropTypes,
  contentClassName: string
};

export default UTDialog;
