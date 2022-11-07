import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './Product.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MdAddShoppingCart, MdStore } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
const Product = ({ setProduct, 
  setPrice, 
  setDescription,  
  todos, 
 setTodos, 
 product, 
 price,
  description, 
  category, 
  setCategory, 
  file, 
  setFile, variant, setVariant, variant2, setVariant2 }) => {

    
const productPrice = (e) => {
setPrice(e.target.value)
};

const navigate = useNavigate()

const productName = (e) => {
    setProduct(e.target.value)
   
};


 const productDescription = (e) => {
        setDescription(e.target.value)
 }; 

 // function for the category
const productCategory = (e) => {
 
  setCategory(e.target.value)
}

const variantPics =(e) => {
  setVariant(URL.createObjectURL(e.target.files[0]))
}

const variantImg =(e) => {
  setVariant2(URL.createObjectURL(e.target.files[0]))
}
// function to upload images 
const FileUpdate = (e) => {
  console.log(e.target.files)
  setFile(URL.createObjectURL(e.target.files[0]))
}
const submitTask = (e) => {
    e.preventDefault();
    setTodos([...todos,
       { variant1: variant, variant2: variant2, name: product, price: price, description: description,  image: file,  id: Math.random() * 100 }]);
  setProduct("")
  setDescription("")
  setPrice("")
  setFile("")
  toast.success('Your product has been added')
  localStorage.setItem('product', product);
  localStorage.setItem('price', price);
  localStorage.setItem('description', description);
  localStorage.setItem('image', file);
  localStorage.setItem('variant', variant);
  localStorage.setItem('variant2', variant2);
 
}

const back = () => 
{
  navigate('/productDashboard')
}


  return (

    <Container fluid className='bg-white'>
  <div className='d-flex gap-5 bg-warning container-fluid p-3   down'>
     <span>
      <FiArrowLeft onClick={back} />
      </span>
      <h6 className='text-center'>Add Your Preferred Product</h6>
  </div>
   
     
    <Form className='mt-2'>
    <Form.Group className="mb-3">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Product Name"
    value={product}
     onChange={productName}
    />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Product Price</Form.Label>
    <Form.Control type="price" placeholder="Product Price"
    value={price}
     onChange={productPrice}
    />
  </Form.Group>
  
  <Form.Group>
    <Form.Label>Add image</Form.Label>

    <Form.Control type="file" onChange={FileUpdate} />
    <img src={file} width="10px" height="10px" className=' invisible text-center' alt="img" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Add variant</Form.Label>
  <Form.Control type="file" onChange={variantImg} />
    <img src={file} width="10px" height="10px" className=' invisible text-center' alt="img" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Add variant</Form.Label>
  <Form.Control type="file" onChange={variantPics} />
    <img src={file} width="10px" height="10px" className=' invisible text-center' alt="img" />
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Product Descriptions</Form.Label>
    <Form.Control as='textarea' rows={3} placeholder="Product Description" className='p-75'
    onChange={productDescription}
    value={description}/>
  </Form.Group>

 

  <div className='d-flex justify-content-between'>
  <Button variant="danger" type="submit" onClick={submitTask}
disabled={!product}>
  Add Product 
  <span>
  < MdAddShoppingCart />
  </span> 
  </Button>

    <Link to="/productDashboard">
    <Button variant="warning">
      <span>
        <MdStore />
      </span>
      DashBoard
    </Button>
    </Link>

  </div>
  </Form>
  </Container>
 
  )
}

export default Product