import React from 'react';
import Image from 'next/image';
import birdImage from '/public/sloganBird.png';
import '@/styles/slogan.scss';

import Button from './Button';
const Slogan = () => {
  return (
    <section className="slogan">
      <Image src={birdImage} width={540} height={620} alt="bird" />
      <div className="slogan__content">
        <h1 className="slogan__title">
          Реплики картин от <span>Ink. House</span>
        </h1>
        <p className="slogan__description">
          Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
          доступные цены.
        </p>
        <div className="slogan__button">
          <Button>Продукция</Button>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
