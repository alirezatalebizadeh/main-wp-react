import React from 'react'
import Container from 'react-bootstrap/Container';
import { AiOutlineMinus, AiFillHome, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BiSolidPhoneCall, BiMessageAltDetail } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import './Footer.css'






export default function Footer() {
    return (
        <div className=' footer'>
            <div className='line'></div>
            <div className='footer_top'>
                <ul className='my_menu'>
                    <h3>توسعه دهندگان</h3>
                    <li className='menu_item'><a href='#'>مشارکت در MainWp</a></li>
                    <li className='menu_item'><a href='#'>  توسعه دهندگان MainWp</a></li>
                    <li className='menu_item'><a href='#'>MainWp Github</a></li>
                    <li className='menu_item'><a href='#'> کارشناسانMainWp </a></li>
                </ul>
                <ul className='my_menu'>
                    <h3>توصیه های ما</h3>
                    <li className='menu_item'><a href='#'>ManageWP در مقابل MainWP</a></li>
                    <li className='menu_item'><a href='#'>WPRmote در مقابل MainWP</a></li>
                    <li className='menu_item'><a href='#'>InfiniteWP در مقابل MainWP</a></li>
                    <li className='menu_item'><a href='#'>تخفیف های استثنایی</a></li>
                    <li className='menu_item'><a href='#'>مشارکت کنندگان</a></li>
                </ul>
                <ul className='my_menu'>
                    <h3>ارتباط با ما</h3>
                    <li className='menu_item'><AiFillHome className='logo' /> <a href='#'>ایران - تهران - خیابان تهران پارس
                        - کوچه شهید بهشتی- پلاک 11</a></li>
                    <li className='menu_item'><BiSolidPhoneCall className='logo' /> <a href='#'>09331809897 - 09158725876</a></li>
                    <li className='menu_item'><IoMdMail className='logo' /> <a href='#'>Example@yahoo.com</a></li>
                </ul>
                <div className='logo_sotials my_menu'>
                    <div>
                        <h3>شبکه های اجتماعی</h3>
                        <ul className='sotioal'>
                            <li><a href='#'><BsFacebook /></a></li>
                            <li><a href='#'><AiFillInstagram /></a></li>
                            <li><a href='#'><AiFillTwitterCircle /></a></li>
                            <li><a href='#'><BiMessageAltDetail /></a></li>
                        </ul>
                    </div>
                    <div className='sub_sotial'>
                        <h3>نماد های ما</h3>
                        <ul className='logos'>
                            <li><a href='#'><img src='images/logo1.png' /></a></li>
                            <li><a href='#'><img src='images/logo3.png' /></a></li>
                            <li><a href='#'><img src='images/logo2.png' /></a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='line'></div>
            <div className='footer_bottom'>
                <div className='description'>
                    <h3 ><AiOutlineMinus className='logo' /> <span className='green_text'>Main</span>Wp <AiOutlineMinus className='logo' /></h3>
                    <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
                <div className='copy'>
                    <p>تمام حقوق مادی و معنوی این سایت برای اولین دیتا محفوظ است</p>
                </div>
            </div>
        </div>
    )
}
