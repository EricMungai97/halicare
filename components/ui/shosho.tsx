"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/assets/shiosho.json';

const style = {
    height: 600,
    width: 600,
    };

const ShoshAnimation: React.FC = () => {
  return (
    <div>
      <Lottie animationData={animationData} style={style}/>
    </div>
  );
};

export default ShoshAnimation;
