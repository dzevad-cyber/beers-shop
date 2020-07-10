import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './ProductPage.module.scss';

import ImgBox from '../../components/img-box/ImgBox';

import Counter from '../../components/counter/Counter';

import { selectProduct } from '../../store/productsSlice';

const ProductPage = () => {
  const { id } = useParams();
  const { img, company, name, abv, wort, ibu, bottle, price } = useSelector(
    selectProduct(id)
  );

  return (
    <section className={styles.productPage}>
      <ImgBox src={img} _classNameImg={styles.productPage__img} />
      <section className={styles.productPage__info}>
        <h4 className={styles.productPage__name}>
          {company} - {name}
        </h4>
        <h5 className={styles.productPage__price}>${price}</h5>
        <section className={styles.productPage__ingredients}>
          <p>ABV: {abv}</p>
          <p>WORT: {wort}%</p>
          <p>IBU: {ibu}</p>
          <p>Bottle: {bottle}</p>
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
