import React from 'react';
import Image from 'next/image';
import newsStar from '@/public/news-star.svg';
import '@/styles/news.scss';
const News = () => {
  return (
    <div className="news" id='news'>
      <div className="news__wrapper">
        <div className="news__content">
          <div className="news__content-top">
            <Image src={newsStar} width={80} height={80} alt="star" />
            <h1 className="news__content-title">Новая коллекция французских авторов</h1>
          </div>
          <div className="news__content-bottom">
            <p className="news__content-text">
              Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
              которые, в свою очередь, должны быть заблокированы в рамках своих собственных
              рациональных ограничений.
            </p>
            <br />
            <p className="news__content-text">
              Принимая во внимание показатели успешности, граница обучения кадров предопределяет
              высокую востребованность направлений прогрессивного развития.
            </p>
          </div>

          <button className='news__button'>Ознакомиться</button>
        </div>
      </div>
    </div>
  );
};

export default News;
