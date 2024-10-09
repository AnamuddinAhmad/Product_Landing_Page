import React from "react";

const Footer = () => {
  return (
    <footer className="relative inline-block w-full px-4 py-8 mt-10 overflow-hidden min-h-60 text-zinc-700" style={{marginBottom:"-10px"}}>
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E95E19"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Logo / Company Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-5xl font-bold text-[#E95E19]">WinsomMind</h2>
          <p className="mt-2 text-xl font-semibold ">
            Transforming Visions into Digital Realities.{" "}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-xl font-semibold">
          <a href="#home" className="hover:text-[#E95E19] transition">
            Home
          </a>
          <a href="#services" className="hover:text-[#E95E19] transition">
            Services
          </a>
          <a href="#about" className="hover:text-[#E95E19] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#E95E19] transition">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex mt-6 space-x-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-white hover:text-[#E95E19] transition"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-white hover:text-[#E95E19] transition"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-white hover:text-[#E95E19] transition"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-white hover:text-[#E95E19] transition"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative bottom-0 z-10 mt-6 text-sm text-center text-gray-4=700">
        &copy; 2024 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
