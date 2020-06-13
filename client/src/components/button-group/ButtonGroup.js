import React from 'react';

import styles from './ButtonGroup.module.scss';

const ButtonGroup = ({ children }) => {
  return <div className={styles.buttonGroup}>{children}</div>;
};

export default React.memo(ButtonGroup);
