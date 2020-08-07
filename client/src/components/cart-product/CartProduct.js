import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartProduct.module.scss';

import { ReactComponent as RemoveSvg } from '../../assets/icons/delete-24px.svg';

import ImgBox from '../img-box/ImgBox';
import Counter from '../counter/Counter';

import {
  productAdded,
  cartPriceCalculated,
  cartItemsCalculated,
} from '../../store/cartSlice';

const CartProduct = ({ product, _onClick }) => {
  const { img, company, name, price, count, totalPrice } = product;

  const [counter, setCounter] = useState(count);
  const dispatch = useDispatch();

  const onDecrementCount = () => {
    if (counter > 1) {
      setCounter(() => counter - 1);
      dispatch(productAdded({ ...product, count: counter - 1 }));
      dispatch(cartPriceCalculated());
      dispatch(cartItemsCalculated());
    }
  };

  const onIncrementCount = () => {
    setCounter(() => counter + 1);
    dispatch(productAdded({ ...product, count: counter + 1 }));
    dispatch(cartPriceCalculated());
    dispatch(cartItemsCalculated());
  };

  return (
    <section className={styles.cartProduct}>
      <ImgBox src={img} _classNameBox={styles.cartProduct__img} />
      <p className={styles.cartProduct__name}>
        {company} - {name}
      </p>
      <p className={styles.cartProduct__price}>${price.toFixed(2)}</p>
      <Counter
        count={counter}
        onDecrementCount={onDecrementCount}
        onIncrementCount={onIncrementCount}
        _className={styles.cartProduct__counter}
      />
      <p
        className={`${styles.cartProduct__price} ${styles.cartProduct__price}`}
      >
        ${totalPrice.toFixed(2)}
      </p>
      <RemoveSvg className={styles.icon} onClick={_onClick} />
    </section>
  );
};

export default CartProduct;
