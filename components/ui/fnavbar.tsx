"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FacilityNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className=" md:flex justify-between text-sky-900 shadow-xl p-3 hidden">
        <Link href="/loginfacility/facility">Home</Link>
        <Link href="/loginfacility/shifts">Post Shifts</Link>
        <Link href="/loginfacility/postedShifts">Posted shifts</Link>
        <Link href="/loginfacility/confirmedShifts">Confirmed shifts</Link>
      </nav>
      <div className="md:hidden flex flex-row justify-between">
        <p className="font-bold text-sky-900 text-sm">HALICARE </p>
        <button onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 flex flex-col bg-white p-4 transition-all duration-300 z-20 text-sky-900`}
      >
        <div className="flex justify-between items-center mb-8 ">
          <p className="text-2xl font-bold t">MENU</p>
          <Button onClick={toggleMenu}>
            <AiOutlineClose size={24} />
          </Button>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            className="p-2 rounded-md hover:bg-sky-100"
            href="/loginfacility/facility"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            className="p-2 rounded-md hover:bg-sky-100"
            href="/loginfacility/shifts"
            onClick={toggleMenu}
          >
            Post Shifts
          </Link>
          <Link
            className="p-2 rounded-md hover:bg-sky-100"
            href="/loginfacility/postedShifts"
            onClick={toggleMenu}
          >
            Posted shifts
          </Link>
          <Link
            className="p-2 rounded-md hover:bg-sky-100"
            href="/loginfacility/confirmedShifts"
            onClick={toggleMenu}
          >
            Confirmed shifts
          </Link>
        </div>
      </div>
    </>
  );
}
