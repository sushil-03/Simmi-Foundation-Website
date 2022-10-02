import React from 'react'
import ObjectiveCard from './ObjectiveCard'
const Objective = () => {
  const myObjective=[{
    image:"/education.jpg",
    title:"Education",
    detail:"We provide free academic education, scholarship, training and other incentives to the children.",
    url:""
  },{
    image:"/healthcare.jpg",
    title:"Healthcare",
    detail:"We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.",
    url:""
  },{
    image:"/womenEmp.jpg",
    title:"Women and Youth Empowerment",
    detail:"We focus on providing equal opportunities for women in the work field. ",
    url:""
  },{
    image:"/livelihood.jpg",
    title:"Livelihood",
    detail:"We implement various schemes to provide livelihood and uplift the poor in society.",
    url:""
  },]
  return (
    <div className='pt-5 bg-gray-100'>
            <p className='font-nato text-5xl font-light p-4 text-center'>Objectives</p>
            <div className='flex justify-around pb-5 md:flex-row flex-col items-center '>
                {
                    myObjective.map((object,key)=>{
                       return <ObjectiveCard image={object.image} title={object.title} detail={object.detail} url={object.url} key={key}/>
                    })
                }
            </div>
    </div>
  )
}

export default Objective