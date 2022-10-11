import React from 'react'
import {Card, Button, Container, Row, Col, Tab, Tabs} from 'react-bootstrap'
import './ProductCart.css'
const ProductCart = ({todos, filterProduct, setFilterProduct, save }) => {
    

  return (
    <Container fluid className='p-2'>
      <Container fluid className='storefront'>
      {save.map((info) => {
        <div>
          {info.companyname}
        </div>
      })}

      <div>

      </div>
      </Container>

    <Container>

    
        <Row>
        {todos.map((todo) => (
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={todo.image} />
                <Card.Body>
                  <Card.Title>{todo.name}</Card.Title>
                  <Card.Text>
                    {todo.description}<br />
                    {todo.price}
                  </Card.Text>
                  <Button variant="primary">Order</Button>
                </Card.Body>
              </Card>
              </Col>
        ))}
        </Row>
        </Container>
    </Container>
  )
}

export default ProductCart