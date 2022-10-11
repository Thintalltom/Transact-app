import Home from './Home'
import AuthForm from './Components/AuthForm/AuthForm'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { Routes, Route, Link } from "react-router-dom";
import { UserAuthContextProvider } from './Context/UserAuthContext'
import Dashboard from './Components/ProtectedRoute/Dashboard';
import Menu from './Components/ProtectedRoute/Menu';
import Settings from './Components/ProtectedRoute/Settings';
import Order from './Components/ProtectedRoute/Order';
import Product from './Components/ProtectedRoute/Product';
import ProductCart from './Components/ProductInfo/ProductCart';
import ProductDashboard from './Components/ProductInfo/ProductDashboard';
import Merchant from './Components/Merchant/Merchant'
import { useState, useEffect } from 'react'
import Productinfo from './Components/ProductInfo/Productinfo';
import { stringify } from '@firebase/util';
function App() {
  // this are states for the producst that will be pasted by the merchant so customers can have a look and purchase it 
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("all")
  const [info, setInfo] = useState([]);
  const [file, setFile] = useState()
  const [filterProduct, setFilterProduct] = useState([])
  // this are states for the merchant information that willl be passed as props 
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [save, setSave] = useState([])
  // state to save all functions and datas
  



  
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

  useEffect(() => {
  getLocalInfo()
  }, [])
  
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

  return (
    <div>
      <UserAuthContextProvider>      
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='authForm' element={<AuthForm />} />
        <Route path='loginForm' element={<LoginForm />} />
        <Route path='dashboard' element={<Dashboard
        save={save}
        todos = {info}
        setTodos = {setInfo}
        />} />
        <Route path='settings' element={<Settings />} />
        <Route path='order' element={<Order />} />
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
/>} />
  <Route path='productCart' element={< ProductCart save={save}  todos= {info} filterProduct={filterProduct} setFilterProduct={setFilterProduct}  />}/>

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
       />}/>
      </Routes>
    
        
     
      
      </UserAuthContextProvider>   

    </div>
  );
}

export default App;
