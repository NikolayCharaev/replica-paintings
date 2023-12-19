'use client'
import React from 'react';

import { motion } from 'framer-motion';
type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="title">
      {children}
    </motion.h1>
  );
};

export default Title;
