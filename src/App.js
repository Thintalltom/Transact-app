import Home from './Home'
import AuthForm from './Components/AuthForm/AuthForm'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { Routes, Route} from "react-router-dom";
import { UserAuthContextProvider } from './Context/UserAuthContext'
import Dashboard from './Components/ProtectedRoute/Dashboard';
import Settings from './Components/ProtectedRoute/Settings';
import Order from './Components/ProtectedRoute/Order';
import Product from './Components/ProtectedRoute/Product';
import ProductCart from './Components/ProductInfo/ProductCart';
import ProductDashboard from './Components/ProductInfo/ProductDashboard';
import Merchant from './Components/Merchant/Merchant'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { useState, useEffect } from 'react'
import ShowCart from './Components/ProductInfo/ShowCart';
import SingleProduct from './Components/ProductInfo/SingleProduct';
import Navsnav from './Components/ProtectedRoute/Navsnav';
import OrderInfo from './Components/ProductInfo/OrderInfo';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // this are states for the producst that will be pasted by the merchant so customers can have a look and purchase it 
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("all")
  const [info, setInfo] = useState([]);
  const [file, setFile] = useState()
  const [variant, setVariant] = useState()
  const [variant2, setVariant2] = useState()
  const [filterProduct, setFilterProduct] = useState([])
  
  
  // this are states for the merchant information that willl be passed as props 
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [companyinfo, setCompanyInfo] = useState("")
  const [save, setSave] = useState([])
  const [orderInfo, setOrderInfo] = useState([])
 
  
  // state for order info
  const [oAddress, setAddress] = useState("")
 const [opprice, setPprice] = useState("")
 const [opname, setPname] = useState("")
  const [order, setOrder] = useState([])
  
 
  

// function to run the local storage to store every information of the product stored by the owner of the website
  useEffect(() => {
    getLocalInfo()
    }, [])

  useEffect(() => {
    filterHandler()
    saveLocalInfo() 
    }, [info, category])
  
  
    
  // function
  const filterHandler = () => {
    switch(category) {
      case 'Phone':
        setFilterProduct(info.filter(info => info.phone === true))
        break;
      case 'Clothes':
        setFilterProduct(info.filter(info => info.phone === false))
        break;
      case 'Sneakers and Slides':
        setFilterProduct(info.filter(info => info.phone === false))
        break;
      case 'Bags and purses':
        setFilterProduct(info.filter(info => info.phone === false ))
        break;
      default:
        setFilterProduct(info)
    }
  }


// function to save order info
  const saveLocalOrder =() => {
    localStorage.setItem('order', JSON.stringify(order));
     };
   const getLocalOrder = () => 
   {
     if(localStorage.getItem("order") === null) {
       localStorage.setItem("order", JSON.stringify([]));
     } else{
      let orderLocal = JSON.parse(localStorage.getItem("order"))
     setOrder(orderLocal)
     }
   }
   //storing the customers Order on local storage 
  useEffect(() => {
    getLocalOrder()
  }, [])
  
  useEffect(() => {
    saveLocalOrder()
  }, [order])
  
  //function to save information to local storage
  const saveLocalInfo =() => {
   localStorage.setItem('info', JSON.stringify(info));
    };
  const getLocalInfo = () => 
  {
    if(localStorage.getItem("info") === null) {
      localStorage.setItem("info", JSON.stringify([]));
    } else{
     let infoLocal = JSON.parse(localStorage.getItem("info"))
    setInfo(infoLocal)
    }
  }

  
  const [cart, setCart] = useState([])
   // function for adding products to the cart 
   const onAdd = (info) => {
    const exist =  cart.find(x => x.id === info.id)
    if(exist){
      setCart(cart.map(x => x.id === info.id ? {...exist, quant: exist.quant + 1} : x))
    }
    else{
      setCart([...cart, {...info, quant: 1}])
    }
    toast.success('Added to cart')
  }


   // the remove function
  const onRemove = (info) => {
    const exist = cart.find((x) =>  x.id === info.id);
    if(exist.quant === 1) 
    {
      setCart(cart.filter((x) => x.id !== info.id));
    }
    else
    {
      setCart(cart.map(x => x.id === info.id ? {...exist, quant: exist.quant - 1} : x))
    }
  }
 // function to save cart

 const saveLocalCart =() => {
  localStorage.setItem('cart', JSON.stringify(cart));
   };
 const getLocalCart = () => 
 {
   if(localStorage.getItem('cart') === null) {
     localStorage.setItem('cart', JSON.stringify([]));
   } else{
    let cartLocal = JSON.parse(localStorage.getItem('cart'))
   setCart(cartLocal)
   }
 }
 //storing the customers Order on local storage 
useEffect(() => {
  getLocalCart()
}, [])

useEffect(() => {
  saveLocalCart()
}, [cart])


 
  return (
    <div>
      <UserAuthContextProvider>      
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='authForm' element={<AuthForm />} />
        <Route path='loginForm' element={<LoginForm />} />
        <Route path='dashboard' element={<ProtectedRoute>
        <Dashboard  orderInfo={orderInfo} setOrderInfo={setOrderInfo}  setOrder ={setOrder} save={save} order={order} cart={cart} />
         </ProtectedRoute>} />
        <Route path='settings' element={<Settings />} />
        <Route path='products' element={<Product
        product= {product}
        setProduct={setProduct} 
        setPrice = {setPrice} 
        setDescription = {setDescription} 
        todos = {info} 
        setTodos = {setInfo}
        description={description}
        price ={price}  
        category={category}
        setCategory ={setCategory}
        file ={file}
        setFile={setFile}
        variant={variant}
        setVariant= {setVariant}
        variant2={variant2}
        setVariant2={setVariant2}
/>} />
      <Route path='productCart' element={< ProductCart save={save}
        todos= {info} filterProduct={filterProduct} setFilterProduct={setFilterProduct}
        cart={cart} setCart={setCart}
        onAdd={onAdd}/>}/>
      <Route path='productDashboard' element={< ProductDashboard todos= {info} setTodos={setInfo} />}/>
      <Route path='Merchant' element={< Merchant
      lastName={lastName}
      setLastName={setLastName}
      firstName ={firstName}
      setFirstName = {setFirstName}
      companyName = {companyName}
      setCompanyName ={setCompanyName}
      phoneNumber ={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      save={save}
      setSave = {setSave}
      companyinfo = {companyinfo}
      setCompanyInfo={setCompanyInfo}/>}/>
       <Route path='showcart' element={<ShowCart
       cart={cart} setCart={setCart}
       onAdd={onAdd}
       onRemove= {onRemove}
       order={order}
       setOrder={setOrder}
       oAddress ={oAddress}
       opprice={opprice}
       opname= {opname}
       setAddress = {setAddress}
       setPprice ={setPprice}
       setPname ={setPname}
       product={product}
       info ={info}
       />} />
      <Route path='/:name' element={<SingleProduct
      info= {info}
      setInfo ={setInfo}
      cart = {cart}
      setCart={setCart}
      />} />
      <Route path='order' element={<Order order={order} orderInfo={orderInfo} setOrderInfo={setOrderInfo}  setOrder ={setOrder} />} />
      <Route path='navs' element={<Navsnav/>} />
      <Route path='/order/:id' element={<OrderInfo orderInfo={orderInfo} setOrderInfo={setOrderInfo} order={order} setOrder ={setOrder} />} />
      </Routes>
     <ToastContainer 
     position='top-center'
     autoClose={2000}
     hideProgressBar={true}
     />
      </UserAuthContextProvider>   

    </div>
  );
}

export default App;
