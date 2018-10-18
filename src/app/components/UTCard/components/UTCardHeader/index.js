import React from 'react';

import UTDotMenu from 'app/components/UTDotMenu';
import UTLabel from 'app/components/UTLabel';
import { cardActionsTypes } from 'types/commonTypes';

import styles from './styles.scss';

const UTCardHeader = ({ header }) => (
  <div className={styles.base}>
    <div className={`${styles.titles} ${header.blurred && styles.blurred}`}>
      {header.title && (
        <UTLabel xlarge bold>
          {header.title}
        </UTLabel>
      )}
      {header.subtitle && (
        <UTLabel gray semibold>
          {header.subtitle}
        </UTLabel>
      )}
    </div>
    {header.rightComponent}
    {header.menu && <UTDotMenu options={header.menu} />}
  </div>
);

UTCardHeader.propTypes = {
  header: cardActionsTypes.header
};

export default UTCardHeader;
