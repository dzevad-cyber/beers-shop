import React from 'react';

import styles from './Tooltip.module.scss';

const Tooltip = ({ children, text }) => {
  return (
    <div className={styles.tooltipBox}>
      {children}
      <p className={styles.tooltipBox__tooltip}>{text}</p>
    </div>
  );
};

export default React.memo(Tooltip);
