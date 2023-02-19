import './App.scss';
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Work from './Components/Work';
import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import FullWork from './Components/FullWork';
import FullAbout from './Components/FullAbout';
import FullContact from './Components/FullContact';

function App() {
  const navigate = useNavigate();

    const goToPage = (page) => {
        navigate('/' + page);
    };

  //Switch CSS styling and close appropriate window based on navbar button state
  const [isWorkActive, setWorkActive] = useState('false');
  const [isAboutActive, setAboutActive] = useState('false');
  const [isContactMeActive, setContactMeActive] = useState('false');

  //Check window width of the user's browser
  const [width, setWidth] = useState(window.innerWidth);

  //Check browser windows size:
  //Detect if user is using a desktop, tablet or mobile device
  const detectWindowSize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', detectWindowSize);
    return () => {
      window.removeEventListener('resize', detectWindowSize);
    }
  }, []);

  let isMobile = width <= 850;
  
  const handleNavigation = (buttonName) => {
    
    const navbarButtons = document.querySelector('.nav-bar-wrapper').childNodes;
    
    //Mobile and cross page navigation:
    //Only allow one button to be active and direct to appropriate page 
    if(isMobile || window.location.pathname != '/') {

      //Toggle navbar CSS active styling and redirect
      if(buttonName == 'about') {
        navbarButtons[0].classList.remove('navbar-active');
        navbarButtons[1].classList.remove('navbar-active');
        navbarButtons[2].classList.add('navbar-active');
        goToPage('about');
      }

      if(buttonName == 'work') {
        navbarButtons[0].classList.remove('navbar-active');
        navbarButtons[1].classList.add('navbar-active');
        navbarButtons[2].classList.remove('navbar-active');
        goToPage('work');
      }

      if(buttonName == 'contact') {
        navbarButtons[0].classList.add('navbar-active');
        navbarButtons[1].classList.remove('navbar-active');
        navbarButtons[2].classList.remove('navbar-active');
        goToPage('contact');
      }
    }

    //Desktop home navigation:
    //Simply switch boolean to make windows visible and button active
    if(!isMobile && window.location.pathname == '/') {
      if(buttonName == 'work') {
        setWorkActive(!isWorkActive);
        if (isWorkActive ? navbarButtons[1].classList.add('navbar-active') : navbarButtons[1].classList.remove('navbar-active'));
      }
      else if(buttonName == 'about') {
        setAboutActive(!isAboutActive);
        if (!isAboutActive ? navbarButtons[2].classList.add('navbar-active') : navbarButtons[2].classList.remove('navbar-active'));
      }
      else if(buttonName == 'contact') {
        setContactMeActive(!isContactMeActive);
        if (isContactMeActive ? navbarButtons[0].classList.toggle('navbar-active') : navbarButtons[0].classList.remove('navbar-active'));
      }
    }
  };

  return (
    <div>
      <Container className="header-container" fluid>
        <Row>
              <Col className="nav-bar-wrapper" xs={12}>
                <div 
                  style={{marginRight: '0px'}} 
                  onClick={() => handleNavigation('contact')}>
                  <span>contact me</span>
                </div>

                <div 
                  onClick={() => handleNavigation('work')}>
                  <span>work</span>
                </div>

                <div 
                  className='navbar-active'
                  onClick={() => handleNavigation('about')}>
                  <span>about</span>
                </div>
              </Col>
        </Row>
      </Container>

      <div className="desktop-wrapper">
          <Routes>
            <Route path='/' element={isMobile ? <FullAbout /> : [<About active={isAboutActive}/>,<Contact active={!isContactMeActive}/>,<Work active={!isWorkActive}/>]}></Route>
            <Route path='/work' element={<FullWork/>}></Route>
            <Route path='/about' element={<FullAbout/>}></Route>
            <Route path='/contact' element={<FullContact/>}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
