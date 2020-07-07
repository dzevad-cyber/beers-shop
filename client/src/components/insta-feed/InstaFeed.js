import React from 'react';
// import { Link } from 'react-router-dom';

import styles from './InstaFeed.module.scss';
import ImgBox from '../img-box/ImgBox';

import img1 from '../../assets/images/instagram/68959723_470475373810981_8006846882864365576_n.jpg';
import img2 from '../../assets/images/instagram/69654599_769646770157291_9122351373186106036_n.jpg';
import img3 from '../../assets/images/instagram/69921631_397902204202671_4265205835472395793_n.jpg';
import img4 from '../../assets/images/instagram/69925923_994836524219363_7567111909985813921_n.jpg';
import img5 from '../../assets/images/instagram/70386145_497806890998084_8614950783302005500_n.jpg';
import img6 from '../../assets/images/instagram/70644779_508012366703103_2688160518712772386_n.jpg';

const InstaFeed = () => {
  return (
    <section className={styles.instaFeed}>
      <h3 className={styles.instaFeed__title}>
        <span className={styles.instaFeed__follow}>@ Folow</span> Us In
        Instagram
      </h3>
      <section className={styles.instaFeed__gallery}>
        <ImgBox src={img1} />
        <ImgBox src={img2} />
        <ImgBox src={img3} />
        <ImgBox src={img4} />
        <ImgBox src={img5} />
        <ImgBox src={img6} />
      </section>
    </section>
  );
};

export default InstaFeed;
