import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { IPostsProps } from '@/types/postsTypes';



import {useSession} from 'next-auth/react'

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


async function postProduction (elem : IPostsProps) { 
  const response = await fetch('/api/paintings', { 
      method : "POST",
      body: JSON.stringify( { 
        author : elem.author,
        imageUrl : elem.images,
        title : elem.paintingName,
        size : elem.paintingSize,
        price : elem.paintingPrice
      })
    })

}

const ReproductionsList = ({ posts }: any) => {


  const {data : session} = useSession()
  return (
    <AnimatePresence>
      <motion.div
        className="reproductions__list"
        variants={container}
        initial="hidden"
        animate="visible">
        {posts.map((elem: IPostsProps) => {
          const { _id, author, images, paintingName, paintingPrice, paintingSize } = elem;
          return (
            <motion.div className="reproductions__card" key={_id} variants={item}>
              <Image src={images} alt="poster" width={310} height={422} />
              <p className="author">{author}</p>
              <h1 className="title">{paintingName}</h1>
              <p className="size">{paintingSize}</p>
              <p className="price">
                {paintingPrice.slice(0, 2) + ' ' + paintingPrice.slice(2)} руб
              </p>

              <Button disabled={!session ? true : false} onClick={() => postProduction(elem)}>В корзину</Button>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ReproductionsList;
