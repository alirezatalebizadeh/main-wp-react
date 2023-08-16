import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineLine } from 'react-icons/ai'
import './Main.css'
import SliderBrands from './SliderBrands'
import srcLogo from './location.svg'
import lOgoLaptop from './logoLaptop.svg'

export default function Main() {
    return (
        <div className='main_content'>

            <div className='email_box'>
                <img src={lOgoLaptop} className='logo_laptop' />
                <h3 className='title_email'>
                    <AiOutlineLine className='logo_black' />
                    با وارد کردن ایمیل خود ، همین الان از اخبار و بروزرسانی ها با خبر شوید
                    <AiOutlineLine className='logo_black' /></h3>
                <form className='email_form'>
                    <input type='email' className='email_input' />
                    <Button className='btn_email'> ارسال کن</Button>
                </form>
            </div>


            <img src={srcLogo} className='img_location' />
            <h3 className='title_brand'>
                <AiOutlineLine className='logo' />
                <span className='green_text'>برند هایی </span> که از افزونه مین وردپرس استفاده می کنند
                <AiOutlineLine className='logo' /></h3>

            <SliderBrands />
        </div>
    )
}
