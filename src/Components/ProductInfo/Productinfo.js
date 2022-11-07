import React from 'react'
import { Table, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import { MdClear, MdLocalGroceryStore, MdAdd } from "react-icons/md";

import './ProductCart.css'
const Productinfo = ({todos, setTodos}) => {
 
  return (
  
      <Container className='productlist'>
        <Link to="/products">
        <Button className='text-end float-end m-4  classProduct btn-dark' variant='outlined' color='error'> <MdAdd /> Add Products</Button>
        </Link> 
             <Table striped bordered hover size='sm' className='tableau'>
             <thead>
               <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Description</th>
                 <th>Price</th>
                 <th>Image</th>
               </tr>
             </thead>
             {todos.map((todo) => (
             <tbody>
               <tr>
                 <td>{todo.id}</td>
                 <td>{todo.name}</td>
                 <td>{todo.description}</td>
                 <td>{todo.price}</td>
                <td>{todo.image}</td>
                 <td >
                   <div className='d-flex'>
                   <Link to="/productCart">
                     <Button className='mkbtn btn-dark'> <MdLocalGroceryStore /></Button>
                     </Link>
                     <Button className='btn-white bg-secondary mkbtn text-dark border-white' onClick={() =>  setTodos(todos.filter((el) =>  el.id !== todo.id)) }>
                     <MdClear />
                     </Button>
                   </div>
                 </td>
               </tr>
             </tbody>
              ))}
           </Table>
      
    </Container>
  

  )
}

export default Productinfo