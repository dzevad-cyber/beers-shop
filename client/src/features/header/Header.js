import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logo from '../../assets/images/beers_logo_155x.png';

import Button from '../button/Button';
import Tooltip from '../../components/tooltip/Tooltip';
import ButtonGroup from '../../components/button-group/ButtonGroup';
import AccountMenu from '../../components/account-menu/AccountMenu';
import CartMenu from '../../components/cart-menu/CartMenu';

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);

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
          <Button icon='account' _onClick={toggleAccountMenu} />
        </Tooltip>
        <Tooltip text='cart'>
          <Button icon='shoppingCart' _onClick={toggleCartMenu} />
        </Tooltip>
        <AccountMenu toggle={showAccountMenu} _onClick={toggleAccountMenu}>
          <Button
            _onClick={toggleAccountMenu}
            to='/signin'
            txtColor='#777777'
            icon='signin'
          >
            sign in
          </Button>
          <Button
            to='/register'
            _onClick={toggleAccountMenu}
            txtColor='#777777'
            icon='register'
          >
            register
          </Button>
          <Button
            _onClick={toggleAccountMenu}
            txtColor='#777777'
            icon='shoppingCart'
          >
            view cart
          </Button>
        </AccountMenu>
        <CartMenu toggle={showCartMenu} _onClick={toggleCartMenu}></CartMenu>
      </ButtonGroup>
    </header>
  );
};

export default React.memo(Header);
