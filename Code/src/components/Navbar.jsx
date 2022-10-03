import React,{useState} from 'react'
import {Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
const navList=["Home","About","Donate","Blog","Gallery","Volunteer","Events","Careers","Contact"]
const Navbar = () => {
  const [isClick,setClick]=useState(false);
  return (
    <div className='flex bg-[#212529] text-white  justify-around items-center p-4 relative w-screen' >
        
        <div className='flex gap-2 items-center'>
            <span>
                <img src="./assets/images/logo.png" alt="profile"  className='w-10 h-10'/>
                </span>
            <span className='font-bold '>SIMMI FOUNDATION</span>
        </div>
        <div className=' gap-4 md:flex hidden'>
          {
            navList.map((nav,key)=>{
return ( <Link to="/" key={key}> <span className=' border-b-2 border-[#212529]  hover:border-orange-500 transition-all ease-in-out p-1'>{nav}</span>  </Link>)
            })
          }
        </div>
        
        <div className='relative'>
          <GiHamburgerMenu size={"1.5rem"} className="md:hidden  z-40 transition-all ease-in-out" onClick={()=>setClick(true)}/>
        { isClick &&
          <div className=' w-screen  top-0 z-50 bg-black transition-all ease-in-out '>
                <div className='relative'>
                    <span className='cursor-pointer rounded-full w-12 h-12 text-center bg-orange-500  p-3 absolute top-5 left-5 ' onClick={()=>setClick(false)}><AiOutlineClose size={"1.4rem"}/></span>
                </div>
                <div className='flex flex-col gap-2 text-center'>

                {
                  navList.map((nav,key)=>{
                    return (
                      <Link to="/"> <span className='hover:border-b border-orange-500 transition-all ease-in-out p-4 block'>{nav}</span>  </Link>
                    )
                  })
                }
                </div>
            </div>
    
          }
           </div>


    </div>
  )
}

export default Navbar