"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/assets/grandma.json';

const style = {
    height: 600,
    width: 600,
    };

const GrandmaAnimation: React.FC = () => {
  return (
    <div>
      <Lottie animationData={animationData} style={style}/>
    </div>
  );
};

export default GrandmaAnimation;
