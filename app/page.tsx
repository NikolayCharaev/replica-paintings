'use client';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Reproductions from './components/Reproductions';

import { getPosts } from '@/lib/getPosts';

import Slogan from './components/Slogan';
import '@/styles/global.scss';
import News from './components/News';
import Team from './components/Team';
import Footer from './components/Footer';
import Provider from './components/Provider';

export default function Home() {
  const [posts, setPosts] = useState<[]>([]);

  useEffect(() => {
    getPosts().then((data: any) => {
      setPosts(data);
    });
  }, []);

  return (
    <Provider>
      <Header />
      <div className="container">
        <Slogan />
        <Reproductions posts={posts} />
      </div>
      <News />
      <div className="container">
        <Team />
      </div>
      <Footer />
    </Provider>
  );
}
