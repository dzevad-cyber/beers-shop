import React from 'react';

import styles from './ProductsList.module.scss';

const ProductsList = ({ _className, children }) => {
  return (
    <section className={`${styles.productsList} ${_className}`}>
      {children}
    </section>
  );
};

export default ProductsList;
