import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './CartMenu.module.scss';
import slide from '../../transitions/slide.module.scss';

import { ReactComponent as ShoppingCartSvg } from '../../assets/icons/shopping_cart-24px.svg';

const CartMenu = ({ children, toggle }) => {
  const empty = true;

  return (
    <CSSTransition classNames={slide} in={toggle} timeout={300} unmountOnExit>
      <div className={styles.cartMenu}>
        <ShoppingCartSvg className={styles.icon} />
        {empty && <p>No Products in the Cart</p>}
      </div>
    </CSSTransition>
  );
};

export default CartMenu;
