import React from 'react'

const ProductSection = () => {
  return (
    <div className='px-[2vw] bg-[#EEEBE7] mt-20 p-4'>
      <div className='flex'>
        <div className='w-full p-8'>
         <p className='mt-20 text-5xl font-bold text-orange-600'>Expert Installation & Service</p>
         <p className='text-xl mt-10'>The quality of your solar installer will have a direct impact on the performance of your solar energy system. It’s crucial the equipment for your solar panel installation offers the results you need now and in the future. </p>
         <p className='text-xl mt-10'>At Freedom Solar, we proactively tailor solutions to meet the unique needs of each customer. We understand that solar requirements vary, from available installation space to energy consumption patterns and sunlight exposure. In addition to personalized recommendations, our team is committed to empowering clients through education.</p>
        </div>
        <div className='w-full'>
           <img src="./images/p5.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductSection
