import React from 'react'
import {GoLocation} from "react-icons/go"
import {IoCall}from "react-icons/io5"
import {GrMail} from "react-icons/gr"
const Footer = () => {
  return (
    <div className='bg-[#252525] text-white p-14'>
        <div className='pt-10 flex justify-around gap-5 md:flex-row flex-col'>
            <div className='flex flex-col md:w-1/3 w-full'>
                <span className='font-nato text-xl uppercase py-4 flex flex-col gap-4'> <span> About us</span>  <span className='w-16 h-[0.09rem] bg-white'>{""}</span></span> 
                <span className='text-gray-300 text-sm '>We envisions to develop a society based on legitimate rights, equity, justice, honesty, social sensitivity and a culture of service in which all are self-reliant.</span>
            </div>
            <div className='h-34 flex-1'>
            <span className='font-nato text-xl uppercase py-4 flex flex-col gap-4'> <span> Initiative us</span>  <span className='w-16 h-[0.09rem] bg-white'>{""}</span></span> 
                <div className='flex flex-col flex-wrap gap-3 h-36 text-gray-200'>

                <p className='hover:text-[#F48634] cursor-pointer'>Khel Sangathan</p>
                <p className='hover:text-[#F48634] cursor-pointer'>Khel Sangathan</p>
                <p className='hover:text-[#F48634] cursor-pointer'>Khel Sangathan</p>
                <p className='hover:text-[#F48634] cursor-pointer'>Khel Sangathan</p>
                <p className='hover:text-[#F48634] cursor-pointer'>Khel Sangathan</p>
                <p className='hover:text-[#F48634] cursor-pointer'>Khel Sangathan</p>
                </div>

            </div>
            <div className='md:w-1/3 w-full'>
            <span className='font-nato text-xl uppercase py-4 flex flex-col gap-4'> <span> Having Questions ?</span>  <span className='w-16 h-[0.09rem] bg-white'>{""}</span></span>  
                <div className='text-gray-200 flex flex-col gap-3'>
                    <div className='flex items-start'>
                        <GoLocation className='mr-4 mt-1' /> <span>	479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India</span>
                    </div>
                    <div className='flex items-center'>
                        <IoCall className='mr-4'/> <span> (+91) 70152 - 95025</span>
                    </div>
                    <div className='flex items-center'>
                        <GrMail className='mr-4'/> <span><a href="mailto:someone@example.com">support@simmifoundation.org</a></span>

                    </div>
                </div>

            </div>

        </div>
        <div className='items-center flex flex-col  mt-5 gap-2 text-center'>
            <div  className='flex gap-2 '>
                <div className='w-14'> <img src="/assets/images/logo.png" alt="" /> </div>
                <div className='w-14'> <img src="/assets/images/niti.png" alt="" /> </div>
            </div>

                <div>
                    <p>Our Registration number : 085953/2020 </p>
                    <p> Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148</p>
                </div>
                <span>Copyright ©2022 All rights reserved | Simmi Foundation </span> 
        </div>
    </div>
  )
}

export default Footer