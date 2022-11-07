import React, {useState} from 'react'
import {Button, Form, Alert, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext';
import Login from '../../Pictures/login.png'
import { toast } from 'react-toastify'

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const { logIn } = useUserAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password)
      navigate("/dashboard")
      toast.success('Welcome back')
    } catch (error) {
      toast.error('Bad user credentials')
    }
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }
  return (

    <Container className="d-flex change">
      <Link to='/' className='mt-4'>
      <Button>Back</Button>
      </Link>
     
       <img src={Login}  className="w-50 signupimg"/>
    <Form className='formContainer' onSubmit={handleSubmit}>
        <h4 className='text-center'>Login Form</h4>
      
        {error && <Alert variant="danger" >{error}</Alert>}
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"
         onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit" className="bg-warning border-white">
      Log In
    </Button>
    <Form.Group>
    <Form.Text>
        Don't have an account? 
        <button className='btn btn-white '>
          <Link to ='/authForm'> Sign Up</Link>
         </button>
    </Form.Text>
    </Form.Group>
  
  </Form>
  </Container>
  )
}

export default LoginForm