import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BtnLink.module.scss';

const BtnLink = ({ children, _class, _to, _onClick }) => {
  return (
    <Link
      onClick={_onClick}
      to={_to ? _to : '#'}
      className={`${styles.btnLink} ${_class}`}
    >
      {children}
    </Link>
  );
};

export default BtnLink;
