import React from 'react';

import { cardActionsTypes } from 'types/commonTypes';
import UTButton from 'app/components/UTButton';

import styles from './styles.scss';

const UTCardFooter = ({ footer }) => (
  <div className={styles.base}>
    {footer.map(button => (
      <UTButton
        flat={button.flat}
        key={button.name}
        onPress={button.onPress}
        loading={button.loading}
        className={styles.button}
        disabled={button.disabled}
      >
        {button.name}
      </UTButton>
    ))}
  </div>
);

UTCardFooter.propTypes = {
  footer: cardActionsTypes.footer
};

export default UTCardFooter;
