import React from 'react';

import { CSSTransition } from 'react-transition-group';

import styles from './AccountMenu.module.scss';
import slide from '../../transitions/slide.module.scss';

import { ReactComponent as ArrowRighSvg } from '../../assets/icons/arrow_right_alt-24px.svg';

import Button from '../button/Button';
import Backdrop from '../backdrop/Backdrop';

const AccountMenu = ({ children, toggle, _onClick }) => {
  return (
    <CSSTransition classNames={slide} in={toggle} timeout={300} unmountOnExit>
      <section className={styles.accountMenu}>
        <Backdrop className={styles.backdrop} _onClick={_onClick} />

        <section className={styles.accountMenu__main}>
          <Button className={styles.btnClose} onClick={_onClick}>
            <ArrowRighSvg onClick={_onClick} />
          </Button>
          {children}
        </section>
      </section>
    </CSSTransition>
  );
};

export default AccountMenu;
