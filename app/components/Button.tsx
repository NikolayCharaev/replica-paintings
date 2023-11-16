'use client'
import React from 'react';

import { IButtonProps } from '@/types/globalTypes';
const Button = ({children }) => {
  return <button className='button'>{children}</button>;
};

export default Button;
