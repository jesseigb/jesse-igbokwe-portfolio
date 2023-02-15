import {useState, React} from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Journey from './JourneyText';
import leftArrow from '../assets/img/left-arrow.png';

function FullAbout() {

    const [journeyObject, setJourneyObject] = useState({title: 'Learn My Journey', subTitle: '', description: 'Click on the timeline points to learn more about my journey.'});
    const navigate = useNavigate();

    const goToPage = (page) => {
        navigate('/' + page);
    };

    // Animate section when it just becomes visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show')
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return (
        <Container className='full-window' fluid>
            <Row className='window-content full'>
                <Row style={{cursor: 'default'}} className="window-header">
                    <img onClick={() => goToPage('')} src={leftArrow} draggable="false"></img>
                    <p>About</p>
                </Row>
                <Col className='title-content' lg={6} xs={8}>
                    <p style={{marginBottom: '0', fontSize: '1em'}}>Hello World, I am</p>
                    <h1 style={{fontSize: '4em'}}>Jesse Igbokwe</h1>
                    <p style={{fontSize: '1.5em'}}>Full Stack Web Developer</p>
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
                    <div className='mouse-container'>
                        <div className='mouse'>
                            <div className='mouse-dot'></div>
                        </div>
                        <p style={{marginTop: '10px'}}>Scroll Down</p>
                    </div>
                </Col>
            </Row>
            <Row className='window-content full dark'>
                <Col className='journey-container' lg={6} md={8} xs={8}>
                    <h1 style={{fontSize: '4em'}}>My Journey</h1>
                    <div style={{width: '100%', marginTop: '20px'}}>
                        <Journey text={journeyObject}/>
                    </div>
                    <div className='timeline-bar-container'>
                        <div className='timeline-bar'>
                            <p id='first-text'>Uni - Year 1</p>
                            <div onClick={() => setJourneyObject({
                                title: 'University Of Salford - Year 1', 
                                subTitle: 'BSc Computer Science with Web Development', 
                                description: "During this time I have been trained on the basics of Web Development technologies by taking part into projects adopting HTML, CSS and JavaScript. In addition, I have learned the key skills to efficiently create a relation database using SQL.",
                                skills: ['html', 'css', 'javascript', 'sql', 'linux']})} 
                                className='timeline-first-point'></div>

                            <p id='second-text'>Uni - Year 2</p>
                            <div onClick={() => setJourneyObject({
                                title: 'University Of Salford - Year 2', 
                                subTitle: 'BSc Computer Science with Web Development', 
                                description: "Writing efficient lines of codes to create a function website was at the forefront of the objectives to achieve this year. In collaboration with Competa IT I have worked along side a client and a team to create a functional certification web based system using HTML, CSS, JavaScript and PHP.",
                                skills: ['html', 'css', 'javascript', 'sql', 'php', 'java']})}
                                className='timeline-second-point'></div>

                            <p id='third-text'>Uni - Year 3</p>
                            <div onClick={() => setJourneyObject({
                                title: 'University Of Salford - Final Year', 
                                subTitle: 'BSc Computer Science with Web Development', 
                                description: "This year I trained to work more comfortably and professionally with advanced techonologies like APIs and frameworks such as PHP-based Symfony. Furthermore, for my final year project I developed an automatic boxing result prediction web-based system using JavaScript and NodeJS.",
                                skills: ['html', 'css', 'javascript', 'nodejs', 'php', 'symfony']})} 
                                className='timeline-third-point'></div>

                            <p id='fourth-text'>Bootcamp</p>
                            <div onClick={() => setJourneyObject({
                                title: 'Skills City', 
                                subTitle: 'Software Engineering Bootcamp Experience', 
                                description: "Thanks to this experience I was able to further expand knowledge on web development tools like React. Additionally, during this bootcamp I was placed in a team with a client where I was resposible for the development of a booking managment web-based system for a private surgery; I got this done by adopting key web technologies like Python-based framework Django and Github.",
                                skills: ['html', 'css', 'javascript', 'react', 'python', 'django-white', 'github', 'bootstrap']})} 
                                className='timeline-fourth-point'></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FullAbout;