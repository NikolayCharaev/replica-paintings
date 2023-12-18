'use client';
import React, { useEffect, useState, Fragment } from 'react';
import Reproductions from './components/Reproductions';

import Slogan from './components/Slogan';
import '@/styles/global.scss';
import News from './components/News';
import Team from './components/Team';
import Footer from './components/Footer';

import { getBasketItems } from '@/lib/basket';
import { fetchReplications } from '@/redux/slices/reproductions/reproductionsSlice';
import { fetchBacket } from '@/redux/slices/basket/basketSlice';

import { useDispatch } from 'react-redux';

export default function Home() {
  const [basketPosts, setBasketPosts] = useState<[]>([]);

  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchReplications());
    //@ts-ignore
    dispatch(fetchBacket());
  }, []);

  return (
    <Fragment>
      <div className="container">
        <Slogan />
        <Reproductions getBasketItems={getBasketItems} setBasketPosts={setBasketPosts} />
      </div>
      <News />
      <div className="container">
        <Team />
      </div>
      <Footer />
    </Fragment>
  );
}
