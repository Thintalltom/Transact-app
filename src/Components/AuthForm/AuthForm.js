import React, { useState } from 'react'
import {Button, Form, Container, Alert} from 'react-bootstrap';
import {Link,  useNavigate} from 'react-router-dom'
import Signup from '../../Pictures/Signup.png'
import { useUserAuth } from '../../Context/UserAuthContext';
import './AuthForm.css'

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const { signUp } = useUserAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signUp(email, password)
      navigate("/loginForm")
    } catch (err) {
      setError(err.message)
    
    }
  };
  return (
    <Container className="d-flex change">
      <img src={Signup}  className="w-50 signupimg"/>
    
 
    <Form className='formContainer' onSubmit={handleSubmit}>
    <h4 className='text-center'>Sign Up </h4>
    {error && <Alert variant="danger" >{error}</Alert>}
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"
       placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
      placeholder="Password"
       onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit" className="text-center justify-content-center align-items-center">
      Sign Up
    </Button>
    <Form.Group>
    <Form.Text>
        Already have an account? 
        <button className='btn btn-white'>
          <Link to="/loginForm">
          Login
          </Link>
          </button>
    </Form.Text>
    </Form.Group>
  </Form>
  </Container>
  )
}

export default AuthForm