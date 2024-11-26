import React from 'react'

export const FeedbackCard = ({name,feedback}) => {
  return (
    <div className="h-[87%] px-2 border-[1px] border-[#E96E19] py-4 rounded-md text-center w-60  shrink-0">
     
      <h1 className='text-2xl font-semibold text-[#E96E19]'>{name}</h1>
      <p className='px-4 mt-4 mb-4 text-base leading-none text-zinc-700'>{feedback}</p>
    </div>

  )
}
