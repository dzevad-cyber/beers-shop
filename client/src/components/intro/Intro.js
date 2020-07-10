import React from 'react';

import styles from './Intro.module.scss';

import ImgBox from '../../components/img-box/ImgBox';

import introBgImg from '../../assets/images/imageedit_1_3500818934.png';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <section className={styles.intro__box}>
        <h3 className={styles.intro__title}>
          <span className={styles.intro__titleBlack}>craft</span>
          <span className={styles.intro__titleRed}>beer</span>
        </h3>
        <h5 className={styles.intro__subtitle}>Brewed in USA</h5>
      </section>
      <ImgBox src={introBgImg} _classNameBox={styles.intro__bgImg} />
    </section>
  );
};

export default Intro;
