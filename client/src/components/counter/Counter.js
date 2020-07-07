import React from 'react';

import styles from './Counter.module.scss';

import { ReactComponent as AddSvg } from '../../assets/icons/add-24px.svg';
import { ReactComponent as RemoveSvg } from '../../assets/icons/remove-24px.svg';

const Counter = () => {
  return (
    <section className={styles.counter}>
      <RemoveSvg className={styles.counter__icon} />
      <span className={styles.counter__count}>1</span>
      <AddSvg className={styles.counter__icon} />
    </section>
  );
};

export default Counter;
