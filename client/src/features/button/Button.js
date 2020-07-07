import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

import { ReactComponent as AccountSvg } from '../../assets/icons/account_circle-24px.svg';
import { ReactComponent as ShoppingCartSvg } from '../../assets/icons/shopping_cart-24px.svg';
import { ReactComponent as RegisterSvg } from '../../assets/icons/https-24px.svg';
import { ReactComponent as SigninSvg } from '../../assets/icons/person-24px.svg';

const icons = {
  account: <AccountSvg className={styles.button__icon} />,
  shoppingCart: <ShoppingCartSvg className={styles.button__icon} />,
  register: <RegisterSvg className={styles.button__icon} />,
  signin: <SigninSvg className={styles.button__icon} />,
};

const Button = ({ icon, children, txtColor, _onClick, className, to }) => {
  const txtStyles = {
    '--txt-color': txtColor,
  };

  return (
    <Link to={to} className={styles.button} onClick={_onClick}>
      <div className={`${styles.button__box} ${className}`}>
        {icon && icons[icon]}
        {children && (
          <span style={txtStyles} className={styles.button__text}>
            {children}
          </span>
        )}
      </div>
    </Link>
  );
};

export default React.memo(Button);
