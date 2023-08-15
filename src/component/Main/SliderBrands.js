import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './SliderBrands.css'



export default function SliderBrands() {

    return (
        <div className='slider_brand'>
            <Swiper
                rewind={true}
                slidesPerView={6}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>Appstore</SwiperSlide>
                <SwiperSlide>JonInja</SwiperSlide>
                <SwiperSlide>Jobvision</SwiperSlide>
                <SwiperSlide>Metavers</SwiperSlide>
                <SwiperSlide>FaceBook</SwiperSlide>
                <SwiperSlide>DigiKala</SwiperSlide>
                <SwiperSlide>Metavers</SwiperSlide>
                <SwiperSlide>FaceBook</SwiperSlide>
                <SwiperSlide>DigiKala</SwiperSlide>
            </Swiper>
        </div>
    )
}
