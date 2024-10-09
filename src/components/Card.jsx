import React from "react";
// import img from '../assets/search.webp'

const Card = ({title,des,img}) => {
  return (
    <>
    <div className="relative px-4 py-4 overflow-hidden border-[1px] border-[#E95E19] rounded-md h-60 w-60 sm:w-72 md:w-80 lg:w-96">
      <span className="absolute w-16 h-16 left-[40%] top-[10px]  rounded-b-lg overflow-hidden">
        <img src={img} alt="Icon" className="h-[85%] w-[85%]"/>
      </span>
      <h1 className="mt-14 text-xl font-semibold text-[#E95E19] text-center">{title}</h1>
      <p className="text-sm leading-tight tracking-tighter text-center mt-[2px] md:text-base">
      {des}
      </p>
    </div>
    </>
  );
};

export default Card;
