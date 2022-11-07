import React, { useState, useEffect } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Container, Button, Nav, Navbar, Badge} from 'react-bootstrap'
import { MdShoppingCart } from "react-icons/md";
import './Productlist.css'

const itemlocalStorage = JSON.parse(localStorage.getItem('singleProduct'))
const SingleProduct = ( { info, setInfo, cart,  setCart}) => {
    const [singleProduct, setSingleProduct] = useState(itemlocalStorage)
    const { name } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
      localStorage.setItem('singleProduct', JSON.stringify(singleProduct))
    }, [singleProduct, name])

    useEffect(() => {
     const findProduct = () => {
       const product = info.find((info) => info.name === name)
       setSingleProduct(product)
     }
    findProduct()
    }, [name])

    const onAdd = (info) => {
      const exist =  cart.find(x => x.id === info.id)
      if(exist){
        setCart(cart.map(x => x.id === info.id ? {...exist, quant: exist.quant + 1} : x))
      }
      else{
        setCart([...cart, {...info, quant: 1}])
      }
    }
   
    const next = () =>{
    if(cart.length === 0)
    {
      return  ('')
    }else
    {
      navigate('/showcart')
    }
  }
  return (
    <Container>
      
      <Navbar expand="lg" variant="white" bg="white">
        <Container>
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

    <h2 className='text-primary'>{name}</h2>  
    <Container className=' gap-5 '>
    <img src={singleProduct.image} className="w-50 text-center" />
    <div>
      <p>
       <span className='text-dark h5'> Product Description:  </span> <br />
        {singleProduct.description}
      </p>
    </div>
    <div>
      <h6>Various variant that exist for the sneaks</h6>
      <div className='d-flex gap-5'>
      <img src={singleProduct.variant1} className="w-25"/>
      <img src={singleProduct.variant2} className="w-25"/>
      </div>
      
    </div>
    </Container>

    <Container className='justify-space-between d-flex mt-5 p-4'>
      
        <Button
             onClick={() => onAdd(singleProduct)}
               className='btn-warning me-5' >Add to Cart
        </Button> 

    <Link to='/productCart'>
      <Button className='bg-dark border-white shadow'>Back to stores</Button>
    </Link>

    </Container>
   
    </Container>
  )
}

export default SingleProduct