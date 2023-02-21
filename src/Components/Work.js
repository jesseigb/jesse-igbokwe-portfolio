import {useState, useRef, useEffect} from 'react';
import Draggable from 'react-draggable';
import {BrowserRouter as Router, Routes, Route, useNavigate, createPath} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import g6Picture from '../assets/img/g6picture.webp';
import boxingPredictionPicture from '../assets/img/boxing-prediction-picture.webp';
import bookProjectPicture from '../assets/img/book-project-picture.webp';
import leftArrow from '../assets/img/left-arrow.svg';
import rightArrow from '../assets/img/right-arrow.svg';
import leftArrowWhite from '../assets/img/left-arrow-white.svg';
import rightArrowWhite from '../assets/img/right-arrow-white.svg';
import expandIcon from '../assets/img/expand.png';

function Work(props) {

    const navigate = useNavigate();
    let [slideshowCurrent, setSlideshowCurrent] = useState(1);

    const goToPage = (page) => {
        navigate('/' + page);
    };

    const controlContainer = useRef();

    const showSlideshow = (x) => {

        if(x == 'next') {
            if(slideshowCurrent <= 2) {
                slideshowCurrent++;
            }
            else {
                setSlideshowCurrent(slideshowCurrent = 1);
            }
        }
        else if (x == 'previous') {
            if(slideshowCurrent >= 2) {
                slideshowCurrent--;
            }
            else {
                setSlideshowCurrent(slideshowCurrent = 3);
            }
        }
        
        let slides = document.querySelectorAll('.work-div');
        const controls = controlContainer.current;

        slides.forEach(slide => {
            if(slide.id == slideshowCurrent) {
                slide.style.display = 'block';
                slide.classList.add('slide-in-animation');
                controls.children[0].innerHTML = slideshowCurrent + '/3';
                
                if(slide.id == 2) {
                    controls.classList.add('light');
                    controls.children[1].src = leftArrowWhite;
                    controls.children[2].src = rightArrowWhite;
                }
                else {
                    controls.classList.remove('light');
                    controls.children[1].src = leftArrow;
                    controls.children[2].src = rightArrow;
                }
            }
            
            else {
                slide.style.display = 'none';
            }
        });
    } 

    showSlideshow();

    return (
        <Draggable handle='.window-header' bounds='parent'>
            <Container className="window box work" id={props.active ? "active-window" : "hidden-window"}>
                <Row className="window-header">
                    <img className='nav-button' onClick={() => goToPage('work')} onTouchEnd={() => goToPage('work')} src={expandIcon} draggable="false"></img>
                    <p>Work</p>
                </Row>
                <Row className="window-content work-minimised">
                    <Col id='1' className='work-div' xs={12} style={{display: 'block', backgroundImage: `url(${g6Picture})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='content-wrapper light'>
                            <div className='bubble-title'>
                                <p><a href="https://booking-management-app.herokuapp.com/login">Appointment Management Project</a></p>
                            </div>
                            <div className="skills-logo-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                            </div> 
                            <div className='work-description-div'>
                                <p>G6 Appointment Management is a Django-based web system. <br></br>It allows a patient to create appointments and file reports with their personal doctor.</p>
                            </div>
                            <div className='line'></div>
                        </div>
                    </Col>
                    <Col id='2' className='work-div' xs={12} style={{display: 'none', backgroundImage: `url(${boxingPredictionPicture})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='content-wrapper dark'>
                            <div className='bubble-title light'><p>Boxing Prediction Project</p></div>
                            <div className="skills-logo-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            </div> 
                            <div className='work-description-div light'>
                                <p>Based on the user's height, arm length and boxing stance a calculation will be made to predict a possible match outcome against another existing boxer.</p>
                            </div>
                            <div style={{background: 'white'}} className='line'></div>
                        </div>
                    </Col>
                    <Col id='3' className='work-div' xs={12} style={{backgroundImage: `url(${bookProjectPicture})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'none' }}>
                        <div className='content-wrapper'>
                            <div className='bubble-title'><p>Book Reviewing Project</p></div>
                            <div className="skills-logo-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" />
                            </div> 
                            <div className='work-description-div'>
                                <p>This is a book reviewing website developed with Symfony and Twig which allows users to add and review books. It also integrates The New York Times books API.</p>
                            </div>
                            <div style={{background: 'black'}} className='line'></div>
                        </div>
                    </Col>
                    <div ref={controlContainer} className='control-container'>
                        <span>1/3</span>
                        <img onClick={() => showSlideshow('previous')} src={leftArrow} style={{float: 'left'}} />
                        <img onClick={() => showSlideshow('next')} src={rightArrow} style={{float: 'right'}} />
                    </div>
                </Row>
            </Container>
        </Draggable>
    )
}

export default Work;