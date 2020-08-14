import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

import Intro from '../../components/intro/Intro';
import ProductsBox from '../../components/products-box/ProductsBox';
import ProductsList from '../../components/products-list/ProductsList';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';
import About from '../../components/about/About';
import ImgBox from '../../components/img-box/ImgBox';
import KeepInTouch from '../../components/keep-in-touch/KeepInTouch';
import InstaFeed from '../../components/insta-feed/InstaFeed';
import Product from '../../components/product/Product';

import beersImg from '../../assets/images/beers_04_2048x.jpg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right_alt-24px.svg';

import { selectProducts } from '../../store/productsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <section className={styles.homePage}>
      <Intro />
      <ProductsBox>
        <ProductsList _className={styles.productsList}>
          {products &&
            products.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`}
                className={styles.productBox}
              >
                <Product product={product} />
              </Link>
            ))}
        </ProductsList>
      </ProductsBox>
      <BtnGoTo _to="/products" _className={styles.btnGoTo}>
        see all beers
        <ArrowRight className={styles.btnGoTo__icon} />
      </BtnGoTo>
      <About />
      <ImgBox src={beersImg} _classNameBox={styles.position} />
      <KeepInTouch />
      <InstaFeed />
    </section>
  );
};

export default HomePage;
