import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './SlideMenu.module.scss';
import slide from '../../transitions/slide.module.scss';

const SlideMenu = ({ children, onClick, toggle }) => {
  return (
    <CSSTransition in={toggle} classNames={slide} timeout={300} unmountOnExit>
      <section className={styles.slideMenu}>
        <header className={styles.slideMenu__close} onClick={onClick}>
          <span>X</span>
          <span>close</span>
        </header>
        <section className={styles.slideMenu__itemsBox}>{children}</section>
      </section>
    </CSSTransition>
  );
};

export default SlideMenu;
