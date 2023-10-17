"use client";
import React from 'react';
import { FaHeart, FaHandshake, FaSmile, FaClock, FaCheck, FaRegLightbulb, FaGlobeAmericas, FaUserFriends, FaThumbsUp, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="p-8 bg-gray-100 flex flex-col items-start">
      
      <div className='py-8'>
        <h1 className="text-4xl text-sky-900 font-extrabold mb-6">About Us</h1>
        <p>Founded on August 16, 2023, Halicare LLC stands as a beacon of innovation in the healthcare staffing industry, specifically tailored for the needs of healthcare facilities in Washington State. Our mission goes beyond simply filling staffing gaps; we aim to be a dedicated partner in healthcare, committed to elevating the standards of patient care while optimizing administrative and financial performance for our clients.</p>
        <p>We pride ourselves on our agility, responding swiftly to staffing emergencies with rigorously vetted, highly-skilled professionals. Whether you are seeking temporary coverage or looking to fill permanent roles, Halicare LLC offers unparalleled flexibility, operating 24/7, 365 days a year.</p>
        <p>We invite you to explore a mutually beneficial partnership with us, one that guarantees not just quality but also an effective, cost-sensitive approach to healthcare staffing. Thank you for considering Halicare LLC. We look forward to the opportunity of working together to achieve unparalleled success in healthcare staffing solutions.</p>
      </div>

      <div className="flex flex-wrap w-full">
        <h2 className="text-4xl font-extrabold mb-4 w-full text-sky-900">Our Core Values</h2>

        {/* Example card structure */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <div className="border rounded-lg p-4 bg-white">
            <FaHandshake size={50} className="text-3xl m-auto text-sky-900" />
            <h3 className="text-xl mt-4 mb-2">Integrity</h3>
            <p className="text-sm">We are committed to honest and transparent interactions with our clients and healthcare providers.</p>
          </div>
        </div>

        {/* ... (Repeat the above structure for all other cards using the appropriate icons and text) ... */}

        {/* Using another card as an example: */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <div className="border rounded-lg p-4 bg-white">
            <FaHeart size={50} className="text-3xl m-auto text-sky-900" />
            <h3 className="text-xl mt-4 mb-2">Quality Care</h3>
            <p className="text-sm">Providing top-tier healthcare staffing solutions is not just our business, its our passion.</p>
          </div>
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className="border rounded-lg bg-white">
            <FaShieldAlt size={50} className="text-sky-900" />
                <h3>Reliability</h3>
                <p>Dependability is at the core of our services, ensuring that healthcare providers are there when needed.</p>
            </div>
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className="border rounded-lg p-4 bg-white">
            <FaSmile size={50} className="text-sky-900"/>
                <h3>Compassion</h3>
                <p>We aim to fill healthcare roles with individuals who are compassionate and empathetic.</p>
            </div>
        </div>
       <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className='border rounded-lg p-4 bg-white'>
            <FaClock size={50} className="text-sky-900"/>
                <h3>Flexibility</h3>
                <p>We understand the unique demands of healthcare staffing and aim to offer the most flexible solutions.</p>
            </div>
       </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className='border rounded-lg p-4 bg-white'>
                <FaCheck size={50} className="text-sky-900"/>
                <h3>Commitment</h3>
                <p>We are committed to the well-being and success of both our clients and healthcare professionals.</p>
            </div>
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className="border rounded-lg p-4 bg-white">
            <FaGlobeAmericas size={50} className="text-sky-900"/>
            <h3>Inclusion and Diversity</h3>
            <p>We believe in the power of a diverse and inclusive workforce.</p>
            </div>
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className="border rounded-lg p-4 bg-white">
            <FaUserFriends size={50} className="text-sky-900"/>
            <h3>Respect</h3>
            <p>We hold a deep respect for the skills and compassion that healthcare professionals bring to their roles every day.</p>
            </div>
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
            <div className="border rounded-lg p-4 bg-white">
            <FaThumbsUp size={50} className="text-sky-900"/>
            <h3>Client Satisfaction</h3>
            <p>Client satisfaction is our ultimate goal; we strive to exceed expectations every time.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

