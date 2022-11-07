import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap'
import { useParams} from 'react-router-dom'
const OrderInfo = ({order}) => {
  
  const [matter, setMatter] = useState(order)
  const { id } = useParams()
  useEffect(() => {
    const findOrder =  () => {
      const orderr = order.find((order) => order.id  === id)
      setMatter(orderr)
      console.log(matter)
    }
    findOrder()
  },  [id])

  
  return (
    <>
    <Container>
  <h1>{id}</h1>
      
    </Container>
    </>
  )
}

export default OrderInfo