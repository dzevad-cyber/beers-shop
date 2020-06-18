import React from 'react';

import styles from './HomePage.module.scss';

import Intro from '../../components/intro/Intro';
import ProductsBox from '../../components/products-box/ProductsBox';
import ProductsList from '../../components/products-list/ProductsList';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';
import About from '../../components/about/About';
import ImgBox from '../../components/img-box/ImgBox';

import beersImg from '../../assets/images/beers_04_2048x.jpg';
import KeepInTouch from '../../components/keep-in-touch/KeepInTouch';
import ContactForm from '../../components/contact-form/ContactForm';

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <Intro />
      <ProductsBox>
        <div className={styles.imgBg}></div>
        <ProductsList />
      </ProductsBox>
      <BtnGoTo>see all beers</BtnGoTo>
      <About />
      <ImgBox src={beersImg} customStyle={styles.position} />
      <KeepInTouch />
    </section>
  );
};

export default HomePage;
