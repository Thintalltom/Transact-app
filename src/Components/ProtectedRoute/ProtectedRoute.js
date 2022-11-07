import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext';
const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    let { user } = useUserAuth();
    if(!user) {
        return navigate('/authForm')
    }
  return children;
}

export default ProtectedRoute