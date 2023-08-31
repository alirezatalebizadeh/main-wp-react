import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination } from 'swiper/modules'
import { AiOutlineLine } from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// custom css
import './PropMainWpSlider.css'
import PropItem from './PropItem'

//src of images
import cupLogo from './cup.svg'
import img1 from './img1.svg'
import img2 from './img2.svg'
import img3 from './img3.svg'
import img4 from './img4.svg'

export default function PropMainWpSlider () {
  return (
    <>
      <div className='prop_mainWp'>
        <h3 className='title_brand'>
          <AiOutlineLine className='logo' />
          <span className='green_text'> ویژگی های </span>افزونه مین وردپرس
          <AiOutlineLine className='logo' />
        </h3>
        <img src={cupLogo} className='logo_cup' alt='cup' />
        <Swiper
        //   slidesPerView={4}
        //   spaceBetween={20}
          modules={[Pagination]}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }}
          spaceBetween={10}
          className='mySwiper'
        >
          <SwiperSlide>
            {' '}
            <PropItem title='دسترسی آسان به مدیریت سایت ' img={img1} />
          </SwiperSlide>

          <SwiperSlide>
            <PropItem title='امنیت بسیار بالا' img={img2} />
          </SwiperSlide>

          <SwiperSlide>
            <PropItem title='بروزرسانی های مکرر ' img={img3} />
          </SwiperSlide>

          <SwiperSlide>
            <PropItem title='مدیریت تمامی اطلاعات با یک پیشخوان ' img={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <PropItem title='امنیت بسیار بالا' img={img2} />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <PropItem title='دسترسی آسان به مدیریت سایت ' img={img1} />
          </SwiperSlide>

          <SwiperSlide>
            <PropItem title='امنیت بسیار بالا' img={img2} />
          </SwiperSlide>

          <SwiperSlide>
            <PropItem title='بروزرسانی های مکرر ' img={img3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
