import './App.css';
import Navbar from './components/NavBar';
import TypeWriterr from './components/TypeWriter';
import vanshmain from "./images/vansh-main.jpg"
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
                <p>Hello, I'm</p>
                <p>Vansh Patel</p>
                <TypeWriterr />
                <div className="logos1">
                  <img src={github1} className="github1" alt="github1" />
                  <img src={linkedin1} className="linkedin1" alt="linkedin1" />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
