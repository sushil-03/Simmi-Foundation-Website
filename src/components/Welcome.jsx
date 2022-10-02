import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-[#212529] text-white -mt-1 py-5 px-10 flex justify-end md:gap-60 gap-2 flex-wrap'>
        <div className='flex flex-col md:w-2/5 w-full text-center'>
          <p className='font-nato md:text-5xl text-2xl leading-8 pt-5 font-light'>Welcome to <span className='uppercase text-[#F48634]'> simmi</span></p>
          <p className='md:mt-14 mt-7 font-light md:text-lg text-sm leading-6'>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
        </div>
        <div className='md:w-1/4 w-3/4 h-full'>
          <img src="https://simmifoundation.org/home/images/home/map-dark.png" alt="" />
        </div>
    </div>
  )
}

export default Welcome