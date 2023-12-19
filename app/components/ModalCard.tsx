import React from 'react';

import '@/styles/card.scss'
import Button from './Button';
import Title from './Title';

const ModalCard = ({ setModalCard,bodyScroll }) => {
  return (
    <div className="card">
      <h1>Данные вашей карты</h1>
      <div className="card__modal">

        <Button
          onClick={() => {
            setModalCard(false);
            bodyScroll(false)
          }}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default ModalCard;
