import React, { createElement } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import leftArrow from '../assets/img/left-arrow.png';
import g6Picture from '../assets/img/g6picture.webp';
import boxingPredictionPicture from '../assets/img/boxing-prediction-picture.webp';
import bookProjectPicture from '../assets/img/book-project-picture.webp';
import boxrecVideo from '../assets/vids/boxrec-video.mp4';

function FullWork() {

    
    const navigate = useNavigate();
    
    const goToPage = (page) => {
        navigate('/' + page);
    };
    
    /**
     * Function that toggles the demo videos
     * @param {int} mediaInt Selector for the specific media element
     * @param {int} textInt Selector for the specific text
     * @param {string} content Specifies which work experience content the media should show
    */
    const controlDemo = (mediaInt, textInt, content) => {
        let selectedMedia = document.querySelectorAll('.work-image')[mediaInt - 1];
        let text = document.querySelectorAll('.bubble-title p')[textInt - 1];

        // Video element for project demonstrations
        let boxrecVideoElement = document.createElement("video");
        boxrecVideoElement.classList.add("work-image");
        boxrecVideoElement.setAttribute("controls", "");

        //Source for video elements
        let boxrecVideoSource = document.createElement("source");
        boxrecVideoElement.appendChild(boxrecVideoSource);
        boxrecVideoSource.src = boxrecVideo;
        boxrecVideoSource.type = "video/mp4";

        if(selectedMedia.classList.contains('demo')) {
            selectedMedia.classList.remove('demo');
            text.innerHTML = 'Watch Demo';

            if(content == 'boxing') {
                let boxrecImage = document.createElement("img");
                boxrecImage.classList.add("work-image");
                boxrecImage.src = boxingPredictionPicture;
                selectedMedia.replaceWith(boxrecImage);
                selectedMedia = boxrecImage;
            }
            else if(content == 'book') {
                selectedMedia.src = bookProjectPicture;
            }
        }
        
        else {
            selectedMedia.classList.add('demo');
            text.innerHTML = 'Close Demo';
            
            if(content == 'boxing') {
                selectedMedia.replaceWith(boxrecVideoElement);
                boxrecVideoElement.classList.add("demo");
                selectedMedia = boxrecVideoElement;
            }
            else if(content == 'book') {
                selectedMedia.src = bookProjectPicture;
            }
        }
        console.log(selectedMedia);
    }
    
    //Check if scrollable div is at the top
    const checkSectionScrollTop = (int) => {
        const textSection = document.querySelectorAll('.work-text-container')[int - 1];
        const scrollTextSection = document.querySelectorAll('.scroll-text-section')[int - 1];

        if(textSection.scrollTop > 0) {
            scrollTextSection.classList.add('hidden');
        }
        else {
            scrollTextSection.classList.remove('hidden');
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
                        <div onScroll={() => checkSectionScrollTop(1)} className='work-text-container'>
                            <p>G6 Appointment Management is a Django-based web system for the final project of a Software Engineering Bootcamp. 
                                <br></br>It allows a patient to create appointments and file reports with their personal doctor.
                                <br></br>Additionally, it has implemented a dashboard for doctors where they can view, edit, delete and create slots for upcoming appointments and reply to reports.
                            </p>
                            <p>
                                On the back-end there is a secure PostgreSQL database that handles all the requests and entries from doctors and patients; on the front-end Bootstrap and CSS make the website accessible and responsive.
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
                        <div onScroll={() => checkSectionScrollTop(2)} className='work-text-container'>
                            <p>For my university final year project I developed a single-page boxing data visualisation web application using NodeJS. 
                            <br></br>Based on the user's height, arm length and boxing stance a calculation will be made to predict a possible match outcome against another existing boxer.</p>
                            <p>Puppeteer is the library implemented to scrape the largest boxing database <a style={{color: 'white'}} href='https://boxrec.com'>Boxrec.com</a> and retrieve necessary data about selected professional boxers. 
                            <br></br>Express.js was also utilised as it allowed me to create an API used to fetch, send data upon request and run a local server.</p>
                            <p>Finally, after data gathering and calculations, the results will be shown on text and charts using charting library, Chart.js</p>
                            
                            <div className='scroll-text-section white'><span>Scroll To Read More</span></div>
                        </div> 
                        <div onClick={() => controlDemo(2,4, 'boxing')} className='bubble-title light'><p>Watch Demo</p></div>
                        <div className='bubble-title light'><p><a style={{color: 'white'}} href="https://github.com/jesseigb/boxing-prediction-project">Open On GitHub</a></p></div>
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
                        <div onScroll={() => checkSectionScrollTop(3)} className='work-text-container'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <div className='scroll-text-section'><span>Scroll To Read More</span></div>
                        </div> 
                        <div onClick={() => controlDemo(3,7, 'book')} className='bubble-title'><p>Open Demo</p></div>
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