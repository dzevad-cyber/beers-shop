import React from 'react';

import styles from './ProductsBox.module.scss';

const ProductsBox = ({ children }) => {
  return <section className={styles.productsBox}>{children}</section>;
};

export default ProductsBox;
