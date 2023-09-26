import Link from 'next/link'
import React from 'react'

export default function FacilityNavbar() {
  return (
    <>
      <nav className='bg-orange-400 flex justify-between text-white shadow-xl p-3'>
          <Link href='/home'>Home</Link>
          <Link href='/loginfacility/shifts'>Shifts</Link>
          <Link href='/explore'>Staff</Link>
      

      </nav>
    </>
  )
}
