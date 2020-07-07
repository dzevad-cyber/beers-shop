import React from 'react';

import styles from './HomePage.module.scss';

import Intro from '../../components/intro/Intro';
import ProductsBox from '../../components/products-box/ProductsBox';
import ProductsList from '../../components/products-list/ProductsList';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';
import About from '../../components/about/About';
import ImgBox from '../../components/img-box/ImgBox';
import KeepInTouch from '../../components/keep-in-touch/KeepInTouch';
import InstaFeed from '../../components/insta-feed/InstaFeed';
import BtnScrollTop from '../../components/btn-scroll-top/BtnScrollTop';

import beersImg from '../../assets/images/beers_04_2048x.jpg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right_alt-24px.svg';

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <Intro />
      <ProductsBox>
        <ProductsList _className={styles.productsList} />
      </ProductsBox>
      <BtnGoTo _to='/products' _className={styles.btnGoTo}>
        see all beers
        <ArrowRight className={styles.btnGoTo__icon} />
      </BtnGoTo>
      <About />
      <ImgBox src={beersImg} className={styles.position} />
      <KeepInTouch />
      <InstaFeed />
      <BtnScrollTop />
    </section>
  );
};

export default HomePage;
