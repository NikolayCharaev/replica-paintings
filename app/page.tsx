import React from 'react';
import Header from './components/Header';
import Slogan from './components/Slogan';

import { Container, GlobalStyle } from './_styles/global';

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <Slogan />
      </Container>
    </React.Fragment>
  );
}
