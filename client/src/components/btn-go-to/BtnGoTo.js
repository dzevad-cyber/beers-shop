import React from 'react';

import { Link } from 'react-router-dom';

import styles from './BtnGoTo.module.scss';

const BtnGoTo = ({ children, _className, _to, _onClick }) => {
  return (
    <Link
      to={_to ? _to : '#'}
      className={`${styles.btnGoTo} ${_className}`}
      onClick={_onClick}
    >
      {children}
    </Link>
  );
};

export default BtnGoTo;
