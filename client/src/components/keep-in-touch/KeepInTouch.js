import React from 'react';

import styles from './KeepInTouch.module.scss';
import ContactForm from '../contact-form/ContactForm';

const KeepInTouch = () => {
  return (
    <section className={styles.keepintouch}>
      <h3 className={styles.title}>keep in touch</h3>
      <p className={styles.text}>
        Enjoy 15% off your first order when you join our mailing list
      </p>
      <ContactForm />
    </section>
  );
};

export default KeepInTouch;
