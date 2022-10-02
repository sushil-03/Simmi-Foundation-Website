import React from 'react'
import { EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
const Carousel = () => {
    const images=["/banner1.jpg","/banner2.jpg","/banner3.jpg"]
  return (
    <div className='h-2/5 bg-contain object-cover'>
 <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,EffectFade]}
        className="mySwiper"
        effect="fade"
      >
      {images.map((i,key) => {
        return <SwiperSlide key={key}>
            <img src={`./assets/images/homeScreen`+i} alt="banner" className='w-full h-3/5 ' />
        </SwiperSlide>;
      })}
      </Swiper>

    </div>
  )
}

export default Carousel
