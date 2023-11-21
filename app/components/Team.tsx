import React from 'react';

import '@/styles/team.scss';

import Image from 'next/image';
import frame from '/public/frame.png';
import hand from '/public/hand.png';
import TeamPhotos from './TeamPhotos';
import Title from './Title';
const Team = () => {
  return (
    <div className="team" id='about'>
      <div className="team__left">
        <div className="team__frame">
          <Image src={frame} width={444} height={361} alt="frame" />
        </div>
        <div className="team__hand">
          <Image src={hand} width={269} height={397} alt="frame" />
        </div>
      </div>

      <div className="team__right">
        <Title>Наша команда</Title>
        <p className="team__description">
          Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить
          значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены
          отталкиваться от того, что консультация с широким активом.
        </p>

        <TeamPhotos/>
      </div>
    </div>
  );
};

export default Team;
