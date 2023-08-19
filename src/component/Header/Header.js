import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { BsArrowDownCircleFill } from "react-icons/bs";

import './Header.css'
import skiLogo from './logo_left.svg'


export default function Header() {
    return (
        <>
            <div className='header'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Button className='btn_account'>حساب کاربری</Button>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className=" my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">صفحه اصلی </Nav.Link>
                                <Nav.Link href="#action2">چیست Min Wp</Nav.Link>
                                <Nav.Link href="#action2">نصب Min Wp</Nav.Link>
                                <Nav.Link href="#action2">ویژگی های Min Wp</Nav.Link>
                                <Nav.Link href="#action2">تماس با ما</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                        <Navbar.Brand href="#">Main Wp</Navbar.Brand>

                    </Container>
                </Navbar>

                <div className='header_bottom'>
                    <div className='left_header'>
                        <img src={skiLogo} alt='skiImage' />
                    </div>
                    <div className='right_header'>
                        <h2>چندین سایت رو همزمان کنترل کن</h2>
                        <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        <Button className='btn_header'>همین الان نصب کن</Button>
                        <form action='#' className='form_search'>
                            <input type='text' placeholder='دنبال چی میگردی؟' />
                            <Button className='btn_form'>جستجو کن</Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='clip_Path'></div>
            <div className='parent_icon'> <BsArrowDownCircleFill className='arrow_bottom_icon' /></div>
        </>
    )
}

