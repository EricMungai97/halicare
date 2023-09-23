import Link from 'next/link'
import React from 'react'

export default function StaffNavbar() {
  return (
    <>
      <nav className='bg-orange-400 flex justify-between text-white shadow-xl p-3'>
          <Link href='/home'>Home</Link>
          <Link href='/shifts'>Shifts</Link>
          <Link href='/explore'>Explore Shifts</Link>
          <Link href='/profile'>Profile</Link>

      </nav>
    </>
  )
}
