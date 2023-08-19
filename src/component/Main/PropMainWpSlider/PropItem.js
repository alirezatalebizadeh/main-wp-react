import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';





export default function PropItem(props) {

    return (
        <div className='prop_Content'>
            <img className='prop_header' loading='lazy' src={props.img} alt='img_1' />
            <div className='prop_body'>
                <h4 className='body_title'> {props.title}</h4>
                <p>لورم ایپسوم متن ساختگی با تولید
                    سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک استلورم
                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با استفاده از طراحان گرافیک است</p>
            </div>
        </div>
    )
}
