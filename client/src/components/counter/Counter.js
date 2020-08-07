import React from 'react';

import styles from './Counter.module.scss';

import { ReactComponent as AddSvg } from '../../assets/icons/add-24px.svg';
import { ReactComponent as RemoveSvg } from '../../assets/icons/remove-24px.svg';

const Counter = ({ onIncrementCount, onDecrementCount, count, _className }) => {
  return (
    <section className={`${styles.counter} ${_className}`}>
      <RemoveSvg className={styles.counter__icon} onClick={onDecrementCount} />
      <span className={styles.counter__count}>{count}</span>
      <AddSvg className={styles.counter__icon} onClick={onIncrementCount} />
    </section>
  );
};

export default Counter;
