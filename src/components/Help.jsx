    // 

import React from 'react'
const Help = () => {
  return (
    <div className="pt-5 bg-[url('https://simmifoundation.org/home/images/help-bg.png')]  bg-top bg-fixed	 py-4">
            <p className='font-nato text-5xl font-light p-4 text-center text-white'>How can you help us </p>
            <div className='flex justify-around my-12 font-nato w-5/6 items-center m-auto gap-8 md:flex-row flex-col'>
                {/* <div className=''> */}
                <div className='text-white py-6 px-2   justify-center    shadow-2xl rounded-md' >
                    <div className='flex  flex-col items-center justify-center'>
                        <p className='text-[#F48634]   font-semibold mb-2 text-2xl p-4'>Collaborate</p>
                        <p className='w-4/5 border-t pt-2 font-light'>Simmi Foundation serves in the collaboration with schools, colleges and other institutions.</p>
                   </div>
                    <div className='mt-8  font-nato   text-right mr-10'>
                    <span className='text-xl cursor-pointer hover:text-[#F48634] font-light'>    Collaborate with us {"->"} </span>
                    </div>
                </div>
                <div className='text-white py-6 px-2   justify-center    shadow-2xl rounded-md' >
                    <div className='flex  flex-col items-center justify-center'>
                        <p className='text-[#F48634]   font-semibold mb-2 text-2xl p-4'>Donate Money</p>
                        <p className='w-4/5 border-t pt-2 font-light'>Your donation will further our mission of ensuring a happy and healthy life of those in need.</p>
                   </div>
                    <div className='mt-8  font-nato   text-right mr-10'>
                    <span className='text-xl cursor-pointer hover:text-[#F48634] font-light'>   Donate now {"->"} </span>
                    </div>
                </div>
                <div className='text-white py-6 px-2   justify-center    shadow-2xl rounded-md' >
                    <div className='flex  flex-col items-center justify-center'>
                        <p className='text-[#F48634]   font-semibold mb-2 text-2xl p-4'>Be a Volunteer</p>
                        <p className='w-4/5 border-t pt-2 font-light'>Even the all-powerful Pointing has no control about the blind texts.</p>
                   </div>
                    <div className='mt-8  font-nato   text-right mr-10'>
                    <span className='text-xl cursor-pointer hover:text-[#F48634] font-light'> Read more {"->"} </span>
                    </div>
                </div>
                  
                {/* </div> */}
            </div>
    </div>
  )
}

export default Help