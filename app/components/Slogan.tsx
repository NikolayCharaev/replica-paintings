import React from 'react';
import Image from 'next/image';
import birdImage from '/public/sloganBird.png';
import {
  SloganWrapper,
  SloganTitle,
  SloganDedicated,
  SloganDescription,
  SloganContent,
} from '../_styles/slogan';
import { Button } from '../_styles/global';
const Slogan = () => {
  return (
    <SloganWrapper>
      <Image src={birdImage} width={540} height={620} alt="bird" />

      <SloganContent>
        <SloganTitle>
          Реплики картин от <SloganDedicated>Ink. House</SloganDedicated>
        </SloganTitle>
        <SloganDescription>
          Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
          доступные цены.
        </SloganDescription>


        <Button>Продукция</Button>
      </SloganContent>
    </SloganWrapper>
  );
};

export default Slogan;
