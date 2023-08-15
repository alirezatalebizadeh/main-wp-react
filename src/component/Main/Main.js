import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import './Main.css'
import SliderBrands from './SliderBrands'

export default function Main() {
    return (
        <div className='main_content'>
            <h3 className='title_brand'>
                <AiOutlineLine className='logo' />
                <span className='green_text'>برند هایی </span>   که از افزونه مین وردپرس استفاده می کنند
                <AiOutlineLine className='logo' /></h3>
            <SliderBrands />
        </div>
    )
}
