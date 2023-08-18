import React from 'react'
import './RelationPart.css'
import { AiOutlineLine } from 'react-icons/ai'
import { Button } from 'react-bootstrap'

import youtube from './youtube.svg'

export default function RelationPart() {
    return (
        <>
            <p className='relation_logo'><img src={youtube} alt='youTube' /></p>
            <div className='relation'>
                <h3 className='relation_title'>
                    بیش از 1000 آژانس ، توسعه دهنده و فریلنسر به مین وردپرس برای مدیریت بیش
                    از 500.000 سایت وردپس استفاده کردند  </h3>
                <Button className='relation_btn'>همین الان نصب کن</Button>
            </div>
        </>

    )
}
