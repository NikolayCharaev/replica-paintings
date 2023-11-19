'use client';
import { useState, useEffect } from 'react';
import Title from './Title';
import { motion, AnimatePresence } from 'framer-motion';

import '@/styles/reproductions.scss';
import ReproductionsList from './ReproductionsList';

const Reproductions = ({ posts }) => {
  const [activeButton, setActiveButton] = useState('Франция');
  const [categoryPost, setCategoryPost] = useState([]);

  function sortCategory(category: string = 'Франция') {
    switch (category) {
      case 'Франция':
        setCategoryPost(posts.filter((elem) => elem.country === 'Франция'));
        break;
      case 'Англия':
        setCategoryPost(posts.filter((elem) => elem.country === 'Англия'));
        break;
      case 'Германия':
        setCategoryPost(posts.filter((elem) => elem.country === 'Германия'));
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
    <div className="reproductions" id='reproductions'>
      <div className="reproductions__top">
        <Title>Репродукции</Title>
        <div className="reproductions__category">
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
        </div>
      </div>
      <ReproductionsList posts={categoryPost} />
    </div>
  );
};

export default Reproductions;
