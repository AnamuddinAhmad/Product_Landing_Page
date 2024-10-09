import React, { useRef } from "react";
import { FeedbackCard } from "./FeedbackCard";

export const Feedback = () => {
  const scrollContainerRef = useRef(null);
  let left = "<";
  let right = ">";

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjusted scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjusted scroll distance
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center w-full px-4 text-zinc-700 md:px-8">
      {/* Title */}
      <h1 className="mt-6 text-3xl font-bold text-center md:text-5xl lg:text-6xl">
        What <span className="text-[#E95E19] cursor-pointer">Clients</span> say!
      </h1>
      
      {/* Description */}
      <p className="w-full mt-2 text-sm text-center md:text-base lg:text-lg md:w-3/4 lg:w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        error tenetur magnam excepturi unde. Esse quos libero laboriosam,
        voluptatibus labore saepe eum nobis, vel atque assumenda perspiciatis,
        eligendi quam amet.
      </p>

      {/* Feedback Card Section */}
      <div className="relative w-full h-64 mt-10 md:h-80 lg:h-96">
        
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 z-10 px-2 py-1 text-2xl font-bold text-white -translate-y-1/2 bg-[#e96E15] bg-opacity-50 rounded-md top-1/2 md:text-3xl lg:text-4xl"
          onClick={scrollLeft}
        >
          {left}
        </button>

        {/* Scrollable Container */}
        <div
          className="flex items-center justify-start gap-6 px-4 py-2 overflow-x-hidden scrollbar-hidden"
          ref={scrollContainerRef}
        >
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 bg-[#e96E15] text-2xl font-bold z-10 px-2 py-1 text-white -translate-y-1/2 text-center bg-opacity-50 rounded-md top-1/2 md:text-3xl lg:text-4xl"
          onClick={scrollRight}
        >
          {right}
        </button>
      </div>
    </div>
  );
};
