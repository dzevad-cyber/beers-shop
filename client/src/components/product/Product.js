import React from 'react';

import styles from './Product.module.scss';
import ImgBox from '../img-box/ImgBox';

import beer from '../../assets/images/Craft_Beer_-_Cedar_600x.png';

const Product = () => {
  return (
    <section className={styles.product}>
      <ImgBox src={beer} />
      <h4 className={styles.product__name}>Craft Beer - Oak</h4>
      <section className={styles.product__ingredients}>
        <p>ABV: 4,5%</p>
        <p>WORT: 15,5%</p>
        <p>IBU: 34</p>
        <p>Bottle: 0,5</p>
      </section>
      <h5 className={styles.product__price}>$3.99</h5>
    </section>
  );
};

export default Product;
