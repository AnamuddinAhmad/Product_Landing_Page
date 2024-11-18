import React from "react";
import img from "../assets/solution.jpeg";
import BulletPoints from "./BulletPoints";

const SimpleSolution = () => {
  return (
    <div className="flex flex-col w-full min-h-screen mt-6 i md:flex-row">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full p-6 overflow-hidden md:w-1/2 md:p-10">
        <img src={img} alt="" className="object-cover w-full min-h-full" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center w-full px-6 py-8 md:w-1/2 md:px-10 md:py-0">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl font-bold md:text-5xl text-zinc-700">
            Simple <span className="text-[#E95E19]">Solutions.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            alias, aperiam fugit repellendus voluptatibus dolor sit, eveniet
            adipisci earum tenetur deserunt distinctio ab similique.
          </p>
        </div>

        {/* Bullet Points Section */}
        <div className="mt-8 space-y-6">
          <BulletPoints
            title={"Ideate"}
            num="1"
            des={
              "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            }
          />
          <BulletPoints
            title={"Research"}
            num="2"
            des={
              "Our team conducts in-depth market research to uncover insights and trends, ensuring your strategy is data-driven and tailored to your target audience’s needs"
            }
          />
          <BulletPoints
            title={"Create"}
            num="3"
            des={
              "We craft compelling and visually stunning content that tells your brand’s story, captivates your audience, and motivates them to take action"
            }
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col justify-center gap-4 mt-8 mb-4 md:flex-row md:gap-8 md:justify-start">
          
          <button
            className="px-8 py-2 text-lg text-white duration-500 bg-orange-700 rounded-md hover:bg-orange-800"
            onClick={() =>
              (window.location.href =
                "mailto:contact@winsomeminds.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services!")
            }
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleSolution;
