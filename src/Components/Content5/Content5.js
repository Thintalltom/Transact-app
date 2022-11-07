import React from 'react'
import {Container, Card, Row, Col} from 'react-bootstrap'
import { Content5List } from './Content5List'
import './Content5.css'
const Content5 = () => {
  return (
   <Container fluid className='pt-5'> 
    <h4 className='text-center text-dark'>Customers review</h4>

<Container>
    <Row className='dflex'>
        {Content5List.map((cont) => (
            <Col>
           <div className='card border-white'>
               <img src={cont.image} className="card-img" />
               <div className='card-body'>
                   <h4 className='card-heading text-center'>{cont.name}</h4>
                    <h6 className='card-text text-center'>{cont.message}</h6>
               </div>

           </div>
            </Col>
        ))}
    </Row>
</Container>
   </Container>
  )
}

export default Content5