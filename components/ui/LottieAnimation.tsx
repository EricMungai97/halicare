"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/assets/animation.json';

const style = {
    height: 600,
    width: 600,
    };

const LottieAnimation: React.FC = () => {
  return (
    <div>
      <Lottie animationData={animationData} style={style}/>
    </div>
  );
};

export default LottieAnimation;
