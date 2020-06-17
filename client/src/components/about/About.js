import React from 'react';

import styles from './About.module.scss';
import ImgBox from '../img-box/ImgBox';

import aboutImg from '../../assets/images/beers_02_1170x.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>
        <span>our</span> <span>story</span>
      </h2>
      <p className={styles.about__text}>
        A great about us block helps builds trust between you and your
        customers. The more content you provide about you and your business, the
        more confident people will be when purchasing from your store.
      </p>
      <ImgBox src={aboutImg} customStyle={styles.imgSize} />
      <section className={styles.about__subsection}>
        <h4 className={styles.about__subtitle}>
          <span>our</span> <span>original</span> <span>recipe</span>
        </h4>
        <div className={styles.about__subsectionText}>
          <p className={`${styles.about__text} ${styles.textLeft}`}>
            WOKIEE Shopify Theme is more than usual theme. It is a powerful
            design tool. WOKIEE is outstanding Premium Shopify theme. It will be
            perfect solution for your current or future webshop.
          </p>
          <p className={`${styles.about__text} ${styles.textLeft}`}>
            It has all required tools and modules to create super fast
            responsive website with amazing UX.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
