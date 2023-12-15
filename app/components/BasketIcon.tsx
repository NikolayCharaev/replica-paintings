'use client';
import { IBasketTypes } from '@/types/basketTypes';
import '@/styles/basket.scss';
import { SlBasket } from 'react-icons/sl';

import Link from 'next/link'


const BasketIcon = ({ basketCount }: IBasketTypes) => {
  return (
    <Link href='/basket'>
    <div className="basket">
      <div className="basket__wrapper">
        <div className="">
          <SlBasket style={{ cursor: 'pointer' }} size={30} />
          {basketCount && <span className="basket__counter">{basketCount}</span>}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BasketIcon;
