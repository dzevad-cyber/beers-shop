import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './ProductsPage.module.scss';
import ProductsList from '../products-list/ProductsList';

import { selectProducts } from '../../store/productsSlice';
import Product from '../product/Product';

const ProductsPage = () => {
  const list = useSelector(selectProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.productsPage}>
      <ProductsList _className={styles.productsPage__list}>
        {list.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`}
            className={styles.productBox}
          >
            <Product product={product} />
          </Link>
        ))}
      </ProductsList>
    </section>
  );
};

export default ProductsPage;
