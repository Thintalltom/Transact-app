import React,{useState} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import {useNavigate, Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { FiArrowLeft } from "react-icons/fi";
import './ProductCart.css'

const ShowCart = ({ setCart, info ,cart, onAdd, onRemove, order, setOrder, oAddress, opprice, opname, setAddress, setPname, setPprice}) => {
 
 
 const navigate = useNavigate();
 const customerName = (e) => {
   setPname(e.target.value)
 }

 const customerAddress = (e) => {
   setAddress(e.target.value)
 }

 const customerPhoneNumber = (e) => {
   setPprice(e.target.value)
 }
 

  
 
 const totalOrder = (e) => {
   e.preventDefault() 
   setOrder([...order,  { arr:[...cart], customerName: opname, customerAddress: oAddress, customerNumber: opprice, id: Math.random() * 80, date: new Date() }])
    toast.success('Order Successful')
   setAddress("")
    setPprice("")
    setPname("")
    localStorage.setItem('customerName', opname);
    localStorage.setItem('price', oAddress);
    localStorage.setItem('description', opprice);
   
   
    
  }

  const back = () => 
{
  navigate('/productCart')
}
  return (
 <Container className='p-3'>
   <div className='d-flex gap-3'>
   <FiArrowLeft onClick={back} />
   <h6>Cart summary</h6>
   </div>
   
  
    {info === null && <div>{''}</div>}
       <div className='d-flex cartgidi'>
           {cart.length === 0 && navigate('/productCart') }
           <div>
               {cart.map((item) => (
                   <div key={item.id} className='card w-25 cartcardgidi border-white'>
                     <div className='card-body'>
                       <h6>{item.name}</h6>
                        <p> {item.quant} x N{item.price}</p>
                        <img src={item.image} className="card-img" alt='item image' />
                       <div className='me-4 p-2'>
                       <Button className=' bg-success border-white' onClick={() => onAdd(item)}> + </Button>
                       <Button className='bg-white border-white text-dark'> {item.quant} </Button>
                       <Button className='bg-danger border-white' onClick={() => onRemove(item)}> - </Button>
                        </div>
                       
                        </div>
                   </div>
               ))}
              <h4 className='text-dark'>Total Price :{cart.reduce((total, item)=>total+(item.price*item.quant),0)} </h4>
           </div>
           <Container className='bg-muted'>
              <h3 className='text-center p-2'>Summary </h3>
              
              {cart.length === 0 && <div> Summary is empty </div>} 
              {cart.map((item) => (
                <div  key={item.id}>
                    <h6> Product Name:  {item.name}</h6>
                        <p> Product Quantity: {item.quant} x N{item.price}</p>
                       
                </div>
              ))}
                     <h5 className='text-danger'>Total Price : N{cart.reduce((total, item)=>total+(item.price*item.quant),0)} </h5>
                <div className='mt-5'>
                <h6>Fill out this form to order for your products</h6>
                  <div>
                    <Form>
                      <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control as='input' size='sm' placeholder="Customer Name" className='p-75' onChange={customerName} value={opname} />
                      </Form.Group>


                      <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control as='input' size='sm' placeholder="Customer Address" className='p-75' onChange={customerAddress} value={oAddress} />
                      </Form.Group>



                      <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control as='input' size='sm' placeholder="Customer Phone Number" className='p-75' onChange={customerPhoneNumber} value={opprice} />
                      </Form.Group>
                     

                      <div className='mt-5'>
                      <Button onClick={totalOrder}
                       disabled={!opprice} className='btn-danger'
                      >Order</Button>
                        </div>
     
                    </Form>
                  </div> 
                  </div>   
           </Container>
       </div>
    </Container>
  )
}

export default ShowCart