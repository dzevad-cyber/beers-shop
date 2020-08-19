import React from 'react';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <input
        className={styles.contactForm__input}
        type="email"
        placeholder="Enter your e-mail"
      />
      <button className={styles.contactForm__btn}>Join Us</button>
    </form>
  );
};

export default ContactForm;
