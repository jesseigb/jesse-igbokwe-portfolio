import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import leftArrow from '../assets/img/left-arrow.png';
import g6Picture from '../assets/img/g6picture.webp';
import boxingPredictionPicture from '../assets/img/boxing-prediction-picture.webp';
import bookProjectPicture from '../assets/img/book-project-picture.webp';

function FullWork() {

    const navigate = useNavigate();

    const goToPage = (page) => {
        navigate('/' + page);
    };

    /**
     * Function that toggles the demo videos
     * @param {int} imageInt Selector for the specific image
     * @param {int} textInt Selector for the specific text
     * @param {string} content Specifies which work experience content the image should show
     */
    const controlDemo = (imageInt, textInt, content) => {
        let selectedImage = document.querySelectorAll('.work-image')[imageInt - 1];
        let text = document.querySelectorAll('.bubble-title p')[textInt - 1];

        if(selectedImage.classList.contains('demo')) {
            selectedImage.classList.remove('demo');
            text.innerHTML = 'Open Demo';

            if(content == 'boxing') {
                selectedImage.src = boxingPredictionPicture;
            }
            else if(content == 'book') {
                selectedImage.src = bookProjectPicture;
            }
        }
        
        else {
            selectedImage.classList.add('demo');
            text.innerHTML = 'Close Demo';

            if(content == 'boxing') {
                selectedImage.src = boxingPredictionPicture;
            }
            else if(content == 'book') {
                selectedImage.src = bookProjectPicture;
            }
        }
    }

    return (
        <Container className='full-window' fluid>

            <Row className='window-content full'>
                <Row style={{cursor: 'default'}} className="window-header">
                    <img onClick={() => goToPage('')} src={leftArrow} draggable="false"></img>
                    <p>Work</p>
                </Row>
                <Col style={{paddingTop: '60px'}} className='work-container' lg={6} xs={12}>
                    <div className='work-content-container'>
                        <div className='bubble-title'><p>Appointment Management Project</p></div>
                        <div className="skills-logo-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                        </div>
                        <div className='work-text-container'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div> 
                        <div className='bubble-title'><p><a href="https://booking-management-app.herokuapp.com/login">Go To Website</a></p></div>
                    </div>
                </Col>
                <Col className='work-container' lg={6} xs={12}>
                    <div className='work-content-container'>
                        <img className='work-image' style={{boxShadow: '-2px 1px 15px grey'}} src={g6Picture}></img>
                    </div>
                </Col>
            </Row>

            <Row className='window-content full dark'>
                <Col className='work-container' lg={6} xs={12}>
                    <div className='work-content-container'>
                        <div className='bubble-title light'><p>Boxing Prediction Project</p></div>
                        <div className="skills-logo-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        </div> 
                        <div className='work-text-container'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div> 
                        <div onClick={() => controlDemo(2,4, 'boxing')} className='bubble-title light'><p>Open Demo</p></div>
                    </div>
                </Col>
                <Col className='work-container' lg={6} xs={12}>
                    <div className='work-content-container'>
                        <img className='work-image' style={{boxShadow: '-2px 1px 15px black'}} src={boxingPredictionPicture}></img>
                    </div>
                </Col>
            </Row>

            <Row className='window-content full'>
                <Col className='work-container' lg={6}>
                    <div className='work-content-container'>
                        <div className='bubble-title'><p>Book Database Project</p></div>
                        <div className="skills-logo-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" />
                        </div> 
                        <div className='work-text-container'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div> 
                        <div onClick={() => controlDemo(3,6, 'book')} className='bubble-title'><p>Open Demo</p></div>
                    </div>
                </Col>
                <Col className='work-container' lg={6}>
                    <div className='work-content-container'>
                        <img className='work-image' style={{boxShadow: '-2px 1px 15px grey'}} src={bookProjectPicture}></img>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default FullWork;