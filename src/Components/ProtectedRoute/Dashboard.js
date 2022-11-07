import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import {Container, Row} from 'react-bootstrap'
import Menu from './Menu';
import { toast } from 'react-toastify'
import { useUserAuth } from '../../Context/UserAuthContext'
const Dashboard = ({ save, order, orderInfo, setOrderInfo, setOrder }) => {
  const { logout, user } = useUserAuth();
  const handleLogout = async  () => {
      try {
          return logout()
         
      } catch (error) {
          console.log(error.message)
      }
  }
  return (
    
        <Container fluid>
            <Row>
            <Menu save={save} handleLogout={handleLogout} user={user}  order={order} orderInfo={orderInfo} setOrderInfo={setOrderInfo}  setOrder ={setOrder}/>
            </Row>
        </Container>
           
         
    

  )
}

export default Dashboard