import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { CartWidget } from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'
//import NavDropdown from 'react-bootstrap/NavDropdown'



export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    K'epe Bags
                </Link>
                {/*
                <Navbar.Brand href="#home">
                    K'epe Bags
                </Navbar.Brand>
                */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/category/mochilas">Mochilas</Link>
                        <Link to="/category/totebags">Totebags</Link>
                        <Link to="/category/accesorios">Accesorios</Link>
                        {/*}
                        <Nav.Link href="#features">Mochilas</Nav.Link>
                        <Nav.Link href="#pricing">Totebags</Nav.Link>
                        <Nav.Link href="#pricing">Accesorios</Nav.Link>
                        */}

                        {/*
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        */}
                    </Nav>
                    <Nav>
                        {/*<Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes                        
                        </Nav.Link>
                        */}                     
                    </Nav>                   
                </Navbar.Collapse>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
                
            </Container>
        </Navbar>
    )
}
