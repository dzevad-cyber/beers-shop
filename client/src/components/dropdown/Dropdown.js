import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Dropdown.module.scss';
import dropdown from '../../transitions/dropdown.module.scss';

import { ReactComponent as AccountSvg } from '../../assets/icons/account_circle-24px.svg';
import { ReactComponent as ShoppingCartSvg } from '../../assets/icons/shopping_cart-24px.svg';

const icons = {
  account: <AccountSvg className={styles.icon} />,
  shoppingCart: <ShoppingCartSvg className={styles.icon} />,
};

const Dropdown = ({ children, title, icon }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.dropdown}>
      <p
        className={styles.dropdown__title}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {icon && icons[icon]}
        {title}
      </p>

      <CSSTransition
        in={showDropdown}
        classNames={dropdown}
        timeout={200}
        unmountOnExit
      >
        <section className={styles.dropdown__body}>{children} </section>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
