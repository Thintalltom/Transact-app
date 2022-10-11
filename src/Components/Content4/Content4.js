import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Phone3 from '../../Pictures/Phone3.png'
import './Content4.css'
const Content4 = () => {
  return (
      <Container>
          <div className='d-flex content4frame'>
            <img src={Phone3} className="w-50" />
            <div>
                <h5 className='access'>Get access to superb use of the web app to transact on all social media platform</h5>
            </div>
          </div>
      </Container>
   
  )
}

export default Content4