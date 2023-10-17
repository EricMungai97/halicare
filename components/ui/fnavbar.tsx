"use client";
import Link from 'next/link'
import React from 'react'

export default function FacilityNavbar() {
  return (
    <>
      <nav className=' flex justify-between text-sky-900 shadow-xl p-3'>
          <Link href='/loginfacility/facility'>Home</Link>
          <Link href='/loginfacility/shifts'>Shifts</Link>
          <Link href='/explore'>Staff</Link>
      

      </nav>
    </>
  )
}
