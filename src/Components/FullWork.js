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
    
    //Check if scrollable div is at the top
    const checkSectionScrollTop = (int) => {
        const textSection = document.querySelectorAll('.work-text-container')[int - 1];
        textSection.setAttribute('aria-scrollY', textSection.scrollTop);
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
                        <div onScroll={() => checkSectionScrollTop(1)} className='work-text-container' aria-scrollY="0">
                            <p>G6 Appointment Management is a Django-based web system for the final project of a Software Engineering Bootcamp. 
                                <br></br>It allows a patient to create appointments and file reports with their personal doctor.
                                <br></br>Additionally, it has implemented a dashboard for doctors where they can view, edit, delete and create slots for upcoming appointments and reply to reports.
                            </p>
                            <p>
                                On the back-end there is a secure PostgreSQL database that handles all the requests and entries from doctors and patients and on the front-end Bootstrap and CSS make the website accessible and responsive.
                                <br></br>Furthermore, GitHub was a crucial technology used to share the project codes with my team members.
                            </p>
                            <div className='scroll-text-section'><span>Scroll To Read More</span></div>
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
                        <div onScroll={() => checkSectionScrollTop(2)} className='work-text-container' aria-scrollY="0">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <div className='scroll-text-section white'><span>Scroll To Read More</span></div>
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
                        <div onScroll={() => checkSectionScrollTop(3)} className='work-text-container' aria-scrollY="0">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <div className='scroll-text-section'><span>Scroll To Read More</span></div>
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