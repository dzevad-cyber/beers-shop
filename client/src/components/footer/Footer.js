import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

import { ReactComponent as FacebookSvg } from '../../assets/icons/facebook.svg';
import { ReactComponent as GoogleSvg } from '../../assets/icons/google.svg';
import { ReactComponent as InstagramSvg } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterSvg } from '../../assets/icons/twitter.svg';
import { ReactComponent as Pintrest } from '../../assets/icons/pinterest.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <section className={styles.footer__info}>
        <section className={styles.footer__section}>
          <h4 className={styles.footer__title}>office:</h4>
          <p>7895 Piermont Dr NE</p>
          <p>Albuquerque, NM 198866</p>
          <p>United States of America</p>
        </section>
        <section className={styles.footer__section}>
          <h4 className={styles.footer__title}>phones:</h4>
          <p>+566 4774 9930</p>
          <p>+566 4774 9931</p>
        </section>
        <section className={styles.footer__section}>
          <h4 className={styles.footer__title}>sales inquiries:</h4>
          <Link to='www.instagram.com' className={styles.footer__email}>
            info@mydomain.com
          </Link>
        </section>
        <section className={styles.footer__section}>
          <h4 className={styles.footer__title}>follow us:</h4>
          <section className={styles.footer__socialLinks}>
            <FacebookSvg className={styles.icon} />
            <GoogleSvg className={styles.icon} />
            <TwitterSvg className={styles.icon} />
            <InstagramSvg className={styles.icon} />
            <Pintrest className={styles.icon} />
          </section>
        </section>
      </section>

      <p className={styles.footer__copyright}>
        wokkie 2019. all right reserved
      </p>
    </section>
  );
};

export default Footer;
