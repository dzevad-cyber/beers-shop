import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './CartMenu.module.scss';
import slide from '../../transitions/slide.module.scss';

import { ReactComponent as ShoppingCartSvg } from '../../assets/icons/shopping_cart-24px.svg';
import { ReactComponent as ArrowRighSvg } from '../../assets/icons/arrow_right_alt-24px.svg';

import Button from '../button/Button';
import Backdrop from '../backdrop/Backdrop';

const CartMenu = ({ children, toggle, _onClick }) => {
  const empty = true;

  return (
    <CSSTransition classNames={slide} in={toggle} timeout={300} unmountOnExit>
      <section className={styles.cartMenu}>
        <Backdrop className={styles.backdrop} _onClick={_onClick} />
        <section className={styles.cartMenu__main}>
          <Button className={styles.btnClose} onClick={_onClick}>
            <ArrowRighSvg onClick={_onClick} />
          </Button>
          <ShoppingCartSvg className={styles.icon} />
          {empty ? <p>No Products in the Cart</p> : { children }}
        </section>
      </section>
    </CSSTransition>
  );
};

export default CartMenu;
