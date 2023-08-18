import React from 'react'
import logo from './barg.svg'
import { Button } from 'react-bootstrap'
import { AiOutlineLine, AiOutlineArrowLeft } from 'react-icons/ai'
import './Installtext.css'









export default function Installtext() {
    return (
        <div className='install_part'>
            <img src={logo} alt='flower' />
            <div className='install_txt'>
                <h6>هیمن الان افزونه مین وردپرس رو نصب کن تا از ویژگی های رایگان اون بتونی استفاده کنی</h6>
                <p><AiOutlineLine className='logo' /><Button className='btn_install'>همین الان نصب کن </Button><AiOutlineLine className='logo' /></p>
            </div>
        </div>
    )
}
