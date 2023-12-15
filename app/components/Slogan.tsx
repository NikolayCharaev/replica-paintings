import React from 'react';
import Image from 'next/image';
import birdImage from '/public/sloganBird.png';
import '@/styles/slogan.scss';

import { motion } from 'framer-motion';


//@ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Button from './Button';
const Slogan = () => {

  return (
    <section className="slogan">

      <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
        <Image className="slogan__image" src={birdImage} width={540} height={620} alt="bird" />
      </motion.div>

      <motion.div
        className="slogan__content"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}>
        <h1 className="slogan__title">
          Реплики картин от <span>Ink. House</span>
        </h1>
        <p className="slogan__description">
          Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
          доступные цены.
        </p>
        <div className="slogan__button">
          <AnchorLink offset="100" href="#reproductions">
            <Button>Продукция</Button>
          </AnchorLink>
        </div>
      </motion.div>
    </section>
  );
};

export default Slogan;
