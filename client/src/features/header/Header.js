import React, { useState } from 'react';

import styles from './Header.module.scss';

import { ReactComponent as AccountSvg } from '../../assets/icons/account_circle-24px.svg';

import Button from '../button/Button';
import logo from '../../assets/images/beers_logo_155x.png';
import Tooltip from '../../components/tooltip/Tooltip';
import ButtonGroup from '../../components/button-group/ButtonGroup';
import AccountMenu from '../../components/account-menu/AccountMenu';
import CartMenu from '../../components/cart-menu/CartMenu';
import MenuIcon from '../../components/menu-icon/MenuIcon';
import SlideMenu from '../../components/slide-menu/SlideMenu';
import Dropdown from '../../components/dropdown/Dropdown';

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showSlideMenu, setShowSlideMenu] = useState(false);

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
    if (showCartMenu) setShowCartMenu(!showCartMenu);
  };

  const toggleCartMenu = () => {
    setShowCartMenu(!showCartMenu);
    if (showAccountMenu) setShowAccountMenu(!showAccountMenu);
  };

  const toggleSlideMenu = () => {
    setShowSlideMenu(!showSlideMenu);
  };

  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt='logo' />
      <ButtonGroup>
        <Tooltip text='my account'>
          <Button icon='account' onClick={toggleAccountMenu} />
        </Tooltip>
        <Tooltip text='cart'>
          <Button icon='shoppingCart' onClick={toggleCartMenu} />
        </Tooltip>
        <AccountMenu toggle={showAccountMenu}>
          <Button txtColor='#777777' icon='signin'>
            sign in
          </Button>
          <Button txtColor='#777777' icon='register'>
            register
          </Button>
          <Button txtColor='#777777' icon='shoppingCart'>
            view cart
          </Button>
        </AccountMenu>
        <CartMenu toggle={showCartMenu}></CartMenu>
      </ButtonGroup>
      <MenuIcon onClick={toggleSlideMenu} />
      <SlideMenu onClick={toggleSlideMenu} toggle={showSlideMenu}>
        <Dropdown title='account' icon='account'>
          <Button txtColor='#777777' icon='signin'>
            sign in
          </Button>
          <Button txtColor='#777777' icon='register'>
            register
          </Button>
          <Button txtColor='#777777' icon='shoppingCart'>
            view cart
          </Button>
        </Dropdown>
      </SlideMenu>
    </header>
  );
};

export default React.memo(Header);
