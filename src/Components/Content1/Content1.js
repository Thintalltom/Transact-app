import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Phone from '../../Pictures/Phone.png'
import './Content1.css'
const Content1 = () => {
  return (
    <Container className="firstContainer">
        <Container className='d-flex gap-5 contentHolder'>
            <div>
            <h1 className='heading'>Sell and Buy Faster inter Personally bringing buyers </h1>
            <p className='text'>Connect your products: bringing customers to the outpouring of buyers 
            making sure the vulnerability of the products are well held
            </p>
            <div className='d-flex gap-5'> 
            <Button className='btn-dark fw-1 sell'> Sell Now</Button>
            <Button className='bg-white text-dark border-white fw-1 sell'> Sell Now</Button>
            </div>
            </div>

            <div>
                <img src={Phone} className="w-75" />
            </div>
        </Container>
        
    </Container>
  )
}

export default Content1