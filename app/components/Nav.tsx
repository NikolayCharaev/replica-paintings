import AnchorLink from 'react-anchor-link-smooth-scroll';
import '@/styles/nav.scss';

import Image from 'next/image';
import burger from '@/public/icons/List.svg';
import close from '@/public/icons/close.svg';
import { motion, AnimatePresence } from 'framer-motion';
const Nav = ({ handleToggleMenu, setMobileMenu, mobileMenu }) => {
  return (
    <nav className="nav">
      <div className="mobile__buttons">
        {!mobileMenu ? (
          <Image onClick={handleToggleMenu} src={burger} width={30} height={30} alt="burger-menu" />
        ) : (
          <Image onClick={handleToggleMenu} src={close} width={30} height={30} alt="close-menu" />
        )}
      </div>
      <AnimatePresence>
        {mobileMenu && (
          <motion.ul
            className="nav__list"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}>
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
          </motion.ul>
        )}
      </AnimatePresence>
      {/* {mobileMenu && } */}

      {/* <ul className="nav__list-mobile">
        asd
      </ul> */}
    </nav>
  );
};

export default Nav;
