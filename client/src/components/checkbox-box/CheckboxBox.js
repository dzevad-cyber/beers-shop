import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CheckboxBox.module.scss';

import { ReactComponent as DoneSvg } from '../../assets/icons/done-24px.svg';

const CheckboxBox = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className={styles.checkboxBox}>
      <input
        type='checkbox'
        name=''
        id='toggle'
        className={styles.checkboxBox__checkbox}
      />
      <div className={styles.checkboxBox__labelBox}>
        <label
          htmlFor='toggle'
          className={styles.checkboxBox__label}
          onClick={() => setToggle(!toggle)}
        >
          <DoneSvg className={styles.checkboxBox__icon} />
        </label>
        <span className={styles.checkboxBox__text}>
          I agree with the terms and conditions
        </span>
      </div>
      <Link
        to={toggle ? '/' : '#'}
        className={
          toggle ? `${styles.btn} ${styles.btn__enabled}` : `${styles.btn}`
        }
      >
        proceed to checkout
      </Link>
    </section>
  );
};

export default React.memo(CheckboxBox);
