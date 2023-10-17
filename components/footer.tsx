"use client";
import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='mx-auto'>
      <div >
        <svg className="bg-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#0c4a6e" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,74.7C384,96,480,128,576,144C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <footer className=''>
        <div className='grid grid-cols-2 px-20 shadow-lg bg-sky-900 pt-10 pb-10'>
          <div className='text-white font-extrabold text-xl'>HALICARE LLC</div>
          <div className='flex flex-col text-white pb-2'>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className='text-gray-400 flex justify-between'>
            <p>© 2023 Halicare LLC - All Rights Reserved</p>
            <p>Privacy policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
