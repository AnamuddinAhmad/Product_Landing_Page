import React from 'react';
import Card from './Card';
import dev from "../assets/image.png";
import digtal from "../assets/digital.png";
import ai from "../assets/ai.png";
import ads from "../assets/adwords.png";
import graphic from "../assets/graphic-designer.png";
import metup from "../assets/conversation.png";

const Services = () => {
  return (
    <div className="w-full min-h-screen px-4 py-10 font-semibold text-center bg-gradient-to-b from-[#F3F4F6] to-white text-zinc-700   sm:px-6 lg:px-10">
      <div className="flex flex-col items-center py-4 mt-10 leading-none">
        <h1 className="text-4xl font-bold sm:text-4xl lg:text-5xl">
          We Provide The Best{" "}
          <span className="text-[#E95E19] cursor-pointer">Services.</span>
        </h1>
        <p className="w-full px-4 mt-2 text-sm sm:w-2/3 lg:w-1/3 sm:px-6 lg:px-10 sm:text-base lg:text-lg">
          Elevate your brand with our extraordinary services where creativity meets technology, empowering your success in the digital landscape!
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center w-full gap-6 mt-8 min-h-fit'>
        <Card
          title="Image Detection System"
          des="We offer a wide range of services, including Web Design, App Development, Graphic Design, UX/UI Design, and Software Development. Our expertise empowers businesses to thrive in the digital world."
          img={dev}
        />
        <Card
          title="Barber Booking System"
          des="Our comprehensive digital marketing services encompass SEO, social media, PPC, content marketing, and analytics, driving online visibility, engagement, and measurable growth for businesses across diverse industries."
          img={digtal}
        />
        <Card
          title="Parking image detection"
          des="Our AI development expertise includes ML algorithms, NLP, computer vision, and chatbots, enabling businesses to achieve efficiency and innovation through automation and data-driven insights."
          img={ai}
        />
        <Card
          title="Advertising Solutions"
          des="Our comprehensive ad services cover Google Ads, Facebook, Instagram, LinkedIn, YouTube, Twitter, Amazon Ads, and Shopify Ads. With data-driven strategies, we optimize campaigns for increased sales and brand growth."
          img={ads}
        />
        <Card
          title="Graphics & Video Production"
          des="Our graphics and video editing services produce captivating visuals and compelling video edits. From stunning graphics to engaging videos, we expertly enhance your brand narrative, leaving a lasting impact on your audience."
          img={graphic}
        />
        <Card
          title="Consultancy Services"
          des="We provide expert consultancy services, guiding businesses through digital transformation with scalable, cutting-edge solutions aligned to their goals."
          img={metup}
        />
      </div>
    </div>
  );
};

export default Services;
