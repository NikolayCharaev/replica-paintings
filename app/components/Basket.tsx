'use client';
import React from 'react';
import { IBasketTypes } from '@/types/basketTypes';
import '@/styles/basket.scss';
import { SlBasket } from 'react-icons/sl';

import { useSession, signIn, signOut } from 'next-auth/react';

const Basket = ({ basketCount }: IBasketTypes) => {
  const { data: session } = useSession();

  return (
    <div className="basket">
      {!session ? (
        <button className="sign-btn" onClick={() => signIn()}>
          Войти
        </button>
      ) : (
        <div className="basket__wrapper">
          <button className="sign-btn" onClick={() => signOut()}>
            выйти
          </button>
          <SlBasket style={{ cursor: 'pointer' }} size={30} />
          {basketCount && <span className="basket__counter">{basketCount}</span>}
        </div>
      )}
    </div>
  );
};

export default Basket;
