import React, { useEffect, useState } from 'react'
// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { AiOutlineLine } from 'react-icons/ai'

// !import required modules
import { Navigation } from 'swiper/modules'
// !Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

//!custom css
import './OpinionUser.css'

//! src img
import userLogo from './logoUser.svg'
import personImg from './personImg.svg'
import rightLogo from './smallLogo.svg'
import leftLogo from './smallLogoleft.svg'

export default function OpinionUser () {
  return (
    <div className='OpinionUsers'>
      <p className='top_logo'>
        <img src={userLogo} alt='userLogo' />
      </p>

      <div className='boxSlider'>
        <div className='box_right'>
          <p className='title'>
            <AiOutlineLine className='logo' /> نظرات کاربران
            <AiOutlineLine className='logo' />
          </p>
        </div>
        <div className='box_left'>
          <div className='slider_article'>
            <Swiper
              rewind={true}
              navigation={true}
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
                  spaceBetween: 10
                }
              }}
              modules={[Navigation]}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='opinion_content'>
                  <img
                    className='img_user'
                    loading='lazy'
                    src={personImg}
                    alt='img_1'
                  />
                  <div className='opinion_body'>
                    <h4 className='body_title'>احسان امانیان</h4>
                    <p className='rightLogo'>
                      <img src={rightLogo} alt='rightLogo' />
                    </p>
                    <p className='opinion'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p className='leftLogo'>
                      <img src={leftLogo} alt='leftLogo' />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='opinion_content'>
                  <img
                    className='img_user'
                    loading='lazy'
                    src={personImg}
                    alt='img_1'
                  />
                  <div className='opinion_body'>
                    <h4 className='body_title'>احسان امانیان</h4>
                    <p className='rightLogo'>
                      <img src={rightLogo} alt='rightLogo' />
                    </p>
                    <p className='opinion'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p className='leftLogo'>
                      <img src={leftLogo} alt='leftLogo' />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='opinion_content'>
                  <img
                    className='img_user'
                    loading='lazy'
                    src={personImg}
                    alt='img_1'
                  />
                  <div className='opinion_body'>
                    <h4 className='body_title'>احسان امانیان</h4>
                    <p className='rightLogo'>
                      <img src={rightLogo} alt='rightLogo' />
                    </p>
                    <p className='opinion'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p className='leftLogo'>
                      <img src={leftLogo} alt='leftLogo' />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='opinion_content'>
                  <img
                    className='img_user'
                    loading='lazy'
                    src={personImg}
                    alt='img_1'
                  />
                  <div className='opinion_body'>
                    <h4 className='body_title'>احسان امانیان</h4>
                    <p className='rightLogo'>
                      <img src={rightLogo} alt='rightLogo' />
                    </p>
                    <p className='opinion'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p className='leftLogo'>
                      <img src={leftLogo} alt='leftLogo' />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='opinion_content'>
                  <img
                    className='img_user'
                    loading='lazy'
                    src={personImg}
                    alt='img_1'
                  />
                  <div className='opinion_body'>
                    <h4 className='body_title'>احسان امانیان</h4>
                    <p className='rightLogo'>
                      <img src={rightLogo} alt='rightLogo' />
                    </p>
                    <p className='opinion'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p className='leftLogo'>
                      <img src={leftLogo} alt='leftLogo' />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='opinion_content'>
                  <img
                    className='img_user'
                    loading='lazy'
                    src={personImg}
                    alt='img_1'
                  />
                  <div className='opinion_body'>
                    <h4 className='body_title'>احسان امانیان</h4>
                    <p className='rightLogo'>
                      <img src={rightLogo} alt='rightLogo' />
                    </p>
                    <p className='opinion'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p className='leftLogo'>
                      <img src={leftLogo} alt='leftLogo' />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <Swiper
rewind={true}
slidesPerView={countSlide}
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
</Swiper> */
}
