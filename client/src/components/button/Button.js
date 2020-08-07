import React from 'react';

import styles from './Button.module.scss';

const Button = ({ icon, children, txtColor, _onClick, className, num }) => {
  const txtStyles = {
    '--txt-color': txtColor,
  };

  let cartTotalItems;

  if (num && num !== 0) {
    cartTotalItems = <span className={styles.num}>{num}</span>;
  }

  return (
    <button className={styles.button} onClick={_onClick}>
      <div className={`${styles.button__box} ${className}`}>
        {icon}
        {children && (
          <span style={txtStyles} className={styles.button__text}>
            {children}
          </span>
        )}
      </div>
      {cartTotalItems}
    </button>
  );
};

export default React.memo(Button);
