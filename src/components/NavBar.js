import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../cover.png'


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto " >
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#">About me </Nav.Link>
                            <Nav.Link href="#">Services  </Nav.Link>
                            <Nav.Link href="#">Protflio  </Nav.Link>
                            <Nav.Link href="#">How Work   </Nav.Link>
                            <Nav.Link href="#">Contacts   </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar

