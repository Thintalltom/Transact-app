import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Product.css'
import { FiLogOut, FiHome, FiGift, FiCheckCircle, FiSettings } from "react-icons/fi";
const Navsnav = () => {
  return (
    <Container fluid> 
    <Row>
    <div className=' col-auto min-vh-100 bg-dark'>
     
    <ul className=' gap-5 mt-5 mx-3 my-3 justify-coontent-center' >
        <Link to='/' className='text-decoration-none text-dark'>
        <li>
            <a className='nav-link  text-white gap-5'>
             <FiHome />  <span className='mx-1 d-none d-sm-inline'> Home </span> 
            </a>
        </li>
        </Link>

        <Link to='/products' className='text-decoration-none text-dark'>
        <li className='mt-5'>
            <a className='nav-link  text-white'>
           <FiGift /> <span className='mx-1 d-none d-sm-inline'> Products </span> 
            </a>
        </li>
        </Link>

        <Link to='/order' className='text-decoration-none text-dark'>
        <li className='mt-5'>
            <a className='nav-link  text-white'>
           <FiCheckCircle /> <span className='mx-1 d-none d-sm-inline'> Orders </span> 
            </a>
        </li>
        </Link>

        <Link to='/settings' className='text-decoration-none text-dark'>
        <li className='mt-5'>
            <a className='nav-link text-white'>
          <FiSettings />  <span className='mx-1 d-none d-sm-inline'> Settings </span> 
            </a>
        </li>
        </Link>

        <li className='mt-5'>
            <a className='nav-link  text-white'>
               <FiLogOut/> <span className='mx-1 d-none d-sm-inline'> Log Out </span> 
            </a>
        </li>
    </ul>
    </div>    
    </Row>
    </Container>
  )
}

export default Navsnav