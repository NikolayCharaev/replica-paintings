'use client';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a { 
    text-decoration: none;
  }
 
`;

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
