import React from 'react';

import styles from './ProductPage.module.scss';

import ImgBox from '../../components/img-box/ImgBox';

import beersImg from '../../assets/images/Craft_Beer_-_Cedar_600x.png';
import Counter from '../../components/counter/Counter';

const ProductPage = () => {
  return (
    <section className={styles.productPage}>
      <ImgBox src={beersImg} />
      <section className={styles.productPage__info}>
        <h4 className={styles.productPage__name}>Craft Beer - Oak</h4>
        <h5 className={styles.productPage__price}>$3.99</h5>
        <section className={styles.productPage__ingredients}>
          <p>ABV: 4,5%</p>
          <p>WORT: 15,5%</p>
          <p>IBU: 34</p>
          <p>Bottle: 0,5</p>
        </section>
        <div className={styles.productPage__addToCartBox}>
          <Counter />
          <button className={styles.productPage__btn}>add to cart</button>
        </div>
        <p className={styles.productPage__text}>
          We are proud to present our best premium Shopify theme - Wokiee.
        </p>
        <p className={styles.productPage__text}>
          This is multi-purpose software that can be used for any type of the
          store. Great variety of available options will make customization
          process very easy.
        </p>
        <p className={styles.productPage__text}>
          Please, take a look at feature list and compare with our competitors.
        </p>
      </section>
    </section>
  );
};

export default ProductPage;
