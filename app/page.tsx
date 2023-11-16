import Image from 'next/image';
import React from 'react';
import Header from './components/Header';
import styles from './page.module.css';

import { Container, GlobalStyle } from './_styles/global';
// import { Header } from './_styles/header';

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header/>
      <Container>
        
      </Container>
    </React.Fragment>
  );
}
