import React from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Menu from '../ProtectedRoute/Menu'
const Productinfo = ({todos, setTodos}) => {
    console.log(todos)
  return (
   <Container fluid>
    
      <Container className='productlist'>
      <Link to="/products">
        <Button className='text-end float-end m-4  classProduct'>Add Products</Button>
        </Link> 
            <h6>Product List</h6>
             <Table striped bordered hover size='sm'>
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
                 <td>
                     <Link to="/productCart">
                     <Button>Market Place</Button>
                     </Link>
                 
                 </td>
               </tr>
             </tbody>
              ))}
           </Table>
      
    </Container>
    </Container>

  )
}

export default Productinfo