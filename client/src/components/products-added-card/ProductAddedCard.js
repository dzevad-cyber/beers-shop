import React from 'react';

import styles from './ProductAddedCard.module.scss';

import { ReactComponent as DoneSvg } from '../../assets/icons/done_all-24px.svg';
import ImgBox from '../img-box/ImgBox';
import BtnGoTo from '../btn-go-to/BtnGoTo';
import CheckboxBox from '../checkbox-box/CheckboxBox';

const ProductAddedCard = ({
  product,
  cartTotalItems,
  cartTotalPrice,
  setToggleBackdrop,
}) => {
  const { img, company, name, count, totalPrice } = product;

  return (
    <section className={styles.card}>
      <section className={styles.card__product}>
        <h3 className={styles.card__title}>
          <DoneSvg className={styles.icon} /> Added to cart successfully!
        </h3>
        <ImgBox src={img} _classNameBox={styles.img} />
        <p className={styles.card__productName}>
          {company} - {name}
        </p>
        <p className={styles.card__productCount}>QTY: {count}</p>
        <p className={styles.card__productTotalPrice}>
          TOTAL: ${totalPrice.toFixed(2)}
        </p>
      </section>
      <section className={styles.card__cartInfo}>
        <p className={styles.card__cartText}>
          There are {cartTotalItems} items in your cart
        </p>
        <p className={styles.card__cartTotalBox}>
          <span className={styles.card__cartTotalText}>TOTAL: </span>
          <span className={styles.card__cartTotalAmount}>
            ${cartTotalPrice.toFixed(2)}
          </span>
        </p>
        <BtnGoTo _onClick={setToggleBackdrop}>continue shopping</BtnGoTo>
        <BtnGoTo _to='/cart'>view cart</BtnGoTo>
        <CheckboxBox />
      </section>
    </section>
  );
};

export default ProductAddedCard;
