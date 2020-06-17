import React from 'react';

import styles from './ProductsList.module.scss';
import Product from '../product/Product';

const ProductsList = () => {
  return (
    <section className={styles.productsList}>
      <Product />
      <Product />
      <Product />
    </section>
  );
};

export default ProductsList;
