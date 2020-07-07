import React from 'react';

import styles from './ProductsPage.module.scss';
import ProductsList from '../products-list/ProductsList';

const ProductsPage = () => {
  return (
    <section className={styles.productsPage}>
      <ProductsList _className={styles.productsPage__list} />
    </section>
  );
};

export default ProductsPage;
