import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import { AiOutlineLine } from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// custom css
import './PropMainWpSlider.css'

import cupLogo from './cup.svg'

//src of images
import img1 from './img1.svg'
import img2 from './img2.svg'
import img3 from './img3.svg'
import img4 from './img4.svg'



export default function PropMainWpSlider() {


    const [countSlide, setCountSlide] = useState(4)

    useEffect(() => {
        let widthOfWin = window.innerWidth

        if (widthOfWin < 996 && widthOfWin > 769) {
            setCountSlide(3)
        } else if (widthOfWin < 590) {
            setCountSlide(2)
        }
    }, [])



    return (
        <div className='prop_mainWp'>
            <h3 className='title_brand'><AiOutlineLine className='logo' /><span className='green_text'> ویژگی های </span>افزونه مین وردپرس<AiOutlineLine className='logo' /></h3>
            <img src={cupLogo} className='logo_cup' alt='cup' />
            <Swiper
                rewind={true}
                slidesPerView={countSlide}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    },
                }}
                modules={[Pagination]}
                className="mySwiper">

                <SwiperSlide className='itemOfProps'>
                    <div className='article_content'>
                        <img className='article_header' loading='lazy' src={img1} alt='img_1' />
                        <div className='article_body'>
                            <h4 className='body_title'> دسترسی آسان به میدیرت سایت</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک استلورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itemOfProps'>
                    <div className='article_content'>
                        <img className='article_header' loading='lazy' src={img2} alt='img_1' />
                        <div className='article_body'>
                            <h4 className='body_title'>امنیت بسیار بالا</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک استلورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itemOfProps'>
                    <div className='article_content'>
                        <img className='article_header' loading='lazy' src={img3} alt='img_1' />
                        <div className='article_body'>
                            <h4 className='body_title'>بروزرسانی های مکرر </h4>
                            <p>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک استلورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itemOfProps'>
                    <div className='article_content'>
                        <img className='article_header' loading='lazy' src={img4} alt='img_1' />
                        <div className='article_body'>
                            <h4 className='body_title'> مدیریت تمامی اطلاعات با یک
                                پیشخوان</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک استلورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itemOfProps'>
                    <div className='article_content'>
                        <img className='article_header' loading='lazy' src={img4} alt='img_1' />
                        <div className='article_body'>
                            <h4 className='body_title'> مدیریت تمامی اطلاعات با یک
                                پیشخوان</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک استلورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
