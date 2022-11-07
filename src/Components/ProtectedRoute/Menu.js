import React, {useState} from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { Container,  Row, Offcanvas, Navbar, OffcanvasBody, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import Order from './Order'
import infoPicture from '../../Pictures/infoPicture.jpg'
import productPicture from '../../Pictures/productsPicture.jpg'
import { Link } from 'react-router-dom'
import { FiLogOut, FiHome, FiGift, FiCheckCircle, FiSettings } from "react-icons/fi";
import './Product.css'
const Menu = ({ save, handleLogout, user, order, orderInfo, setOrderInfo, setOrder }) => {

  return (
    <>
          {[false].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-3 d-lg-none d-xl-none ">
          <Container fluid>
            <Navbar.Brand href="#">
            {localStorage.getItem('compName') && (
                 <h2> {localStorage.getItem('compName')} </h2> )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='bg-white border-white'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to='/' className='text-decoration-none text-dark'>
                <Nav.Link href="#action1">Home</Nav.Link>
                </Link>
                
                <Link to='/products' className='text-decoration-none text-dark'>
                <Nav.Link href="#action1">Products</Nav.Link>
                </Link>

                <Link to='/order' className='text-decoration-none text-dark'>
                <Nav.Link href="#action1">Order</Nav.Link>
                </Link>

                <Link to='/settings' className='text-decoration-none text-dark'>
                <Nav.Link href="#action1">Settings</Nav.Link>
                </Link>

                <Nav.Link>
                  <Button onClick={handleLogout} className='btn-danger text-white'>
                    Log Out
                  </Button>
                </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}   
   <Container fluid className='d-flex'>
    <Row>
    <div className='col-auto min-vh-100 bg-dark d-none d-lg-block '>
     <div>
     {localStorage.getItem('compName') && (
           <h6 className='text-white pt-4'>{localStorage.getItem('compName')}
           </h6>
           )}
     </div>
     <hr  className='bg-white text-white'/>
    <ul className=' gap-5 mt-5 mx-3 my-3 justify-coontent-center' >
        <Link to='/' className='text-decoration-none text-dark'>
        <li className='text'>
            <a className='nav-link  text-white gap-5'>
             <FiHome />  <span className='mx-1 d-none d-sm-inline'> Home </span> 
            </a>
        </li>
        </Link>

        <Link to='/products' className='text-decoration-none text-dark'>
        <li className='mt-5 text '>
            <a className='nav-link d-flex text-white'>
           <FiGift /> <span className='mx-1 d-none d-sm-inline'>Products </span> 
            </a>
        </li>
        </Link>

        <Link to='/order' className='text-decoration-none text-dark'>
        <li className='mt-5 text'>
            <a className='nav-link  text-white'>
           <FiCheckCircle /> <span className='mx-1 d-none d-sm-inline'> Orders </span> 
            </a>
        </li>
        </Link>

        <Link to='/settings' className='text-decoration-none text-dark'>
        <li className='mt-5 text'>
            <a className='nav-link text-white'>
          <FiSettings />  <span className='mx-1 d-none d-sm-inline'> Settings </span> 
            </a>
        </li>
        </Link>

        <li className='mt-5 text'>
            <a className='nav-link  text-white' onClick={handleLogout}>
             
               <FiLogOut/> <span className='mx-1 d-none d-sm-inline ' >Log Out  </span> 
               
            </a>
        </li>
    </ul>
    </div> 
    </Row>

                
  <Container fluid className='pt-3'>
  <h6 className='text-center'> Welcome: {user.email} </h6>
   <p className='text-center fw-3'>For a more Enjoyable user experience</p>
     <div className='d-flex straighten'>
     <Container>
       <div className='card  productimg border-white'>
         <img src={infoPicture} className='card-img ' />
            <div className='card-body'>
            <Link to="/Merchant" className='text-decoration-none text-dark'>
             <h6 className="card-text">Fill out Your Information
             <span>
                  <MdArrowRightAlt />
             </span>
             </h6>
           </Link>
            </div>
       </div>
     </Container>
     

     <Container>
       <div className='card productimg border-white'>
       <img src={productPicture} className='card-img productimg' />
            <div className='card-body'>
     <Link to='/productDashboard' className='text-decoration-none text-dark'>
       <h6>View your Product List
       <span>
        <MdArrowRightAlt />
        </span>
       </h6>
     </Link>  
            </div>
       </div>
  </Container>
     </div> 
     <Order order={order} orderInfo={orderInfo} setOrderInfo={setOrderInfo}  setOrder ={setOrder} />
  </Container>
  
  </Container>
  </>
  )
}

export default Menu