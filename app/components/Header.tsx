'use client';
import { useState } from 'react';
import Logo from './Logo';

import Nav from './Nav';
import Basket from './Basket';
import '@/styles/header.scss';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  function handleToggleMenu() {
    return setMobileMenu(!mobileMenu);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__list">
          <Logo />
          <span className="header__border" />
          <div className="header__left">
            <Nav
              handleToggleMenu={handleToggleMenu}
              setMobileMenu={setMobileMenu}
              mobileMenu={mobileMenu}
            />
            <Basket />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
