import "../styles/NavBar.css";
import vansh_lp from '../images/vansh-left-pic-01.png'
import pdfIcon from '../images/pdf.png'
import resumeFile from '../images/Vansh-Resume.png'

function Navbar() {

  return (
        <div>
            <nav className="navbar">
            <a href="/">
                    <img src={vansh_lp} className="vansh_lp" alt="Home" />
            </a>
            <ul className="nav-list">
                <li><a href="#">Home </a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="button-carry">
                <a href={resumeFile}  target="_blank" rel="noopener noreferrer" className="download-button">
                    <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
                    <span>Download Resume</span>
                </a>
            </div>
            </nav>
    </div>
  );
}

export default Navbar;
