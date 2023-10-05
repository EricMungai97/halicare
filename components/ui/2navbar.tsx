import Link from 'next/link'
import React from 'react'

export default function StaffNavbar() {
  return (
    <>
      <nav className='bg-orange-400 flex justify-between text-white shadow-xl p-3'>
          <Link href='/login/employee'>Home</Link>
          <Link href='/login/shifts'>Shifts</Link>
          <Link href='/explore'>Explore Shifts</Link>
          <Link href='/profile'>Profile</Link>

      </nav>
    </>
  )
}
