import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// custom css
import './PropMainWpSlider.css'

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
            <Swiper
                rewind={true}
                slidesPerView={countSlide}
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
