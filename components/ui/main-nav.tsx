import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  // Import Icons

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Add this line

  const toggleMenu = () => setIsOpen(!isOpen);
  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
  

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
              <Link href="/services"><p>Staffing Services</p></Link>
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
              <Link href="/register"><p>Register</p></Link>
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
            <Link href="/services"><p>Staffing Services</p></Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
            <Link href="/about"><p>About</p></Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-100" onClick={toggleMenu}>
            <Link  href="/contact"><p>Contact Us</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;



