'use client';
import { IBasketTypes } from '@/types/basketTypes';
import { useEffect } from 'react';
import '@/styles/basket.scss';
import { SlBasket } from 'react-icons/sl';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
const BasketIcon = () => {
  const { data: session } = useSession();
  const { basketItems } = useSelector((state: any) => state.basketSlice);
  return (
    <Link href="/basket">
      <div className="basket__icon">
        <div className="basket__icon-wrapper">
          <div className="">
            <SlBasket style={{ cursor: 'pointer' }} size={30} />
            {basketItems ? (
              <span className="basket__icon-counter">
                {basketItems.filter((elem) => elem.user === session?.user?.id).length}
              </span>
            ) : (
              <span className="basket__icon-counter">{0}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BasketIcon;
