import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

import styles from './CartMenu.module.scss';
import slide from '../../transitions/slide.module.scss';

import { ReactComponent as ShoppingCartSvg } from '../../assets/icons/shopping_cart-24px.svg';
import { ReactComponent as ArrowRighSvg } from '../../assets/icons/arrow_right_alt-24px.svg';

import Button from '../button/Button';
import Backdrop from '../backdrop/Backdrop';
import {
  selectCartProducts,
  selectCartTotalPrice,
} from '../../store/cartSlice';
import MenuProductItem from '../menu-product-item/MenuProductItem';
import CheckboxBox from '../checkbox-box/CheckboxBox';
import { Link } from 'react-router-dom';

const CartMenu = ({ children, toggle, _onClick }) => {
  const productsInCart = useSelector(selectCartProducts);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <CSSTransition classNames={slide} in={toggle} timeout={300} unmountOnExit>
      <section className={styles.cartMenu}>
        <Backdrop className={styles.backdrop} _onClick={_onClick} />
        <section className={styles.cartMenu__main}>
          <Button className={styles.btnClose} onClick={_onClick}>
            <ArrowRighSvg onClick={_onClick} />
          </Button>
          {Object.keys(productsInCart).length > 0 ? (
            <ul className={styles.cartMenu__itemsList}>
              {Object.keys(productsInCart).map((key) => {
                return (
                  <li key={key} className={styles.menuItem}>
                    <MenuProductItem product={productsInCart[key]} />
                  </li>
                );
              })}
              <p className={styles.cartMenu__totalBox}>
                <span className={styles.cartMenu__total}>TOTAL:</span>
                <span className={styles.cartMenu__totalPrice}>
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </p>
              <CheckboxBox />
              <Link className={styles.link} to="/cart">
                <Button _onClick={_onClick}>view cart</Button>
              </Link>
            </ul>
          ) : (
            <section className={styles.cartMenu__empty}>
              <ShoppingCartSvg className={styles.icon} />
              <p>No Products in the Cart</p>
            </section>
          )}
        </section>
      </section>
    </CSSTransition>
  );
};

export default CartMenu;
