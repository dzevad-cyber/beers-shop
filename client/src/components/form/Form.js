import React from 'react';
import styles from './Form.module.scss';

const Form = ({ children, _className }) => {
  return <form className={`${styles.form} ${_className}`}>{children}</form>;
};

export default Form;
