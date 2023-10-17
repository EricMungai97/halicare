"use client";
import Link from 'next/link'
import React from 'react'

export default function StaffNavbar() {
  return (
    <>
      <nav className='text-sky-900 flex justify-between shadow-xl p-3'>
          <Link href='/login/employee'>Home</Link>
          <Link href='/login/Shifts'>Shifts</Link>
          <Link href='/login/availableShifts'>Available Shifts</Link>
          <Link href='/login/profile'>Profile</Link>

      </nav>
    </>
  )
}
