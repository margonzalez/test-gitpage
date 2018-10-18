import { createMuiTheme } from '@material-ui/core';
import Colors from '@scss/_colors.scss';

import { medium, small } from 'constants/fontSizes';
import '../fonts/Nunito.css';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito'
  },
  overrides: {
    MuiMenuItem: {
      root: {
        fontSize: medium
      }
    },
    MuiTypography: {
      root: {
        fontSize: medium
      },
      body1: {
        fontSize: medium,
        width: '100%',
        wordWrap: 'break-word'
      }
    },
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: Colors.inputPrimary
        },
        '&$disabled': {
          color: Colors.disabledGray
        }
      }
    },
    MuiInput: {
      input: {
        fontSize: medium,
        '&:disabled': {
          color: Colors.disabledGray
        }
      },
      underline: {
        // On hover
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid ${Colors.gray}`
        },
        // After submitting error without hover
        '&$disabled:before': {
          borderBottom: `1px dotted ${Colors.disabledGray}`
        },
        // Without hover
        '&:before': {
          borderBottom: `1px solid ${Colors.gray}`
        },
        // Border growth
        '&$focused:after': {
          borderBottom: `2px solid ${Colors.inputPrimary}`
        },
        // Border growth and dissapear
        '&:after': {
          borderBottom: `2px solid ${Colors.inputPrimary}`
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$error': {
          color: Colors.gray
        },
        '&$focused': {
          color: Colors.inputPrimary,
          '&$error': {
            color: Colors.error
          }
        },
        color: Colors.gray,
        fontSize: medium
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: small
      }
    },
    MuiPaper: {
      root: {
        overflowX: 'auto'
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: Colors.inputPrimary
        },
        '&$disabled': {
          color: Colors.disabledGray
        }
      }
    }
  }
});
