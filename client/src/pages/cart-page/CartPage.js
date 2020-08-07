import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CartPage.module.scss';

import {
  selectCartProducts,
  selectCartTotalPrice,
  cartProductsRemoved,
  cartProductRemoved,
  cartPriceCalculated,
  cartItemsCalculated,
} from '../../store/cartSlice';
import CartProduct from '../../components/cart-product/CartProduct';
import Button from '../../components/button/Button';

import { ReactComponent as UpdateSvg } from '../../assets/icons/autorenew-24px.svg';
import { ReactComponent as RemoveSvg } from '../../assets/icons/delete-24px.svg';
import { ReactComponent as BackSvg } from '../../assets/icons/reply-24px.svg';
import { ReactComponent as BasketSvg } from '../../assets/icons/shopping_basket-24px.svg';

import BtnGoTo from '../../components/btn-go-to/BtnGoTo';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import CheckboxBox from '../../components/checkbox-box/CheckboxBox';

const CartPage = () => {
  const products = useSelector(selectCartProducts);
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onRemoveProductFromCart = (id) => {
    dispatch(cartProductRemoved({ id }));
    dispatch(cartPriceCalculated());
    dispatch(cartItemsCalculated());
  };

  return (
    <section className={styles.cartPage}>
      {Object.keys(products).length === 0 ? (
        <section className={styles.cartPage__empty}>
          <BasketSvg className={styles.basketIcon} />
          <h3 className={styles.cartPage__subtitle}>shopping cart is empty</h3>
          <p className={styles.cartPage__text}>
            You have no items in your shopping cart.
          </p>
          <BtnGoTo _className={styles.btnEmpty} _to="/">
            continue shopping
          </BtnGoTo>
        </section>
      ) : (
        <section className={styles.cartPage__listBox}>
          <h2 className={styles.cartPage__title}>shopping cart</h2>
          <ul className={styles.cartPage__list}>
            {Object.keys(products).map((key, index) => (
              <li key={index} className={styles.cartPage__item}>
                <CartProduct
                  _onClick={() => onRemoveProductFromCart(key)}
                  key={key}
                  product={products[key]}
                />
              </li>
            ))}
          </ul>
          <section className={styles.cartPage__btnGroup}>
            <Link to="/" className={styles.link}>
              <Button className={styles.btn} icon={<BackSvg />}>
                continue shopping
              </Button>
            </Link>

            <Button
              className={styles.btn}
              _onClick={() => dispatch(cartProductsRemoved())}
              icon={<RemoveSvg />}
            >
              clear shopping cart
            </Button>
            <Button
              // _onClick={() => onCartUpdate}
              className={styles.btn}
              icon={<UpdateSvg />}
            >
              update cart
            </Button>
          </section>
          <section className={styles.cartPage__formList}>
            <Form _className={styles.form}>
              <h3 className={styles.form__title}>estimate shipping and tax</h3>
              <p className={styles.form__text}>
                Enter your desitnation to get a shipping estimate
              </p>
              <Input _label="country" _required={true} />
              <Input _label="state/province" _required={true} />
              <Input _label="zip/postal code" _placeholder="Zip/Postal Code" />
              <BtnGoTo>calculate shipping</BtnGoTo>
            </Form>
            <Form _className={styles.form}>
              <h3 className={styles.form__title}>note</h3>
              <p className={styles.form__text}>
                Add special instructions for your order...
              </p>
              <textarea className={styles.form__textarea}></textarea>
            </Form>
            <Form _className={styles.form}>
              <h4 className={styles.form__subTotal}>
                subtotal: <span>${cartTotalPrice.toFixed(2)}</span>
              </h4>
              <h4 className={styles.form__grandTotal}>
                total:
                <span className={styles.form__grandTotalPrice}>
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </h4>
              <CheckboxBox />
            </Form>
          </section>
        </section>
      )}
    </section>
  );
};

export default CartPage;
