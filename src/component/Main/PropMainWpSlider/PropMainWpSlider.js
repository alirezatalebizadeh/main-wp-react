import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import { AiOutlineLine } from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// custom css
import './PropMainWpSlider.css'
import PropItem from './PropItem';

//src of images
import cupLogo from './cup.svg'
import img1 from './img1.svg'
import img2 from './img2.svg'
import img3 from './img3.svg'
import img4 from './img4.svg'



export default function PropMainWpSlider() {

    const [countSlide, setCountSlide] = useState(4)


    useEffect(() => {
        let widthOfWin = window.innerWidth

        if (widthOfWin < 1000) {
            setCountSlide(3)
        } else if (widthOfWin < 777) {
            setCountSlide(2)
        } else if (widthOfWin < 550) {
            setCountSlide(1)
        }
        //TODO
    })


    return (
        <>
            <div className='prop_mainWp'>
                <h3 className='title_brand'><AiOutlineLine className='logo' /><span className='green_text'> ویژگی های </span>افزونه مین وردپرس<AiOutlineLine className='logo' /></h3>
                <img src={cupLogo} className='logo_cup' alt='cup' />
                <Swiper
                    slidesPerView={countSlide}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={10}
                    className="mySwiper"
                >
                    <SwiperSlide > <PropItem title='دسترسی آسان به میدیرت سایت ' img={img1} /></SwiperSlide>

                    <SwiperSlide><PropItem title='امنیت بسیار بالا' img={img2} /></SwiperSlide>

                    <SwiperSlide ><PropItem title='بروزرسانی های مکرر ' img={img3} /></SwiperSlide>

                    <SwiperSlide ><PropItem title='مدیریت تمامی اطلاعات با یک پیشخوان ' img={img4} /></SwiperSlide>
                    <SwiperSlide ><PropItem title='امنیت بسیار بالا' img={img2} /></SwiperSlide>
                    <SwiperSlide > <PropItem title='دسترسی آسان به میدیرت سایت ' img={img1} /></SwiperSlide>

                    <SwiperSlide><PropItem title='امنیت بسیار بالا' img={img2} /></SwiperSlide>

                    <SwiperSlide ><PropItem title='بروزرسانی های مکرر ' img={img3} /></SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
