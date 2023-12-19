'use client';
import { IBasketTypes } from '@/types/basketTypes';
import '@/styles/basket.scss';
import { SlBasket } from 'react-icons/sl';

import Link from 'next/link';

import { useSelector } from 'react-redux';



const BasketIcon = () => {
  const { basketItems } = useSelector((state : any) => state.basketSlice);
  return (
    <Link href="/basket">
      <div className="basket__icon">
        <div className="basket__icon-wrapper">
          <div className="">
            <SlBasket style={{ cursor: 'pointer' }} size={30} />
            {basketItems ? (
              <span className="basket__icon-counter">{basketItems.length}</span>
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
