import React from 'react';

import styles from './ProductsList.module.scss';
import Product from '../product/Product';
import { Link } from 'react-router-dom';

const ProductsList = ({ _className }) => {
  return (
    <section className={`${styles.productsList} ${_className}`}>
      <Link to='/product' className={styles.productBox}>
        <Product />
      </Link>
      <Link to='/product' className={styles.productBox}>
        <Product />
      </Link>
      <Link to='/product' className={styles.productBox}>
        <Product />
      </Link>
    </section>
  );
};

export default ProductsList;
