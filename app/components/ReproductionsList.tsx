import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { IPostsProps } from '@/types/postsTypes';

import { useSession } from 'next-auth/react';
import {useDispatch} from 'react-redux'
import { container, item } from '@/animation/repairAnimation';
import { fetchBacket } from '@/redux/slices/basket/basketSlice';

const ReproductionsList = ({ posts }: any) => {
  const { data: session } = useSession();

  const dispatch = useDispatch()
  async function postProduction(elem: IPostsProps) {
    try {
      await fetch('/api/paintings', {
        method: 'POST',
        body: JSON.stringify({
          author: elem.author,
          imageUrl: elem.images,
          title: elem.paintingName,
          size: elem.paintingSize,
          price: elem.paintingPrice,


          //@ts-ignore
          user: session?.user?.id,
        }),
      });
      // const newBasketItems = await getBasketItems();
      // setBasketPosts(newBasketItems);
      dispatch(fetchBacket())
    } catch (err) {
      console.log(err);
    }
  }

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

              <Button
                disabled={!session ? true : false}
                onClick={() => {
                  postProduction(elem);
                }}>
                В корзину
              </Button>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ReproductionsList;
