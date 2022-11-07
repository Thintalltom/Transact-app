import React from 'react'
import { Container, Button, Accordion } from 'react-bootstrap';
import Phone3 from '../../Pictures/Phone3.png'
import { Content4List } from './Content4List';
import './Content4.css'
const Content4 = () => {
  return (
      <Container>
          <div className='d-flex content4frame'>
            <img src={Phone3} className="w-50" />
            <div>
                <h5 className='access'>Get access to superb use of the web app to transact on all social media platform</h5>
                {Content4List.map((content) => (
                    <Accordion key={content.name} className=" accordion gap-5 shadow-sm accordionContainer">
                        <Accordion.Item className='accordionItem'>
                            <Accordion.Header className='accordionHead'>
                                {content.heading}
                            </Accordion.Header>
                            <Accordion.Body>
                                {content.text}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>   
                ))}
                <Button className="bg-dark move">Sell Now</Button>
            </div>
          </div>
      </Container>
   
  )
}

export default Content4