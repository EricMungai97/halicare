"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  // Import Icons

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Add this line
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // Add this line

  const toggleMenu = () => setIsOpen(!isOpen);
  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
  const openDropdown2 = () => setIsDropdownOpen2(true);
  const closeDropdown2 = () => setIsDropdownOpen2(false);
  

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen2(false); // Close the dropdown too
  };

  return (
    <div className="relative">
      <div className="shadow-xl w-full text-sky-900 text-lg py-4 px-4 bg-white">
        <nav className="w-full">
          <ul className="flex flex-row justify-between items-center">
            <li className="font-bold text-2xl">HALICARE LLC</li>
            <li className="md:hidden">
              {/* Hamburger menu */}
              <button onClick={toggleMenu}>
                {isOpen ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
              </button>
            </li>
            {/* Items shown on larger screens */}
            <div className="hidden md:flex flex-row space-x-20">
              {/* ... Place your original Nav Items here ... */}
              <Link href="/"><p>Home</p></Link>
              <Link href="/about"><p>About</p></Link>
              <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <p>Login</p>
                {isDropdownOpen && (
                  <div className="absolute top-6 left-0 z-10 flex flex-col bg-white border-2 border-sky-900 rounded p-3">
                    <Link href="/loginfacility/facilities" className="bg-sky-100 mb-2"><p>Facilities</p></Link>
                    <hr></hr>
                    <Link href="/login/staff" className="bg-sky-100"><p>Staff</p></Link>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={openDropdown2} onMouseLeave={closeDropdown2}>
                <p>Register</p>
                {isDropdownOpen2 && (
                  <div className="absolute top-6 left-0 z-10 flex flex-col bg-white border-2 border-sky-900 rounded p-3">
                    <Link href="/registerfacility" className="bg-sky-100 mb-2"><p>Facilities</p></Link>
                    <hr></hr>
                    <Link href="/register" className="bg-sky-100"><p>Staff</p></Link>
                  </div>
                )}
              </div>
            
              <Link href="/contact" className="border-solid border-2 text-sky-900 hover:bg-sky-900 rounded-full border-sky-900 hover:text-white p-1"><p>Contact Us</p></Link>
            </div>
          </ul>
        </nav>
      </div>
      {/* Sidebar for mobile */}
      <div
        className={`${isOpen ? "block" : "hidden"} fixed inset-0 flex flex-col bg-white p-4 transition-all duration-300 z-20 text-sky-900`}
      >
        <div className="flex justify-between items-center mb-8 ">
          <p className="text-2xl font-bold t">MENU</p>
          <button onClick={toggleMenu}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4">
          {/* ... Place your original Nav Items here ... */}
          <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
            <Link href="/"><p>Home</p></Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
            <Link href="/about"><p>About</p></Link>
          </li>
          <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
              <p>Login</p>
            </li>
            {isDropdownOpen && (
              <div className="absolute top-10 left-0 z-10 flex flex-col gap-5 bg-white  border-sky-900 rounded p-6">
                <Link href="/loginfacility/facilities" className="bg-sky-100 mb-2">
                  <p>Facility</p>
                </Link>
                <hr></hr>
                <Link href="/login/staff" className="bg-sky-100">
                  <p>Staff</p>
                </Link>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={openDropdown2} onMouseLeave={closeDropdown2} onClick={closeMenu}>
            <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
              <p>Register</p>
            </li>
            {isDropdownOpen2 && (
              <div className="absolute top-10 left-0 z-10 flex flex-col gap-5 bg-white  border-sky-900 rounded p-6">
                <Link href="/register" className="bg-sky-100 mb-2">
                  <p>Facility</p>
                </Link>
                <hr></hr>
                <Link href="/register" className="bg-sky-100">
                  <p>Staff</p>
                </Link>
              </div>
            )}
          </div>
         
          <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
            <Link  href="/contact"><p>Contact Us</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;



