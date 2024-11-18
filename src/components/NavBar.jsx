import React, { useState } from "react";
import logo from "../assets/icons8-generated-photos-1500.png"; // Importing logo from assets
import "../App.css";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        {/* Navbar */}
        <nav className="relative top-0 left-0 z-20 flex items-center justify-between w-full px-6 py-3 text-2xl bg-white shadow-md md:fixed">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <span>
              <h1 className="text-3xl font-bold text-[#E95E19]">WinsomMind</h1>
            </span>

            {/* Desktop Menu */}
            <div className="hidden gap-4 ml-8 md:flex text-zinc-700">
              <a className="px-2 nav-link hover:text-[#E9651E]" href="#home">
                Home
              </a>
              <a className="px-2 nav-link hover:text-[#E9651E]" href="#about">
                About
              </a>
              <a
                className="px-2 nav-link hover:text-[#E9651E]"
                href="#services"
              >
                Services
              </a>
              <a className="px-2 nav-link hover:text-[#E9651E]" href="#contact">
                Project
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              className="px-4 py-2 rounded-full border-[#E9651E] border-[1.5px] text-zinc-700 hover:bg-[#E9651E] duration-500 hover:text-white"
              onClick={() =>
                (window.location.href =
                  "mailto:contact@winsomeminds.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services!")
              }
            >
              Contact Us
            </button>
          </div>

          {/* Hamburger/Close Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                // Close icon (X icon)
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-[#E9651E] duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-[#E9651E] duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu that expands down and pushes the content */}
        {isOpen && (
          <div className="z-10 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <a
                className="block py-2 hover:text-[#E9651E] duration-500"
                href="#home"
              >
                Home
              </a>
              <a
                className="block py-2 hover:text-[#E9651E] duration-500"
                href="#about"
              >
                About
              </a>
              <a
                className="block py-2 hover:text-[#E9651E] duration-500"
                href="#services"
              >
                Services
              </a>
              <a
                className="block py-2 hover:text-[#E9651E] duration-500"
                href="#contact"
              >
                Project
              </a>
              <button className="w-full px-4 py-2 mt-2 text-black border-[1px] border-[#E9651E] rounded-md hover:bg-[#E9651E] duration-500 hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
