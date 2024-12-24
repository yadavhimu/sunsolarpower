import React from 'react'
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div className='px-[2vw] '>
      <div className='w-full lg:flex lg:mt-20'>
        <div className='w-full p-4'>
            <p className='text-3xl lg:text-7xl font-bold text-[#252F38]'>Residential Solar</p>
            <p className='text-3xl lg:text-7xl font-bold text-[#252F38]'>Panel Installation</p>
            <p className='text-3xl lg:text-7xl font-bold text-[#252F38]'>Services for Your Home</p>
            <p className='text-orange-600 mt-8 text-4xl font-medium'>Hassle-Free Residential</p>
            <p className='text-orange-600  text-4xl font-medium'>Solar Energy Services</p>
            <p className='mt-8 text-2xl font-medium'>The time is now to stop renting electricity from the utility. Put solar panels on your house and make your own clean power to get short-term and long-term financial benefits while helping to protect the environment. Solar power is the key to a clean energy future.</p>
            <Link to=''>
               <button className='text-xl mt-8 font-medium  bg-orange-600 text-white w-48 h-14 rounded-3xl'>Free Consultation</button>
            </Link>

        </div>
        <div className='w-full'>
            <img className='shadow-2xl' src="./images/solar1.jpg" alt="home images" />
        </div>
      </div>
    </div>
  )
}

export default Start
