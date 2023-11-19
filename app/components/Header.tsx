import React from 'react';
import Logo from './Logo';

import Nav from './Nav';
import Basket from './Basket';
import '@/styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__list">
          <Logo />
          <div className="header__left">
            <Nav />
            <Basket />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
