import React from 'react';

import { Link } from 'react-router-dom';

import styles from './BtnGoTo.module.scss';

const BtnGoTo = ({ children, _className, _to }) => {
  return (
    <Link to={_to} className={`${styles.btnGoTo} ${_className}`}>
      {children}
    </Link>
  );
};

export default BtnGoTo;
