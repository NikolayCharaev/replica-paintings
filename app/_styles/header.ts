'use client';
import styled from 'styled-components';
import { colors } from './variables';

export const HeaderWrapper = styled.header`
  background-color: ${colors.lightGreen};



  
`;

export const HeaderList = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  :nth-child(2) { 
    margin-left: auto;
  }
`;
