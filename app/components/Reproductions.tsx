'use client';
import { useState, useEffect } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';

import '@/styles/reproductions.scss';
import ReproductionsList from './ReproductionsList';
import { IPostsProps } from '@/types/postsTypes';

const Reproductions = ({ posts,basketPosts, setBasketPosts }: any) => {
  const [activeButton, setActiveButton] = useState('Франция');
  const [categoryPost, setCategoryPost] = useState([]);

  function sortCategory(category: string = 'Франция') {
    switch (category) {
      case 'Франция':
        setCategoryPost(posts.filter((elem: IPostsProps) => elem.country === 'Франция'));
        break;
      case 'Англия':
        setCategoryPost(posts.filter((elem: IPostsProps) => elem.country === 'Англия'));
        break;
      case 'Германия':
        setCategoryPost(posts.filter((elem: IPostsProps) => elem.country === 'Германия'));
        break;
      default:
        setCategoryPost([]);
        break;
    }
  }

  useEffect(() => {
    sortCategory(activeButton);
  }, [posts.length, activeButton]);

  return (
    <div className="reproductions" id="reproductions">
      <div className="reproductions__top">
        <Title>Репродукции</Title>
        <motion.div
          className="reproductions__category"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}>
          <button
            onClick={() => {
              setActiveButton('Франция');
            }}
            className={`category-button ${activeButton === 'Франция' ? 'active' : ''}`}>
            Франция
          </button>
          <button
            onClick={() => {
              setActiveButton('Германия');
            }}
            className={`category-button ${activeButton === 'Германия' ? 'active' : ''}`}>
            Германия
          </button>
          <button
            onClick={() => {
              setActiveButton('Англия');
            }}
            className={`category-button ${activeButton === 'Англия' ? 'active' : ''}`}>
            Англия
          </button>
        </motion.div>
      </div>
      <ReproductionsList posts={categoryPost} basketPosts={basketPosts} setBasketPosts={setBasketPosts}  />
    </div>
  );
};

export default Reproductions;
