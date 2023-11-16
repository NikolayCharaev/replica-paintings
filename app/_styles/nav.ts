'use client';
import styled from 'styled-components';
import { colors } from './variables';

export const NavWrapper = styled.nav`
  max-width: 390px;
`;

export const NavList = styled.ul`
  list-style: none;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  margin-right: 60px;

  li:hover { 
    color: ${colors.textHoverColor};
  }

  li:active{ 
    color: ${colors.textActiveColor};
  }
`;

export const NavItem = styled.li`
  color: ${colors.textColor};
  transition: all .2s ease;

  cursor: pointer;
 
`;
