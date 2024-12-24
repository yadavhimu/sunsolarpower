import React from 'react'

const MidSection = () => {
  return (
    <div className='px-[2vw] bg-[#EEEBE7]'>
      <div className='lg:flex mt-10'>
        <div className='w-full mt-20'>
        <p className='text-3xl lg:text-5xl font-bold text-[#252F38]'>Solar Panel Installation for Residential Homes</p>
        <ul className='list-disc text-3xl mt-10 p-8'>
            <li className=''>
            We can install rooftop solar panels on shingle, metal, tile, and flat roofs
            </li>
            <li className='mt-4'>We offer pre-construction consultation and coordinate with your builder/contractor</li>
            <li className='mt-4'>We also offer ground-mounted solar energy systems and solar carports</li>
            <li className='mt-4'>We use premium solar technology with every installation</li>
            <li className='mt-4'>Our installation services include the Complete Freedom warranty</li>
        </ul>
        </div>
        <div className='mt-10'>
            <img src="./images/solar2.webp" alt="home" />
        </div>
      </div>
      
      <div className='lg:flex mt-10'>
        <div className='w-full mt-10'>
        <p className='text-3xl lg:text-5xl font-bold text-[#252F38]'>Home Battery Backup Systems That We Offer</p>
        <ul className='list-disc text-3xl mt-10 p-8'>
            <li>Tesla Powerwall backup power system — Now Installing the Tesla Powerwall 3</li>
        </ul>
        </div>
        <div>
           <img src="./images/solar3.webp" alt="" />
        </div>
      </div>

      <div className='lg:flex mt-10'>
        <div className='w-full'>
          <p  className='text-3xl lg:text-5xl font-bold text-[#252F38]'>Our Service Department is Here For You</p>
          <ul  className='list-disc text-3xl p-8'>
            <li>Get lifetime service and monitoring of the residential solar panel systems we install</li>
            <li className='mt-4'>We offer de-installation and re-installation for roof repairs and remodels</li>
            <li className='mt-4'>Get a consultation with your realtor when you sell your home</li>
            <li className='mt-4'>Services for existing PV systems installed by other solar companies (limited to certain regions, please inquire)</li>
          </ul>
          <p className=' text-3xl'>At Freedom Solar, we offer comprehensive services to ensure your solar system functions optimally. Our team can handle solar repair, maintenance, and upgrades to maximize energy production and improve overall efficiency.</p>
        </div>
        <div>
          <img src="./images/solar4.webp" alt="" />
        </div>
      </div>

      <div className='mt-32 '>
        <p className='text-5xl font-bold text-[#252F38] flex justify-center'>
        Why Should You Have Solar Panels Installed at Your Home?
        </p>
        <p className=' text-2xl mt-2 p-8'>
        Installing solar panels is an upfront cost, but a smart investment that saves homeowners thousands on household electricity costs while increasing your home price. Solar helps reduce your carbon footprint and improve local air quality. With our variety of financing options, putting residential solar panels on your home can be less than your electric bill, including options like our $0 down and low interest rates, with approved credit.
        </p>
      </div>
    </div>
  )
}

export default MidSection
