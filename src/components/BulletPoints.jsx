import React from 'react';

const BulletPoints = ({ num,des,title }) => {
  return (
    <div className='flex flex-col gap-1 mt-2 sm:flex-row sm:gap-2 min-h-fit sm:items-start'>
      {/* Number Circle */}
      <div className='rounded-full flex items-center justify-center text-white font-semibold text-lg sm:text-xl h-10 w-10 sm:h-12 sm:w-12 bg-[#E95E19] mt-4 sm:mt-6'>
        {num}
      </div>

      {/* Text Section */}
      <div className='flex-1'>
        <h1 className='mt-2 text-xl font-semibold text-zinc-700 sm:text-2xl'>
        {title}</h1>
        <p className='mt-1 text-sm leading-none tracking-tighter text-zinc-700 sm:text-lg'>
          {des}
        </p>
      </div>
    </div>
  );
};

export default BulletPoints;
