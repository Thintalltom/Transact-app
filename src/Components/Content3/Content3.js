import React from 'react'
import './Content3.css'
import Phone2 from '../../Pictures/Phone2.png'
import { Container, Button, Accordion } from 'react-bootstrap';
import { Content3List } from './Content3List';

const Content3 = () => {
  return (
    <Container className="content3frame">
        <div className='d-flex content3frames'>
            <div>
                <h3 className='bringing'>Bringing to you the best Customer experince and Satisfaction</h3>
                {Content3List.map((content) => (
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
            <div>
                <img src={Phone2}  className="w-75" />
            </div>

        </div>
    </Container>
  )
}

export default Content3