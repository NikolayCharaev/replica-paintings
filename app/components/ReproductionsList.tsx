import React from 'react';
import Image from 'next/image';
import Button from './Button';

import { motion, AnimatePresence } from 'framer-motion';
import { IPostsProps } from '@/types/postsTypes';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ReproductionsList = ({ posts } : any) => {
  return (
    <AnimatePresence>
      <motion.div
        className="reproductions__list"
        variants={container}
        initial="hidden"
        animate="visible">
        {posts.map((elem : IPostsProps) => {
          const { _id, country, author, images, paintingName, paintingPrice, paintingSize } = elem;
          return (
            <motion.div className="reproductions__card" key={_id} variants={item}>
              <Image src={images} alt="poster" width={310} height={422} />
              <p className="author">{author}</p>
              <h1 className="title">{paintingName}</h1>
              <p className="size">{paintingSize}</p>
              <p className="price">
                {paintingPrice.slice(0, 2) + ' ' + paintingPrice.slice(2)} руб
              </p>

              <Button>В корзину</Button>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ReproductionsList;
