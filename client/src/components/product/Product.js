import React from 'react';

import styles from './Product.module.scss';
import ImgBox from '../img-box/ImgBox';

const Product = ({
  product: { img, company, name, abv, wort, ibu, bottle, price },
}) => {
  return (
    <section className={styles.product}>
      <ImgBox src={img} />
      <h4 className={styles.product__name}>
        {company} - {name}
      </h4>
      <section className={styles.product__ingredients}>
        <p>ABV: {abv}%</p>
        <p>WORT: {wort}%</p>
        <p>IBU: {ibu}</p>
        <p>Bottle: {bottle}</p>
      </section>
      <h5 className={styles.product__price}>${price}</h5>
    </section>
  );
};

export default Product;
