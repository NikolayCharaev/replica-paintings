'use client';
import { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Basket from './BasketIcon';
import '@/styles/header.scss';
import Image from 'next/image';

import { useSession, signIn, signOut } from 'next-auth/react';


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const { data: session } = useSession();


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
            <Nav handleToggleMenu={handleToggleMenu} mobileMenu={mobileMenu} />
            {session && <Basket  />}

            <div className="profile">
              {session ? (
                <>
                  <Image
                    className="session__img"
                    src={session?.user?.image || ''}
                    width={40}
                    height={40}
                    alt="image"
                  />

                  <button className="sign-btn" onClick={() => signOut()}>
                    выйти
                  </button>
                </>
              ) : (
                <button className="sign-btn" onClick={() => signIn()}>
                  войти
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
