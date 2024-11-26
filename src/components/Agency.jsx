import React from 'react';
import img from '../assets/Solution.avif';

const Agency = () => {
  return (
    <div className="flex flex-col w-full min-h-screen py-10 mt-10 md:flex-row">
      
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center w-full p-6 md:w-1/2">
        <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl xl:text-6xl text-zinc-700">
          Our <span className="text-[#E95E19] cursor-pointer">Agency.</span>
        </h1>
        <p className="px-4 mt-2 text-sm text-center sm:text-base lg:text-lg sm:px-6 lg:px-12 xl:px-16">
        At Our Agency, we provide innovative services including Image Detection Systems, Barber Booking Platforms, Parking Image Detection, Advertising Solutions, Graphics & Video Production, and Consultancy Services, all tailored to enhance efficiency and creativity for businesses and individuals.        </p>
        <button className="px-10 sm:px-12 lg:px-16 py-2 mt-4 border-[1px] border-[#e95E19] text-zinc-900 rounded-md hover:bg-[#E95E19] hover:text-white transition-all duration-500">
          Click
        </button>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center w-full min-h-full p-4 md:p-6 lg:p-8 md:w-1/2">
        <img src={img} alt="Man working on computer" className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl" />
      </div>

    </div>
  );
}

export default Agency;
