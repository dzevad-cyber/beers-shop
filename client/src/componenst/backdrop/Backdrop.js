import React from 'react';

import styles from './Backdrop.module.scss';

const Backdrop = ({ children }) => {
  return <section className={styles.backdrop}>{children}</section>;
};

export default Backdrop;
