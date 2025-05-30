import React, { useState } from 'react';
import '../styles/MainPage.css';
import Navbar from '../components/NavBar';
import TypeWriter from '../components/TypeWriter';
import SplashScreen from '../components/SplashScreen';
import vanshmain from "../images/vansh-main.jpg";
import aboutvansh from "../images/about-vansh.jpg";
import github1 from "../images/github.png";
import linkedin1 from "../images/linkedin.png";
import Footer from '../components/Footer';

function MainPage() {
    const [showSplash, setShowSplash] = useState(true);
  
    return (
      <div className="App">
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <Navbar />
            <div className="main-section">
              <div className="profile">
                <div className="image">
                  <img src={vanshmain} className="vanshmain" alt="vanshmain" />
                </div>
                <div className="info">
                  <p className="p1">Hello, I'm</p>
                  <p className="name1">Vansh Patel</p>
                    <div>
                      <TypeWriter />
                    </div>
                  <div className="logos1">
                    <img src={github1} className="github1" alt="github1" />
                    <img src={linkedin1} className="linkedin1" alt="linkedin1" />
                  </div>
                </div>
              </div>
              <hr className="faded-hr" />
              <div className='about-section'>
                <div className='moreinfo'>
                  <h1>ABOUT ME</h1>
                </div>
                <div className="facts">
                  <p>I'm a full-stack developer and graphic designer with a passion for creating dynamic web applications and stunning visual designs. I specialize in building modern frontends with React and Tailwind CSS, and backend systems with Node.js and Python. As a graphic designer, I focus on crafting intuitive user interfaces and visually appealing assets. My goal is to merge beautiful design with seamless functionality to create impactful user experiences. Outside of coding, I'm constantly exploring new design techniques and staying updated with the latest design trends.</p>
                  <img src={aboutvansh} className="aboutvansh" alt="aboutvansh" />
                </div>
                <div className='intrests'>
                  <div className='div1'> 
                  <h1 className='intrest-h1'>INTERESTS</h1>
                  <ul>
                    <li>Web Development</li>
                    <li>Graphic Design</li>
                    <li>UI/UX Design</li>
                    <li>Photography</li>
                    <li>Traveling</li>
                  </ul>
                  </div>
                  <div className='div2'> 
                  <h1 className='intrest-h2'>EDUCATION</h1>
                  <ul>
                    <li>
                      Melvin Jones Lions Academy
                      <br></br>
                      <span className='ssspan'>
                        Year 1 - Year 12
                      </span>
                      <br></br>
                      <span className='sspan'>
                        Sept 2012 - Sept 2024
                      </span>
                      </li>
  
                      <li>
                      Kabarak University, Nakuru
                      <br></br>
                      <span className='ssspan'>
                        Diploma in Computer Science
                      </span>
                      <br></br>
                      <span className='sspan'>
                        Sept 2024 - Present
                      </span>
                      </li>
  
                      <li>
                      Rift Koders
                      <br></br>
                      <span className='ssspan'>
                        Full Stack Engineering Student
                      </span>
                      <br></br>
                      <span className='sspan'>
                        August 2024 - Present
                      </span>
                      </li>
                  </ul>
                  </div>
                </div>
                <hr className="faded-hr" />
                <div className="social-container">
                  <h1 className="title">FIND ME ON</h1>
                  <p className="subtitle">
                    Feel free to <span className="highlight">connect</span> with me
                  </p>
                  <div className="icons">
                    <a href="https://github.com/patel-vansh1607" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vansh-patel-72650b26a/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
              </div>
              </div>
              <Footer />
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default MainPage;
  
  