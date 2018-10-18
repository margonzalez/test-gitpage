import React from 'react';
import { Style } from 'radium';

export function DatePickerStyle() {
  return (
    <Style
      rules={{
        '.react-datepicker-wrapper': {
          display: 'flex'
        },
        '.react-datepicker': {
          fontFamily: 'Nunito',
          width: '100%'
        },
        '.react-datepicker__header': {
          backgroundColor: '#2e3131'
        },
        '.react-datepicker__current-month': {
          color: '#B3CADB',
          fontWeight: 500,
          textTransform: 'capitalize'
        },
        '.react-datepicker__navigation--next': {
          borderLeftColor: '#B3CADB'
        },
        '.react-datepicker__navigation--previous': {
          borderRightColor: '#B3CADB'
        },
        '.react-datepicker__day-name': {
          color: '#B3CADB'
        },
        '.react-datepicker__input-container': {
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%'
        },
        '.react-datepicker__input': {
          width: '100%',
          fontFamily: 'Nunito',
          fontSize: 14,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          outline: 0,
          borderBottom: `1px solid rgba(0, 0, 0, 0.87)`,
          margin: '12px 0px'
        }
      }}
    />
  );
}

export const styles = {
  container: {
    width: '100%'
  }
};
