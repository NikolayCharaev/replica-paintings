'use client';
import styled from 'styled-components';
import birdImage from '@/public/sloganBird.png';
import Image from 'next/image';
import { colors } from './variables';
export const SloganWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;


export const SloganContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SloganTitle = styled.h1`
  max-width: 540px;
  color: ${colors.textColor};

  font-family: Raleway;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 20px;
`;

export const SloganDedicated = styled.span`
  color: ${colors.green};
`;

export const SloganDescription = styled.p`
  color: ${colors.textGrey};
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 60px;
`;
