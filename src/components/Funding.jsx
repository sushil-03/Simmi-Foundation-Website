import React from 'react'

import {ImArrowRight2} from "react-icons/im"

const Funding = () => {
  
    const fundingInfo=[
        {
        image:"img1.jpg",
        title:"Test Fund Raiser Kavach",
        detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur adipiscing elit duis tristique`,
        current:15000,
        total:30000,
    },
    {
        image:"img3.jpg",
        title:'Donating Clothes',
        detail:"SIMMI FOUNDATION Donated Clothes and blankets to almost 4500 Underprivileged people. As we know how how important is clothes at this winter time, Hence SIMMI Foundation appeal you all to help us in this drive by donating the much you could have.",
       
        current:10000 ,
        total:100000
    },
    {
        image:"img2.jpg",
        title:"Kavach Initiative",
        detail:"Simmi Foundation has taken an initiative Kavach to donate shield masks to the workers who put their lives at risk daily. Let's make a change during this lockdown Let's make a change during this lockdown to help these workers who do not have the luxury to",
        current:21000 ,
        total:150000
    },
    {
        image:"img4.jpg",
        title:"Education",
        amountString:"10000 raised of 500000 " ,
        detail:"Smart India Multi Management Institute (SIMMI) Foundation working dedicatedly in providing education to underprivileged poor children free of cost. Meanwhile post covid situation our team working on giving Chaupal Classes and almost motivated",
        current:10000 ,
        total:500000
    }
   
]
  return (
    <div className='bg-[#212529]   px-10  gap-60 py-10'>

            <p className='font-nato text-5xl font-light p-4 text-center text-[#F48634] py-7'>Fundraisers </p>
            <p className='text-white text-center align-center mb-5'>A little change makes all the difference.</p>
        <div className='flex flex-wrap gap-5 justify-around md:flex-row flex-col'>
        {
            fundingInfo.map((event,key)=>{
                const res= (Math.floor((event.current/event.total)*100)*3)
                return (
                <div key={key} className='bg-white md:w-2/6 w-5/6 m-5 rounded-md'>

            <div>
                <img src={`/assets/images/funding/${event.image}`} alt="events" className='rounded-tl-md rounded-tr-md' />
            </div>
            <div className='relative pl-5'>
                <div className=' font-light text-gray-600 mb-6'>
                    <div className='p-3'>

                    <span className='text-[#F48634] font-semibold text-2xl'>{event.title}</span>
                    </div>
                    <span className='text-sm'>
                    {event.detail}
                    </span>
                    <p className='mt-5'>{`${event.current} raised of ${event.total}` }</p>
                    <div className='h-2 w-5/6 border relative rounded-sm bg-gray-100'>
                    <div className={`h-2 absolute  bg-[#F48634] z-20 rounded-sm` } style={{width:res+"px"}}>
                        {
                            ""
                        }
                    </div>

                    </div>
                </div>
            <p className='text-[#f48634] p-2 font-light flex items-center cursor-pointer'>Read More  <ImArrowRight2  size={"1rem"} className='text-[#f48634] ml-2'/></p>

            </div>
        </div>
                );
            })
        }
        
       
        </div>
    <div>

    </div>
 

    </div>
  )
}

export default Funding;