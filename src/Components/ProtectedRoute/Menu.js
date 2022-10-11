import React from 'react'
import {FiPackage,
    FiCheckSquare,
    FiSettings
} from 'react-icons/fi'
import { Container, Offcanvas ,  Navbar, Nav, Button } from 'react-bootstrap'
import Logo from '../../Pictures/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext';
import Order from './Order'
import Product from './Product'
const Menu = ({product, setProduct, setPrice, save, todos, setTodos, description, setDescription, price }) => {
    let { logout, user } = useUserAuth();
    const handleLogout = async  () => {
        try {
            return logout()
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
   <Container fluid >
            {[false].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
            {save.map((infor) => 
                (
                  <h2>{infor.companyname}</h2>
                ))}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bg-white border-white" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {save.map((infor) => 
                (
                  <h2> Hi, {infor.companyname}</h2>
                ))}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  </Link>
                  
                  <Link to="/products">
                  <Nav.Link href="#action1">Products</Nav.Link>
                  </Link>

                  <Link to="/order">
                  <Nav.Link href="#action1">Order</Nav.Link>
                  </Link>

                  <Link to="/settings">
                  <Nav.Link href="#action1">Settings</Nav.Link>
                  </Link>

                  <Button onClick={handleLogout}>Log out</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
                 <h6 className='text-center'> Welcome: {user.email} </h6>
   </Container>
  )
}

export default Menu