import React from 'react'
import './Footer.css'
import { Container, Button } from 'react-bootstrap'
const Footer = () => {
  return (
<Container fluid className='bg-dark text-center text-white footerContainer'> 
<h1 className='text-white'>Lets Trade P2P</h1>
<p className='text-white'>Set up your business Asap and make your customers max their credit cards</p>
 <Button className='btn-secondary sellNowBtn'>Sell Now</Button>
 <hr  className='bg-white container'/>
 <div className='d-flex container gap-5'>
    <p>transact 2022</p>
    <div className='d-flex gap-3 instruct'>
        <p>Privacy Policy </p>
        <p>Terms of services </p>
    </div>
 </div>
 </Container>
  )
}

export default Footer