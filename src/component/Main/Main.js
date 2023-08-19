import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import './Main.css'
import SliderBrands from './SliderBrands'
import EmailBox from './EmailBox'
import srcLogo from './location.svg'
import ArticleSlider from './ArticleSlider/ArticleSlider'
import Installtext from './Installtext'
import PropMainWpSlider from './PropMainWpSlider/PropMainWpSlider'
import OpinionUser from './OpinionUser/OpinionUser'
import RelationPart from './relationPart/RelationPart'
import HowCan from './HowCan/HowCan'

export default function Main() {
    return (
        <div className='main_content'>
            <HowCan />
            <RelationPart />
            <OpinionUser />
            <PropMainWpSlider />
            <Installtext />
            <ArticleSlider />
            <EmailBox />
            <img src={srcLogo} alt='cupLogo' className='img_location' />
            <h3 className='title_brand'><AiOutlineLine className='logo' /><span className='green_text'>برند هایی </span> که از افزونه مین وردپرس استفاده می کنند<AiOutlineLine className='logo' /></h3>
            <SliderBrands />
        </div>
    )
}
