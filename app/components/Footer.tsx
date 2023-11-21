import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '@/styles/footer.scss';
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__col-one">
            <Logo />
            <div className="footer__phone">
              <a href="tel:+79995435454">+7 (999) 543-54-54</a>
              <p>Мастерская</p>
            </div>
          </div>
          <div className="footer__col-two">
            {/* <Nav/> */}
            <ul className="footer__nav">
              <li className="footer__link">
                <AnchorLink offset="100" href="#reproductions">
                  Репродукции
                </AnchorLink>
              </li>

              <li className="footer__link">
                <AnchorLink offset="100" href="#news">
                  Новинки
                </AnchorLink>
              </li>

              <li className="footer__link">
                <AnchorLink offset="100" href="#about">
                  О нас
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="footer__col-three">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
