import React from 'react'
import Productinfo from './Productinfo'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { FiArrowLeft } from "react-icons/fi";

import './Productlist.css'
const ProductDashboard = ( {todos, setTodos}) => {
  return (
    <Container fluid>
      <div className='d-flex gap-3 mt-2 bg-warning p-2'>
      <Link to={'/dashboard'} className='text-decoration-none'>
     <FiArrowLeft /> 
      </Link>
      <h6>Product List</h6>
      </div>
         <Productinfo todos ={todos} setTodos ={setTodos} />
    </Container>
  )
}

export default ProductDashboard