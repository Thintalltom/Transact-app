import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext';
import Menu from './Menu';
import Merchant from '../Merchant/Merchant';
import Productinfo from '../ProductInfo/Productinfo';
const Dashboard = ({children, setProduct, setPrice, save, setDescription, product, setTodos, todos, price, description}) => {
    const navigate = useNavigate();
    let { user } = useUserAuth();
    console.log(user)
    if(!user) {
        return navigate('/authForm')
    }
    

  return (
      <div>
           <Menu save={save} />
          
      </div>

  )
}

export default Dashboard