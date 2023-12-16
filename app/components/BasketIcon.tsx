'use client';
import { IBasketTypes } from '@/types/basketTypes';
import '@/styles/basket.scss';
import { SlBasket } from 'react-icons/sl';

import Link from 'next/link';

import { useSelector } from 'react-redux';
const BasketIcon = () => {
  const { basketItems } = useSelector((state : any) => state.baksetSlice);
  return (
    <Link href="/basket">
      <div className="basket">
        <div className="basket__wrapper">
          <div className="">
            <SlBasket style={{ cursor: 'pointer' }} size={30} />
            {basketItems ? (
              <span className="basket__counter">{basketItems.length}</span>
            ) : (
              <span className="basket__counter">{0}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BasketIcon;
