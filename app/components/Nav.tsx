import React from 'react';

import '@/styles/nav.scss'
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">Репродукции</li>
        <li className="nav__item">Новинки</li>
        <li className="nav__item">О нас</li>
      </ul>
    </nav>
  );
};

export default Nav;
