import React, {useEffect} from 'react'
import {Form, Container, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Merchant = ({
    lastName,
    setLastName,
    firstName,
    setFirstName, 
    companyName,
    setCompanyName,
    setPhoneNumber,
    save, 
    phoneNumber,
    setSave
}) => {

    const navigate = useNavigate()
    const firstNamehandler = (e) =>
    {
            console.log(e.target.value)
            setFirstName(e.target.value)
    }

    const lastNamehandler = (e) =>
    {
            console.log(e.target.value)
            setLastName(e.target.value)
    }

    const compNamehandler = (e) =>
    {
            console.log(e.target.value)
            setCompanyName(e.target.value)
    }
    
    const phoneNumberhandler = (e) => {
        console.log(e.target.value)
        setPhoneNumber(e.target.value)
    }

    const saveHandler = (e) => {
        e.preventDefault();
        setSave([...save, 
        {
            firstname: firstName, lastname: lastName, companyname: companyName, phoneno: phoneNumber
        }]);
        console.log(save)
        if(save != null)
        {
        navigate('/dashboard')
        }
    }


    

  return (
    <Container className='p-5'>
        <h5 className='text-center'>Fill Out Your Personal Details:</h5>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter first name" value={firstName}
        onChange={firstNamehandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter last name" value={lastName}
        onChange={lastNamehandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="email" placeholder="Enter company name" value={companyName}
        onChange={compNamehandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="email" placeholder="Enter phone number"  value={phoneNumber}
        onChange={phoneNumberhandler}
        />
      </Form.Group>

      <div className='d-flex justify-content-between'>
      <Button variant="primary" type="submit"
      onClick={saveHandler}
      disabled={!phoneNumber}
      >
        Save
      </Button>
      </div>
     
      
    </Form>
    </Container>

  ) 
}

export default Merchant