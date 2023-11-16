'use client';
import styled from 'styled-components';
import logo from '@/public/logo.svg';
import { colors } from './variables';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIcon = styled.div`

  background-image: url(${logo});
  width: 35px;
  height: 35px;
`;


export const LogoTitle = styled.h1`
  color: ${colors.green};
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
`
