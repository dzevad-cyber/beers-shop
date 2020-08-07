import React from 'react';

import styles from './BtnAddToCart.module.scss';

const BtnAddToCart = ({ _onClick }) => {
  return (
    <button onClick={_onClick} className={styles.btnAddToCart}>
      add to cart
    </button>
  );
};

export default BtnAddToCart;
