'use client'
import React from 'react';

import { IButtonProps } from '@/types/globalTypes';
const Button = ({children, onClick,disabled} : IButtonProps) => {
  return <button disabled={disabled} className='button' onClick={onClick}>{children}</button>;
};

export default Button;
