import React, { useEffect, useRef, useState } from 'react'
import './HowCan.css'
import { AiOutlineLine } from 'react-icons/ai'
import { BsFillCircleFill, BsFillPlayCircleFill } from 'react-icons/bs'










export default function HowCan() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showPlayIcon, setShowPlayIcon] = useState(true)
    let myVideo = useRef()


    useEffect(() => {
        console.log(myVideo.current)
    }, [isPlaying])


    const showVideo = () => {
        // if (!isPlaying) {
        //     setShowPlayIcon(false)
        //     setIsPlaying(true)
        //     myVideo.current.play()
        // } else {
        //     setShowPlayIcon(true)
        //     setIsPlaying(false)
        //     myVideo.current.pause()
        // }
        myVideo.current.play()

        // TODO 
    }

    
    return (
        <div className='howCan'>
            <h3 className='title_brand'><AiOutlineLine className='logo' />چگونه افزونه <span className='green_text'> مین وردپرس </span> را نصب کنم<AiOutlineLine className='logo' /></h3>

            <div className='howCan_bottom'>
                <div className='howCan_right'>
                    <ul>
                        <li><BsFillCircleFill className='logo_circle' />1. <span className='txt_green'>سایت جدیدی</span> بسازید و افزونه را دانلود کنید</li>
                        <li><BsFillCircleFill className='logo_circle' />2.  افزونه  <span className='txt_green'>مین وردپرس بچه</span>  را در تمامی سایت هایتان نصب کنید </li>
                        <li><BsFillCircleFill className='logo_circle' />3.تمامی سایت های  موردنظر را به <span className='txt_green'>داشبورد مین وردپرس </span>    خود متصل کنید</li>
                    </ul>
                </div>
                <div className='howCan_left'>
                    {showPlayIcon ? <BsFillPlayCircleFill onClick={showVideo} className='play_vid' /> : ''}
                    <video controls ref={myVideo}>
                        <source src='https://aspb2.cdn.asset.aparat.com/aparat-video/ea382f28b6c7df7a5b2ef42b5a497af36344543-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijc0NmViYmU4MDlkMjQyZjg2OWEyZDBjNGVkNTdmYmZmIiwiZXhwIjoxNjkyNDI0MDIyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.3AEdVJQziJ3G2SLvbDGsttjXUkuE55KAXxPGArgYZ-o' />
                    </video>
                </div>
            </div>
        </div>
    )
}
