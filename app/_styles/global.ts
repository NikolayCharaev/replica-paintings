'use client';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

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
  width: 1110px;
  margin: 0 auto;
`;

export const Button = styled.button`
  background: transparent;
  padding: 20px 60px;
  color: ${colors.textHoverColor};
  max-width: 227px;
  cursor: pointer;
  font-size: 20px;

  border: 1px solid ${colors.textHoverColor};
`;
