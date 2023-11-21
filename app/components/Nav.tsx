
import '@/styles/nav.scss';


//@ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'next/image';
import burger from '/public/icons/List.svg';
import close from '/public/icons/close.svg';
import { motion, AnimatePresence } from 'framer-motion';

import { INavProps } from '@/types/navTypes';

const Nav = ({ handleToggleMenu, mobileMenu }: INavProps) => {
  return (
    <motion.nav className="nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mobile__buttons">
        {!mobileMenu ? (
          <Image onClick={handleToggleMenu} src={burger} width={30} height={30} alt="burger-menu" />
        ) : (
          <Image onClick={handleToggleMenu} src={close} width={30} height={30} alt="close-menu" />
        )}
      </div>
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

      <AnimatePresence>
        {mobileMenu && (
          <motion.ul
            className="nav__list-mobile"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}>
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
    </motion.nav>
  );
};

export default Nav;
