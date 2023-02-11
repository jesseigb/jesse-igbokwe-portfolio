import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Work from './Components/Work';
import {Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import FullWork from './Components/FullWork';
import FullAbout from './Components/FullAbout';

function App() {

  //Switch CSS styling and close appropriate window based on navbar button state
  const [isWorkActive, setWorkActive] = useState('false');
  const [isAboutActive, setAboutActive] = useState('false');
  const [isContactMeActive, setContactMeActive] = useState('false');

  // Depending on which navbar button has been clicked switch boolean
  const handleToggle = (buttonName) => {
    if(buttonName == 'work') {
      setWorkActive(!isWorkActive);
    }
    else if(buttonName == 'about') {
      setAboutActive(!isAboutActive);
    }
    else if(buttonName == 'contact') {
      setContactMeActive(!isContactMeActive);
    }
  };

  return (
    <div>
      <Container className="header-container" fluid>
        <Row>
              <Col className="nav-bar-wrapper" xs={12}>
                <div style={{marginRight: '0px'}} onClick={() => handleToggle('contact')} className={!isContactMeActive ? "navbar-active" : null}><span>contact me</span></div>
                <div onClick={() => handleToggle('work')} className={!isWorkActive ? "navbar-active" : null}><span>work</span></div>
                <div onClick={() => handleToggle('about')} className={isAboutActive ? "navbar-active" : null}><span>about</span></div>
              </Col>
        </Row>
      </Container>

      <div className="desktop-wrapper">
        <Router>
          <Routes>
            <Route path='/' element={[<About active={isAboutActive}/>,<Contact active={!isContactMeActive}/>,<Work active={!isWorkActive}/>]}></Route>
            <Route path='/work' element={<FullWork/>}></Route>
            <Route path='/about' element={<FullAbout/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
