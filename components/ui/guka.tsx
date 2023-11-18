"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/assets/guka.json';

const style = {
    height: '50vw', // 50% of the viewport width
    width: '50vw',  // 50% of the viewport width
    maxWidth: '600px', // max size to prevent it from becoming too big
    maxHeight: '600px', // max size to prevent it from becoming too big
    };

const GukaAnimation: React.FC = () => {
  return (
    <div>
      <Lottie animationData={animationData} style={style}/>
    </div>
  );
};

export default GukaAnimation;
