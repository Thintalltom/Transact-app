import React from 'react'
import {Container, Table, Button} from 'react-bootstrap'
import { MdClear } from "react-icons/md";
import './Product.css'
import {Link} from 'react-router-dom'
const Order = ({order,  setOrder, orderInfo, setOrderInfo}) => {
  const deleteItem = (ind) => {
    return setOrder(
      order.filter((order, i) => {
        return i !== ind;
       })
      );
  }


  return (
   <Container className=' tableauhold'>
       <h3 className='text-dark'>Orders</h3>

       
         
                      <div  className='row gap-5'>
                        <Table>
                        <thead>
                              <tr>
                              <th>#</th>
                                <th>Customer Name</th>
                               <th>Customer Address</th>
                               <th>Customer Number</th>
                               <th>Order</th>
                             
                             </tr>
                         </thead>
                      
                      {order.map((order, ind) => (
                      < tbody className='col' key={order.id}>
                             <tr>
                              <td>{order.id}</td>
                              <td>{order.customerName}</td>
                              <td>{order.customerAddress}</td>
                              <td>{order.customerNumber}</td>
                            

                        
                        {order.arr.map((order, ind) => (
                                 <tr>
                                  <td> Name: {order.name} <br />
                                 Quantity: {order.quant}<br />
                                  Price: {order.price}
                                  </td>
                                </tr>

                        ))}
                      </tr>
                      </tbody>
                      ))}
                      </Table>
                    </div>
           
           
        
 

   </Container>
  )
}

export default Order