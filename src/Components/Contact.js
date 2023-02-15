import React from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap';

function Contact(props) {

    return (
        <Draggable handle='.window-header' bounds='parent'>
            <Container className="window box contact" id={props.active ? "active-window" : "hidden-window"}>
                <Row className="window-header">
                    <p>Contact</p>
                </Row>
                <Row className="window-content work-minimised">
                    <Col xs={12}>
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