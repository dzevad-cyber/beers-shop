import React from 'react';

import styles from './MenuIcon.module.scss';

const MenuIcon = ({ onClick }) => {
  return (
    <div className={styles.menuIcon} onClick={onClick}>
      <div className={styles.menuIcon__line}></div>
    </div>
  );
};

export default MenuIcon;
