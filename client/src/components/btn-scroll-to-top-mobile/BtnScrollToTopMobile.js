import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import styles from './BtnScrollToTopMobile.module.scss';

import { ReactComponent as ArrowUpSvg } from '../../assets/icons/keyboard_arrow_up-24px.svg';

const BtnScrollToTopMobile = ({ children }) => {
  return (
    <Link to='#header-main' smooth className={styles.btn}>
      <ArrowUpSvg className={styles.btn__icon} />
      <p className={styles.btn__txt}>{children}</p>
    </Link>
  );
};

export default BtnScrollToTopMobile;
