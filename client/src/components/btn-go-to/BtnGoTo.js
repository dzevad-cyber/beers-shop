import React from 'react';

import styles from './BtnGoTo.module.scss';

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right_alt-24px.svg';

const BtnGoTo = ({ children }) => {
  return (
    <button className={styles.btnGoTo}>
      {children} <ArrowRight className={styles.btnGoTo__icon} />
    </button>
  );
};

export default BtnGoTo;
