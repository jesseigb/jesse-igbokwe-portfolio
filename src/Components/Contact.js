import React from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap';
import closeIcon from '../assets/img/close-icon.svg';
import minimiseIcon from '../assets/img/minimise-icon.svg'

function Contact(props) {

    return (
        <Draggable handle='.window-header' bounds='parent'>
            <Container className="window box contact" id={props.active ? "active-window" : "hidden-window"}>
                <Row className="window-header">
                    <Col className="window-action-wrapper" xs={3}>
                        <div className="close">
                            <img src={closeIcon} draggable="false"></img>
                        </div>
                        <div className="minimise">
                            <img src={minimiseIcon} draggable="false"></img>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <p>Contact Me</p>
                    </Col>
                </Row>
                <Row className="window-content work-minimised">
                    <Col className='h-100' xs={12}>
                        <h1>Get In Touch</h1>
                        <p style={{fontSize: '1.2em', width: '80%'}}>If you wanna get in touch, talk to me about a project collaboration or just say hello 
                            send me an email or contact me on my LinkedIn.
                        </p>
                        <div className='bubble-title'>
                            <p><a href='mailto: jesse.igbokwe@hotmail.com'>Email</a></p>
                        </div>
                        <br></br>
                        <div className='bubble-title'>
                            <p><a href='https://www.linkedin.com/in/jesse-igbokwe-79341b203/'>LinkedIn</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Draggable>
    )
}

export default Contact;