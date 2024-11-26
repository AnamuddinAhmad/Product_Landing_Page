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
          <FeedbackCard name={"Rajesh Kumar"} feedback="The consultancy services from Our Agency helped us identify key areas for growth in our business. Their digital marketing strategies increased our online presence and customer engagement significantly. Highly recommend their expertise!" />
          <FeedbackCard name={"Priya Sharma"} feedback="The team at Our Agency transformed our approach to digital marketing. They provided actionable insights and tailored strategies that boosted our online visibility. Their consultancy was a game-changer for our business." />
          <FeedbackCard name={"Amit Verma"} feedback="We saw a remarkable difference in our online reach and lead generation after implementing Our Agency’s digital marketing strategies. Their consultancy services provided a structured plan for scaling our business." />
          <FeedbackCard name={"Sanya Gupta"} feedback="The team at Our Agency delivered exceptional results. Their digital marketing strategies helped increase our brand visibility, and the consultancy services gave us the right direction for our business." />
          <FeedbackCard name={"Ravi Patel"} feedback="The consultancy and digital marketing services from Our Agency were exactly what we needed. Their strategies boosted our sales, and the guidance they provided was insightful and effective." />
          <FeedbackCard name={"Neha Desai"} feedback="I am really impressed with Our Agency’s expertise. Their digital marketing strategies led to a noticeable increase in traffic to our website, and the consultancy services helped us optimize our business processes." />
          <FeedbackCard name={"Vikram Singh"} feedback="Thanks to Our Agency, our digital marketing efforts have produced great results. Their consultancy services gave us a clear roadmap for growth, and the marketing strategies were spot on." />
          <FeedbackCard name={"Aarti Reddy"} feedback="The consultancy services were invaluable in helping us identify key areas to improve in our business. Our Agency's digital marketing strategies led to a significant increase in brand awareness." />
          <FeedbackCard name={"Karan Joshi"} feedback="I highly recommend Our Agency for digital marketing and consultancy. Their insights helped us build a stronger online presence, and their strategies produced immediate, positive results." />
          <FeedbackCard name={"Meera Nair"} feedback="Working with Our Agency was a game-changer. Their digital marketing expertise helped us expand our online reach, and their consultancy gave us the guidance we needed to refine our business strategies." />
          
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
