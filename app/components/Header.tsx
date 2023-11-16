import React from 'react';
import Logo from './Logo';

import { HeaderWrapper, HeaderList } from '../_styles/header';
import { Container } from '../_styles/global';
import Nav from './Nav';
import Basket from './Basket';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderList>
          <Logo />
          <Nav/>
          <Basket/>
        </HeaderList>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
