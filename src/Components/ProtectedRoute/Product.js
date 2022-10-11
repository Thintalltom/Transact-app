import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './Product.css'
import { Link, Navigate } from 'react-router-dom'
const Product = ({ setProduct, setPrice, setDescription,  todos, 
 setTodos, product, price, description, category, setCategory, file, setFile }) => {
 
    const categories = [
        {
          slug:"all",
          name:'none'
        },
        {
          slug:"Phone",
            name:'Phone'
        },
        {
          slug:"Clothes",
            name:'Clothes'
        },
        {
          slug:"Sneakers",
            name:'Sneakers and slides'
        },
        {
          slug:"Bags",
            name:'Bags and purses'
        },
    ]

const productPrice = (e) => {
setPrice(e.target.value)
};

const productName = (e) => {
    setProduct(e.target.value)
   
};


 const productDescription = (e) => {
        setDescription(e.target.value)
 }; 

 // function for the category
const productCategory = (e) => {
  console.log(e.target.value)
  setCategory(e.target.value)
}

// function to upload images 
const FileUpdate = (e) => {
  console.log(e.target.files)
  setFile(URL.createObjectURL(e.target.files[0]))
}
const submitTask = (e) => {
    e.preventDefault();
    setTodos([...todos,
       { name: product, price: price, description: description, Phone: false,  image: file,  id: Math.random() * 100 }]);
  setProduct("")
  setDescription("")
  setPrice("")
  setFile("")
}




  return (
    <Container fluid className='productContainer bg-muted'>
    <Container className='bg-white shadow-sm productContainer2 '>
      <h6 className='text-center'>Add Your Preferred Product</h6>
      <Form className='formContainer'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Product Name"
    value={product}
     onChange={productName}
    />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Product Price</Form.Label>
    <Form.Control type="price" placeholder="Product Price"
    value={price}
     onChange={productPrice}
    />
  </Form.Group>
  
  <Form.Group>
    <Form.Label>Add image</Form.Label>

    <Form.Control type="file" onChange={FileUpdate} />
    <img src={file} width="100px" height="100px" className='text-center' alt="img" />
  </Form.Group>

  <Form.Group className="mb-3">
            <Form.Select onChange={productCategory}> 
            {categories.map((cat) => (
                <option value={cat.slug}>  {cat.name}</option> 
                ))}
                </Form.Select> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Product Descriptions</Form.Label>
    <Form.Control type='text-area' placeholder="Product Description" className='p-75'
    onChange={productDescription}
    value={description}
    />
  </Form.Group>

  <div className='d-flex justify-content-between'>
  <Button variant="primary" type="submit" onClick={submitTask}
disabled={!product}>
    Submit
  </Button>
    <Link to="/productDashboard">
    <Button>Product DashBoard</Button>
    </Link>
    
  </div>
  
  </Form>
  </Container>
  </Container>
  )
}

export default Product