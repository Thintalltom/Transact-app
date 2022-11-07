import React from 'react'
import {Card, Container, Badge, Row, Col, Nav, Navbar, Button} from 'react-bootstrap'
import './ProductCart.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
const ProductCart = ({todos, cart,  onAdd }) => {

  const navigate = useNavigate()
  const next = () =>
  {
    if(cart.length === 0){
      return  ('')
    }else{
      navigate('/showcart')
    }
  }
  return (
  <Container fluid>
    <Navbar expand="sm" variant="white" bg="warning" >
        <Container >
          <Navbar.Brand href="#">
          {localStorage.getItem('compName') && (
           <h2 className='text-dark pt-4'>{localStorage.getItem('compName')}
           </h2>
           )}
          </Navbar.Brand>
          <Nav className="d-flex justify-space-between">
          
            <Nav.Link href="#home">
             
          <Button className='float-end m-5' onClick={next} disabled={cart.length === 0}>
               <MdShoppingCart />
                  <span>
                    <Badge>{cart.length} </Badge>
                  </span>
          </Button>
            </Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>
    <Container>

    
        <Row className="Cardtop">
        {todos.map((todo) => (
            <Col className=" cardcard" key={todo.id}>
                <Card style={{ width: '15rem' }} className="border-white cardcontent" >
                <Card.Img variant="top" src={todo.image}/>
                <Card.Body>
                  <Card.Title className="cardtitle">{todo.name}</Card.Title>
                  <Card.Text className="cardtext">
                    {`${todo.description.substring(0,50)}...`}
                    <h6>Price: {todo.price}</h6>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                  <Button className='btn-danger'
                   onClick={() => onAdd(todo)} size="small">Add </Button>
                  <Link to={`/${todo.name}`} className="text-decoration-none">
                  <Button className='btn-warning' size='small'>View</Button>
                  </Link>
                  </div>
                </Card.Body>
              </Card>
              </Col>
        ))}
        </Row>
        </Container>

        <Container fluid className='bg-dark'>
        <div className='container d-flex gap-5 bg-dark text-white p-5 textinffoo'>
          <div className='container'>
            About Us
            <h6>
              Customer support hotline
            </h6>
            {localStorage.getItem('Contact') && (
           <h6>{localStorage.getItem('Contact')}</h6>
         )}
            {localStorage.getItem('Company info') && (
           <h6>{localStorage.getItem('Company info')}</h6>
         )}
          </div>
          <div className='container'>
            Customer support
            {localStorage.getItem('Contact') && (
              <h6>{localStorage.getItem('Contact')}</h6>
            )}

            {localStorage.getItem('Name') && (
              <h6>Store Owner: {localStorage.getItem('Name')}</h6>
            )}

          </div>
          <div className='container'>
           <h6>Terms and conditions </h6> 
            <p> Trade Carefully and abide by the rules of the seller</p>
          </div>
        </div>
        </Container>
    </Container>
  )
}

export default ProductCart