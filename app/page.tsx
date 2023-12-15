'use client';
import React, { useEffect, useState, Fragment } from 'react';
import Header from './components/Header';
import Reproductions from './components/Reproductions';

import { getPosts } from '@/lib/getPosts';

import Slogan from './components/Slogan';
import '@/styles/global.scss';
import News from './components/News';
import Team from './components/Team';
import Footer from './components/Footer';

import { getBasketItems } from '@/lib/basket';

export default function Home() {
  const [posts, setPosts] = useState<[]>([]);
  const [basketPosts, setBasketPosts] = useState<[]>([]);

  useEffect(() => {
    getPosts().then((data: any) => {
      setPosts(data);
    });
    getBasketItems()
      .then((data) => setBasketPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Header basketPosts={basketPosts} />
      <div className="container">
        <Slogan />
        <Reproductions
          getBasketItems={getBasketItems}
          posts={posts}
          setBasketPosts={setBasketPosts}
        />
      </div>
      <News />
      <div className="container">
        <Team />
      </div>
      <Footer />
    </Fragment>
  );
}
