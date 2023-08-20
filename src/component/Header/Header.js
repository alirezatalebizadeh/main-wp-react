import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { BsArrowDownCircleFill } from "react-icons/bs";

import './Header.css'
import skiLogo from './logo_left.svg'


export default function Header() {
    return (
        <>
            <div className='header'>
                {/* <Navbar className="bg-body-tertiary">
                    <Container>
                       
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Brand href="#"></Navbar.Brand>
                    </Container>
                </Navbar> */}

                <Navbar expand='md' className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#"> <Button className='btn_account'>حساب کاربری</Button></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="#action2">تماس با ما</Nav.Link>
                                    <Nav.Link href="#action2">ویژگی های Min Wp</Nav.Link>
                                    <Nav.Link href="#action2">نصب Min Wp</Nav.Link>
                                    <Nav.Link href="#action2">چیست Min Wp</Nav.Link>
                                    <Nav.Link href="#action1">صفحه اصلی </Nav.Link>
                                </Nav>
                                <Navbar.Brand className="justify-content-end flex-grow-1 pe-3" href="#"><span className='txt_green'>Main</span> Wp</Navbar.Brand>
                            </Offcanvas.Body>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                    بستن صفحه
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                        </Navbar.Offcanvas>
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

