import './App.css';
import Navbar from './components/NavBar';
import TypeWriterr from './components/TypeWriter';
import vanshmain from "./images/vansh-main.jpg"
import aboutvansh from "./images/about-vansh.jpg"
import github1 from "./images/github.png"
import linkedin1 from "./images/linkedin.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-section">
        <div className="profile">
            <div className="image">
              <img src={vanshmain} className="vanshmain" alt="vanshmain" />
            </div>
            <div className="info">
                <p className="p1">Hello, I'm</p>
                <p className="name1">Vansh Patel</p>
                <TypeWriterr />
                <div className="logos1">
                  <img src={github1} className="github1" alt="github1" />
                  <img src={linkedin1} className="linkedin1" alt="linkedin1" />
                </div>
            </div>
        </div>
        <hr class="faded-hr" />
        <div className='about-section'>
             <div className='moreinfo'>
                <h1>ABOUT ME</h1>
            </div>
            <div className="facts">
            <p>I'm a full-stack developer and graphic designer with a passion for creating dynamic web applications and stunning visual designs. I specialize in building modern frontends with React and Tailwind CSS, and backend systems with Node.js and Python. As a graphic designer, I focus on crafting intuitive user interfaces and visually appealing assets. My goal is to merge beautiful design with seamless functionality to create impactful user experiences. Outside of coding, I'm constantly exploring new design techniques and staying updated with the latest design trends.</p>
              <img src={aboutvansh} className="aboutvansh" alt="aboutvansh" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
