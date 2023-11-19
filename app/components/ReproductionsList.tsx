import React from 'react';
import Image from 'next/image';
import Button from './Button';

import { motion,AnimatePresence } from 'framer-motion';

const ReproductionsList = ({ posts }) => {
  return (
    <AnimatePresence>
    <motion.div
      className="reproductions__list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
      >
      {posts.map((elem) => {
        const { _id, country, author, images, paintingName, paintingPrice, paintingSize } = elem;
        return (
          <div className="reproductions__card" key={_id}>
            <Image src={images} alt="poster" width={310} height={422} />
            <p className="author">{author}</p>
            <h1 className="title">{paintingName}</h1>
            <p className="size">{paintingSize}</p>
            <p className="price">{paintingPrice.slice(0, 2) + ' ' + paintingPrice.slice(2)} руб</p>

            <Button>В корзину</Button>
          </div>
        );
      })}
    </motion.div>
    </AnimatePresence>
  );
};

export default ReproductionsList;
