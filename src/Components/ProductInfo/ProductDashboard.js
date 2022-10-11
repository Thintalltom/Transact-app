import React from 'react'
import Productinfo from './Productinfo'
import {Link} from 'react-router-dom'
import {Container, Button} from 'react-bootstrap'
import './Productlist.css'
const ProductDashboard = ( {todos, setTodos}) => {
  return (
    <Container>
         
         <Productinfo todos ={todos} setTodos ={setTodos} />
    </Container>
  )
}

export default ProductDashboard