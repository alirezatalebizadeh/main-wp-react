import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineLine } from 'react-icons/ai'
import lOgoLaptop from './logoLaptop.svg'

export default function EmailBox() {
    return (
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
    )
}
