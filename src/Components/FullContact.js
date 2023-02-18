import {useState, React} from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Journey from './JourneyText';
import leftArrow from '../assets/img/left-arrow.png';

function FullAbout() {

    const navigate = useNavigate();

    const goToPage = (page) => {
        navigate('/' + page);
    };

    return (
        <Container className='full-window' fluid>
            <Row className='window-content full'>
                <Row className="window-header">
                    <img onClick={() => goToPage('')} src={leftArrow} draggable="false"></img>
                    <p>Contact Me</p>
                </Row>
                <Col className='contact-content' lg={6} xs={12}>
                    <div>
                        <h1>Get In Touch</h1>
                        <p>If you wanna get in touch, talk to me about a project collaboration or just say hello 
                            send me an email or contact me on my LinkedIn.</p>
                        <div className='bubble-title'>
                            <p><a href='mailto: jesse.igbokwe@hotmail.com'>Email</a></p>
                        </div>
                        <br></br>
                        <div className='bubble-title'>
                            <p><a href='https://www.linkedin.com/in/jesse-igbokwe-79341b203/'>LinkedIn</a></p>
                        </div>
                        <br></br>
                        <div className='bubble-title'>
                            <p><a href='https://github.com/jesseigb'>GitHub</a></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FullAbout;