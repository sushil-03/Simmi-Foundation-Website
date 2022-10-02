import React from 'react'
import {ImLocation2} from "react-icons/im"
import {HiClock} from "react-icons/hi"
import {FaCalendarAlt} from "react-icons/fa"
import {ImArrowRight2} from "react-icons/im"
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const Events = () => {
    const countInfo=[{
        count:10,
        identity:"Countries",
        color:"#F8702E",
    },{
        count:150,
        identity:"Projects",
        color:"#FA8E3E"   ,
    },{
        count:10000,
        identity:"Volunteers",
        color:"#F8A83B"   
    },{
        count:20,
        identity:"States",
        color:"#F8A83B"   
    },{
        count:500000,
        identity:"BENIFICIRIES",
        color:"#F8702E"
    }]
    const eventInfo=[
        {
        image:"e1.jpg",
        title:"Marathon Event",
        location:"Delhi",
        timing:"22:25:00 - 23:25:00",
        date:"2020-07-09",
        detail:"Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee "
    },
    {
        image:"e2.jpg",
        title:"Event-Til",
        location:"India",
        timing:"02:13:00 - 02:43:00",
        date:"2021-06-30",
        detail:"event-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-desc"
    }
    ,
    {
        image:"e3.jpg",
        title:'"Know your hear better" By Dr. Rahul Katariya',
        location:"India",
        timing:"16:00:00 - 17:00:00",
        date:"2021-12-13",
        detail:`"Know your heart better" Catch Dr. Rahul Katariya speak live on the topic cardiac pain on SIMMI foundation's official instagram handle. Link : https://instagram.com/simmifoundation/ #simmifounda"`
    },
    {
        image:"e4.jpg",
        title:"Coronavirus and the country",
        location:"Instagram",
        timing:"15:00:00 - 15:30:00",
        date:"2022-01-17",
        detail:"The SIMMI FOUNDATION introduces Dr. Arnab Mandal! Dr. Mandal is an MBBS gold-medallist from RG Kar Medical College and is currently working as a house physician at the department of pediatrics in RG"
    }
    ,
    {
        image:"e5.jpg",
        title:"Development and empowerment",
        location:"Instagram",
        timing:"16:00:00 - 20:01:18",
        date:"2022-01-17",
        detail:"Ms. Poonam Shroti addresses the unaddressed topic of disability and women empowerment, and the true face of rural development in the country"
    }
]
  return (
    <div className='bg-[#212529]   px-10  gap-60 py-10'>
            <p className='font-nato text-5xl font-light p-4 text-center text-[#F48634] py-10'>Current and Upcoming events </p>
        <div className='flex flex-wrap gap-5 justify-around md:flex-row flex-col'>
        {
            eventInfo.map((event,key)=>{
                return (
                <div key={key} className='bg-white md:w-2/6 w-5/6 m-5 rounded-md'>

            <div>
                <img src={`/assets/images/events/${event.image}`} alt="events" className='rounded-tr-md rounded-tl-md' />
            </div>
            <div className='relative pl-5'>
                <div className=' font-light text-gray-600 mb-6'>
                    <div className='p-3'>

                    <span className='text-[#F48634] font-semibold text-2xl'>{event.title}</span>
                    </div>
                <div className='flex  items-center my-2'>
                    <ImLocation2 size={"1rem"}    className='text-[#f48634] mr-2' />
                    <span>{event.location}</span>
                </div>
                <div className='flex gap-5 text-sm mb-3'>
                    <span className='flex items-center' ><HiClock  size={"1rem"} className='text-[#f48634] mr-2'/> {event.timing}</span>
                    <span className='flex items-center' ><FaCalendarAlt  size={"1rem"} className='text-[#f48634] mr-2'/>{event.date}</span>
                </div>
                    <span className='text-sm'>
                    {event.detail}
                    </span>
                </div>
            <p className='text-[#f48634] p-2 font-light flex items-center'>Read More  <ImArrowRight2  size={"1rem"} className='text-[#f48634] ml-2'/></p>
            </div>
        </div>
                );
            })
        }
        
       
        </div>
    <div>

    </div>
 

      <div className='flex flex-wrap gap-5 items-center justify-center mt-5 '>
    {
        countInfo.map((info,key)=>{
            return (
            <div className={`bg-${info.color} text-center` } style={{backgroundColor:info.color,width:"20rem"}}>

                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                        <p className='text-3xl text-white py-2'> {  isVisible ? <CountUp end={info.count}/>:0 } +</p>
                        )}
                    </VisibilitySensor>
                    <p className='text-xl uppercase font-noto'>{info.identity}</p>
            </div>);
        })
    }</div>

    </div>
  )
}

export default Events