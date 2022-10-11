import React from 'react'
import Logo from '../../Pictures/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
const Topbar = () => {
    
  return (
    <Navbar bg="white" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={Logo} className="w-75" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto gap-5 text-dark">
          <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
          <Nav.Link href="#link" className="text-dark">Feature</Nav.Link>
          <Link to="/authForm">
          <Nav.Link href="#link" className="text-dark">Login</Nav.Link>
          </Link>
          
          <Button className="btn-dark">Sell Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Topbar