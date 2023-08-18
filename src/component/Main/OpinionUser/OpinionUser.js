import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { AiOutlineLine } from 'react-icons/ai'
import userLogo from './logoUser.svg'
import './OpinionUser.css'

import personImg from './personImg.svg'
import rightLogo from './smallLogo.svg'
import leftLogo from './smallLogoleft.svg'





export default function OpinionUser() {
    const [countSlide, setCountSlide] = useState(3)



    useEffect(() => {
        let widthOfWin = window.innerWidth

        if (widthOfWin < 1200 && widthOfWin > 996) {
            setCountSlide(3)
        } else if (widthOfWin < 996 && widthOfWin > 769) {
            setCountSlide(2)
        } else if (widthOfWin < 769) {
            setCountSlide(1)
        }
        console.log(countSlide, widthOfWin);
        //Todo  fix count of slider
    }, [])

    return (
        <div className='OpinionUsers'>
            <p className='top_logo'><img src={userLogo} alt='userLogo' /></p>


            <div className='boxSlider'>
                <div className='box_right'>
                    <p className='title'> <AiOutlineLine className='logo' /> نظرات کاربران<AiOutlineLine className='logo' /></p>
                </div>

                <div className='box_left'>
                    <Swiper
                        rewind={true}
                        slidesPerView={4}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className='opinion_content'>
                                <img className='img_user' loading='lazy' src={personImg} alt='img_1' />
                                <div className='opinion_body'>
                                    <h4 className='body_title'>احسان امانیان</h4>
                                    <p className='rightLogo'><img src={rightLogo} alt='rightLogo' /></p>
                                    <p className='opinion'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                                    <p className='leftLogo'><img src={leftLogo} alt='leftLogo' /></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='opinion_content'>
                                <img className='img_user' loading='lazy' src={personImg} alt='img_1' />
                                <div className='opinion_body'>
                                    <h4 className='body_title'>احسان امانیان</h4>
                                    <p className='rightLogo'><img src={rightLogo} alt='rightLogo' /></p>
                                    <p className='opinion'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                                    <p className='leftLogo'><img src={leftLogo} alt='leftLogo' /></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='opinion_content'>
                                <img className='img_user' loading='lazy' src={personImg} alt='img_1' />
                                <div className='opinion_body'>
                                    <h4 className='body_title'>احسان امانیان</h4>
                                    <p className='rightLogo'><img src={rightLogo} alt='rightLogo' /></p>
                                    <p className='opinion'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                                    <p className='leftLogo'><img src={leftLogo} alt='leftLogo' /></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='opinion_content'>
                                <img className='img_user' loading='lazy' src={personImg} alt='img_1' />
                                <div className='opinion_body'>
                                    <h4 className='body_title'>احسان امانیان</h4>
                                    <p className='rightLogo'><img src={rightLogo} alt='rightLogo' /></p>
                                    <p className='opinion'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                                    <p className='leftLogo'><img src={leftLogo} alt='leftLogo' /></p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
