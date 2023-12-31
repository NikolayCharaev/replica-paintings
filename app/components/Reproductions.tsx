'use client';
import { useState, useEffect } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import '@/styles/reproductions.scss';
import ReproductionsList from './ReproductionsList';
import { IPostsProps } from '@/types/postsTypes';

import Spinner from './Spinner';

const Reproductions = () => {
  const [activeButton, setActiveButton] = useState('Франция');
  const [categoryPost, setCategoryPost] = useState([]);

  const { replications, replicationsLoading } = useSelector(
    (state: any) => state.reproductionsSlice,
  );

  function sortCategory(category: string = 'Франция') {
    switch (category) {
      case 'Франция':
        setCategoryPost(replications.filter((elem: IPostsProps) => elem.country === 'Франция'));
        break;
      case 'Англия':
        setCategoryPost(replications.filter((elem: IPostsProps) => elem.country === 'Англия'));
        break;
      case 'Германия':
        setCategoryPost(replications.filter((elem: IPostsProps) => elem.country === 'Германия'));
        break;
      default:
        setCategoryPost([]);
        break;
    }
  }

  useEffect(() => {
    sortCategory(activeButton);
  }, [replications.length, activeButton]);

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

      {replicationsLoading === 'pending' ? (
        <Spinner status={'pending'} />
      ) : (
        <ReproductionsList posts={categoryPost} />
      )}
    </div>
  );
};

export default Reproductions;
