import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';

import logo from '../../assets/images/beers_logo_155x.png';

import { ReactComponent as SigninSvg } from '../../assets/icons/person-24px.svg';
import { ReactComponent as ShoppingCartSvg } from '../../assets/icons/shopping_cart-24px.svg';
import { ReactComponent as RegisterSvg } from '../../assets/icons/https-24px.svg';
import { ReactComponent as AccountSvg } from '../../assets/icons/account_circle-24px.svg';

import Button from '../button/Button';
import Tooltip from '../tooltip/Tooltip';
import ButtonGroup from '../button-group/ButtonGroup';
import AccountMenu from '../account-menu/AccountMenu';
import CartMenu from '../cart-menu/CartMenu';

import { selectCartTotalItems } from '../../store/cartSlice';

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const cartTotalItems = useSelector(selectCartTotalItems);

  const toggleAccountMenu = () => {
    if (showCartMenu) setShowCartMenu(!showCartMenu);
    setShowAccountMenu(!showAccountMenu);
  };

  const toggleCartMenu = () => {
    if (showAccountMenu) setShowAccountMenu(!showAccountMenu);
    setShowCartMenu(!showCartMenu);
  };

  return (
    <header className={styles.header} id='header-main'>
      <Link to='/'>
        <img className={styles.header__logo} src={logo} alt='logo' />
      </Link>
      <ButtonGroup>
        <Tooltip text='my account'>
          <Button icon={<AccountSvg />} _onClick={toggleAccountMenu} />
        </Tooltip>
        <Tooltip text='cart'>
          <Button
            num={cartTotalItems}
            icon={<ShoppingCartSvg />}
            _onClick={toggleCartMenu}
          />
        </Tooltip>
        <AccountMenu toggle={showAccountMenu} _onClick={toggleAccountMenu}>
          <Link
            className={styles.link}
            onClick={toggleAccountMenu}
            to='/signin'
          >
            <SigninSvg className={styles.icon} /> sign in
          </Link>
          <Link
            className={styles.link}
            onClick={toggleAccountMenu}
            to='/register'
          >
            <RegisterSvg className={styles.icon} /> register
          </Link>
          <Link className={styles.link} onClick={toggleAccountMenu} to='/cart'>
            <ShoppingCartSvg className={styles.icon} /> view cart
          </Link>
        </AccountMenu>
        <CartMenu toggle={showCartMenu} _onClick={toggleCartMenu}></CartMenu>
      </ButtonGroup>
    </header>
  );
};

export default React.memo(Header);
