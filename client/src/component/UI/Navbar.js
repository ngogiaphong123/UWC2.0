import React from "react";
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import './style/Navbar.css';
import { FiSend } from "react-icons/fi";

export default function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light" sticky='top' key='sm'>
            <Container className='nv-container'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">
                    <div className='logo'>
                        <FontAwesomeIcon icon={faTruckFast} className='logo-icon'></FontAwesomeIcon>
                        URBAN WASTE <br /> COLLECTION <br /> AID - UWC 2.0
                    </div>
                </Navbar.Brand>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                            LOGO
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Trang chủ</Nav.Link>
                            {/* <Nav.Link href="#action2">Về Chúng tôi</Nav.Link> */}
                            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                            {/* <NavDropdown
                                title="Danh mục"
                                id={`offcanvasNavbarDropdown-expand-xl`}
                            >
                                <NavDropdown.Item href="#Food">Đồ ăn</NavDropdown.Item>
                                <NavDropdown.Item href="#Drink">
                                    Đồ uống
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className='btn-gr'>
                    <Button variant="light" href="/chat" className="chat__btn"><FiSend/></Button>
                    <Button className="login__btn">Đăng nhập</Button>
                </div>
            </Container>
        </Navbar>
    );
}