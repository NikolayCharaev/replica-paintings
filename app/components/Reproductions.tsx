'use client'
import {useState} from 'react';
import Title from './Title';

import '@/styles/reproductions.scss';

const Reproductions = () => {
    const[activeButton, setActiveButton] = useState('Франция')
  return (
    <div className="reproductions">
      <div className="reproductions__top">
        <Title>Репродукции</Title>
        <div className="reproductions__category">
          <button onClick={() => { 
            setActiveButton('Франция')
          }} className={`category-button ${activeButton === 'Франция' ? 'active' : ""}`}>Франция</button>
          <button onClick={() => { 
            setActiveButton('Германия')
          }} className={`category-button ${activeButton === 'Германия' ? 'active' : ""}`}>Германия</button>
          <button onClick={() => { 
            setActiveButton('Англия')
          }} className={`category-button ${activeButton === 'Англия' ? 'active' : ""}`}>Англия</button>
        </div>
      </div>
    </div>
  );
};

export default Reproductions;
