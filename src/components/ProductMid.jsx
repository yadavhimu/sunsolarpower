import React from 'react'

const ProductMid = () => {
  return (
    <div  className='px-[2vw]'>
      <div className='px-[8vw]'>
         <p className='mt-20 text-5xl font-bold text-orange-600 flex justify-center'>Premium Solar Panels</p>
         <p className='text-xl flex mt-10'>When investing in upgrades for your home, you want to be confident that the materials will stay strong for many years. It’s important to prioritize both durability and performance to ensure you get the most energy out of the sun.</p>
         <p className='text-xl flex mt-10'>The good news is that our expert installation team will customize a recommendation to your home and to your goals and budget. We carry the solar panel brands you can trust, as well as all of the equipment and accessories necessary for the full system, including:</p>
      </div>
      <div className='flex px-[8vw] justify-between mt-20'>
        <div className=''>
        <img src="./images/p2.webp" alt="" />
        <p className='flex justify-center mt-5 text-xl text-[-[#112435] font-medium'>Maxeon</p>
        </div>
        <div>
        <img src="./images/p3.webp" alt="" /> 
        <p className='flex mt-5 justify-center text-xl text-[-[#112435] font-medium'>QCELLS</p>
        </div>
        <div>
        <img src="./images/p4.webp" alt="" />
        <p className='flex mt-5 justify-center text-xl text-[-[#112435] font-medium'>Mission Solar</p>
        </div>
      </div>
      <div className='px-[8vw]'>
         <p className='mt-20 text-5xl font-bold text-orange-600 flex justify-center'>Other Equipment</p>
         <p className='text-xl flex mt-10'>Racking holds the solar panels in place, ensuring stability and optimal angle for sunlight. Inverters and Power Optimizers convert the sun’s DC energy into usable AC energy that can power your home. Microinverters can be placed on each solar panel, or you can choose a centralized optimizer for the full system.</p>
         <p className='mt-20 text-5xl font-bold text-orange-600 flex justify-center'>Warranty</p>
         <p className='text-xl flex mt-10'>Our products come with a robust 25-year warranty so your investment is protected for the long-haul. At Freedom Solar, we guarantee our services with a workmanship warranty, ensuring our commitment to quality. Should any adjustments or repairs be necessary, our team is readily available to assist you.</p>
        </div>
    </div>
  )
}

export default ProductMid
