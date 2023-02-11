import React from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap';
import closeIcon from '../assets/img/close-icon.svg';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import minimiseIcon from '../assets/img/minimise-icon.svg'
import expandIcon from '../assets/img/expand-icon.svg'

function About(props) {

    const navigate = useNavigate();

    const goToPage = (page) => {
        navigate('/' + page);
    };

    return (
        <Draggable handle='.window-header' bounds='parent'>
            <Container className="window box about" id={props.active ? "active-window" : "hidden-window"}>
                <Row className="window-header">
                    <Col className="window-action-wrapper" xs={3}>
                        <div className="close">
                            <img src={closeIcon} draggable="false"></img>
                        </div>
                        <div className="minimise">
                            <img src={minimiseIcon} draggable="false"></img>
                        </div>
                        <div onClick={() => goToPage('about')} className="expand">
                            <img src={expandIcon} draggable="false"></img>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <p>About Me</p>
                    </Col>
                </Row>
                <Row className="window-content work-minimised">
                    <Col xs={12}>
                        <h1>Hello World,<br></br>I am Jesse Igbokwe</h1>
                        <p style={{fontSize: '1.1em', width: '80%'}}> As a <span style={{fontWeight: 'bold'}}>Web Developer</span> graduate I enjoy to catapult ideas into the web through coding.
                            <br></br>During my University course and Software Engineering Bootcamp experience I have worked with:
                        </p>
                        <div className="skills-logo-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Draggable>
    )
}

export default About;