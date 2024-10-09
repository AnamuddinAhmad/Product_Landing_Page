import React from 'react';
import sideImage from '../assets/mancomputer.png';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex bg-[#F3F4F6] flex-col md:flex-row mt-0 md:mt-[60px]">
      {/* Left Section */}
      <div className="flex items-center justify-center w-full px-8 py-8 md:w-1/2 md:px-28">
        <div>
          <h1 className="text-3xl font-bold leading-none md:text-6xl text-zinc-700 md:leading-normal">
            We create <span className="text-[#E95E19]">Solutions</span> for
            your business<span className="text-[#E95E19]">.</span>
          </h1>
          <p className="pt-4 text-sm text-gray-600 md:text-base">
          Experience perfection with our digital agency's expertly crafted digital products. Captivate your audience with stunning web and app development, captivating graphic & video editing, and data-driven marketing strategies. Unlock your brand's full potential in the digital landscape. Partner with us for unparalleled success and elevate your online presence today!
          </p>
          <a className="px-4 py-2 mt-4 border-2 inline-block border-[#33D974] rounded-md hover:font-semibold hover:text-white hover:bg-[#33D974] transition-all duration-500 hover:px-8" href="https://wa.me/+917250383549?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services!" 
            target="_blank" 
            rel="noopener noreferrer">
          WhatsApp
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-full overflow-hidden bg-gray-100 md:w-1/2">
        <img
          src={sideImage}
          alt="Man working on a computer"
          className="object-contain h-[70%] w-[90%] md:h-full md:w-full"
        />
      </div>
    </div>
  );
};

export default Home;
