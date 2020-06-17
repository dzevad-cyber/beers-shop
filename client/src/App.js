import React from 'react';
import styles from './App.module.scss';

import Header from './features/header/Header';
import Intro from './components/intro/Intro';
import ImgBox from './components/img-box/ImgBox';

import ProductsList from './components/products-list/ProductsList';
import ProductsBox from './components/products-box/ProductsBox';

import beersImg from './assets/images/beers_04_2048x.jpg';
import BtnGoTo from './components/btn-go-to/BtnGoTo';
import About from './components/about/About';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Intro />
      <ProductsBox>
        <div className={styles.imgBg}></div>
        <ProductsList />
      </ProductsBox>
      <BtnGoTo>see all beers</BtnGoTo>
      <About />
      <ImgBox src={beersImg} customStyle={styles.position} />
    </div>
  );
}

export default App;
