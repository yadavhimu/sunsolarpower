import React from 'react'

const LastSection = () => {
  return (
    <div className='px-[2vw]'>
      <div className='lg:flex mt-20'>
        <div className='w-full '>
          <p className='text-2xl lg:text-5xl font-bold text-[#252F38]'>What Should You Consider Before</p>
          <p className='text-2xl lg:text-5xl font-bold text-[#252F38]'>Installing Home Solar Panels?</p>
          <p className='text-xl lg:text-2xl mt-10'>Here are several factors that you should know to determine whether your home is a good fit for a solar panel installation:</p>
          <ul  className='list-disc text-lg lg:text-xl p-3 lg:p-8'>
            <li>Shade is one of the most common reasons people cannot install solar panels. Trees or other impediments to full sunlight throughout the entire day can negatively impact solar panel efficiency.</li>
            <li>For rooftop systems, your roof must be in good condition. It is ideal but not necessarily required for your home to have south or west exposure. Solar can be mounted on all roof materials.</li>
            <li>Depending on the residential property, ground-mounted solar panel systems may be good alternatives if rooftop solar is not feasible.</li>
            <li>The economics of solar generally make sense only if you are planning to stay in your home for at least 2 years. If you are planning to move soon, consider waiting to install solar on your new home!</li>
            <li>If you are building a home, it’s less expensive to incorporate solar into your plans from the beginning. We will work with your developer to ensure the process is efficient and seamless for you.</li>
          </ul>
          <p className=' text-xl mt-10'>Many life changes can contribute to an increase in household electricity usage that may prompt you to consider home solar panels. These include moving into a larger home, adding to your family with children or older parents moving in, purchasing an electric vehicle, or installing a pool.</p>
          <p className=' text-xl mt-10'>If your electricity bills have recently gone up, now is the perfect time to see how solar energy can lower your energy bills.</p>
        </div>
        <div className='w-full mt-5 lg:mt-60'>
        <img className='lg:ml-40' src="./images/solar5.jpg" alt="home" />
        </div>
      </div>
    </div>
  )
}

export default LastSection
