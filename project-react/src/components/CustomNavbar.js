import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bkg-color-header">
            <Container>
                <Navbar.Brand href="#home" className="text-white fs-1 pb-1 text-uppercase fw-bold prova">Blog ilario cocco</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" className="text-primary" target="_blank">Linkedin</Nav.Link>
                        <Nav.Link href="https://mail.google.com/mail/u/0/#inbox" className="text-danger" target="_blank">Gmail</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;



