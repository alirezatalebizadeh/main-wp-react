import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { BsClock, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineLine, AiOutlineArrowLeft } from 'react-icons/ai'
import headerLogo from './heart_logo.svg'
import img1 from './article_img.svg'
import img2 from './article_img1.svg'
import img3 from './article_img2.svg'
//custom css
import './ArticleSlider.css'



export default function ArticleSlider() {
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
        <div className='article_part'>
            <img className='heart_logo' loading='lazy' src={headerLogo} alt='header_logo' />
            <h3 className='title_brand'><AiOutlineLine className='logo logo_black' /><span className='green_text'> مقالات </span> ما<AiOutlineLine className='logo logo_black' /></h3>
            <div className='slider_article'>
                <Swiper
                    rewind={true}
                    slidesPerView={countSlide}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='box_article'>
                            <span className='article_btn'> <AiOutlineArrowLeft className='icon_btn' /></span>
                            <div className='article_content'>
                                <img className='article_header_img' loading='lazy' src={img1} alt='img_1' />
                                <div className='article_body'>
                                    <h4 className='body_title'>کاربرد افزونه مین وردپرس</h4>
                                    <p>ورم ایپسوم متن
                                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                                <div className='article_footer'>
                                    <p><span className='footer_time'>مرداد 15 - 1402</span> <BsClock className='footer_icon' /> </p>
                                    <p><span className='footer_name'>احمد جوادی</span> <BsFillPersonFill className='footer_icon' /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='box_article'>
                            <span className='article_btn'> <AiOutlineArrowLeft className='icon_btn' /></span>
                            <div className='article_content'>
                                <img className='article_header' loading='lazy' src={img2} alt='img_1' />
                                <div className='article_body'>
                                    <h4 className='body_title'>کاربرد افزونه مین وردپرس</h4>
                                    <p>ورم ایپسوم متن
                                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                                <div className='article_footer'>
                                    <p><span className='footer_time'>مرداد 15 - 1402</span> <BsClock className='footer_icon' /> </p>
                                    <p><span className='footer_name'>احمد جوادی</span> <BsFillPersonFill className='footer_icon' /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='box_article'>
                            <span className='article_btn'> <AiOutlineArrowLeft className='icon_btn' /></span>
                            <div className='article_content'>
                                <img className='article_header' loading='lazy' src={img3} alt='img_1' />
                                <div className='article_body'>
                                    <h4 className='body_title'>کاربرد افزونه مین وردپرس</h4>
                                    <p>ورم ایپسوم متن
                                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                                <div className='article_footer'>
                                    <p><span className='footer_time'>مرداد 15 - 1402</span> <BsClock className='footer_icon' /> </p>
                                    <p><span className='footer_name'>احمد جوادی</span> <BsFillPersonFill className='footer_icon' /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='box_article'>
                            <span className='article_btn'> <AiOutlineArrowLeft className='icon_btn' /></span>
                            <div className='article_content'>
                                <img className='article_header' loading='lazy' src={img1} alt='img_1' />
                                <div className='article_body'>
                                    <h4 className='body_title'>کاربرد افزونه مین وردپرس</h4>
                                    <p>ورم ایپسوم متن
                                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                                <div className='article_footer'>
                                    <p><span className='footer_time'>مرداد 15 - 1402</span> <BsClock className='footer_icon' /> </p>
                                    <p><span className='footer_name'>احمد جوادی</span> <BsFillPersonFill className='footer_icon' /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='box_article'>
                            <span className='article_btn'> <AiOutlineArrowLeft className='icon_btn' /></span>
                            <div className='article_content'>
                                <img className='article_header' loading='lazy' src={img3} alt='img_1' />
                                <div className='article_body'>
                                    <h4 className='body_title'>کاربرد افزونه مین وردپرس</h4>
                                    <p>ورم ایپسوم متن
                                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                                <div className='article_footer'>
                                    <p><span className='footer_time'>مرداد 15 - 1402</span> <BsClock className='footer_icon' /> </p>
                                    <p><span className='footer_name'>احمد جوادی</span> <BsFillPersonFill className='footer_icon' /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
