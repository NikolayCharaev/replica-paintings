import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '@/styles/nav.scss';
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <AnchorLink offset="100" href="#reproductions">
            Репродукции
          </AnchorLink>
        </li>
        <li className="nav__item">
          <AnchorLink offset="100" href="#news">
            Новинки
          </AnchorLink>
        </li>
        <li className="nav__item">
          <AnchorLink offset="100" href="#about">
            О нас
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
