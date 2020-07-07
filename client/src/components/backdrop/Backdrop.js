import React from 'react';

import styles from './Backdrop.module.scss';

const Backdrop = ({ className, _onClick }) => {
  return (
    <div className={`${styles.backdrop} ${className}`} onClick={_onClick}></div>
  );
};

export default Backdrop;
