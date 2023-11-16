import React from 'react';
import Header from './components/Header';
import Reproductions from './components/reproductions';
import Slogan from './components/Slogan';
import './styles/global.scss';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Slogan />
        {/* <Reproductions /> */}
      </div>
    </React.Fragment>
  );
}
