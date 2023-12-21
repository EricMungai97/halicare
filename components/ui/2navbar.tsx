import Link from 'next/link'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  // Import Icons
import { useRouter } from 'next/router'
export default function StaffNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleLogout = async () => {
      await signOut({ }); // Prevent default redirect
      window.location.href = '/'; // Redirect to homepage
    };

  return (
    <>
      <nav className='text-sky-900 shadow-xl p-3'>
        {/* Menu toggle button */}
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Links shown on large screens */}
        <div className='hidden md:flex justify-between '>
          <Link href='/login/employee'>Home</Link>
          <Link href='/login/shifts'>Shifts</Link>
          <Link href='/login/availableShifts'>Available Shifts</Link>
          <Link href='/login/profile'>Profile</Link>
          <button onClick={handleLogout}>Sign out</button>
        </div>

        {/* Dropdown menu for small screens */}
        {isOpen && (
          <div className='flex flex-col space-y-4 items-center absolute top-16 left-0 w-full bg-white md:hidden'>
            <Link onClick={closeMenu}  className="p-2 rounded-md hover:bg-sky-100" href='/login/employee'>Home</Link>
            <Link onClick={closeMenu} className="p-2 rounded-md hover:bg-sky-100" href='/login/shifts'>Shifts</Link>
            <Link onClick={closeMenu} className="p-2 rounded-md hover:bg-sky-100" href='/login/availableShifts'>Available Shifts</Link>
            <Link onClick={closeMenu} className="p-2 rounded-md hover:bg-sky-100" href='/login/profile'>Profile</Link>
            <button onClick={handleLogout} className="p-2 rounded-md hover:bg-sky-100">Sign out</button>
          </div>
        )}
      </nav>
    </>
  )
}