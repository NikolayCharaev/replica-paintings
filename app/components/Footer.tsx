import React from 'react';

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
              <Nav/>
          </div>
          <div className="footer__col-three">
            <Socials/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
