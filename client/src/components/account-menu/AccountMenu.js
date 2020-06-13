import React from 'react';

import { CSSTransition } from 'react-transition-group';

import styles from './AccountMenu.module.scss';
import slide from '../../transitions/slide.module.scss';

const AccountMenu = ({ children, toggle }) => {
  return (
    <CSSTransition classNames={slide} in={toggle} timeout={300} unmountOnExit>
      <div className={styles.accountMenu}>{children}</div>
    </CSSTransition>
  );
};

export default AccountMenu;
