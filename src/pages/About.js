import Navbar from "../components/NavBar"
import "../styles/About.css"

const AboutPage = () => {
    return(
        <div className="main div">
            <Navbar />
            <div className="div-1">
                <p className="role" >designer</p>
                <p className="skill" >UI/UX | Branding | Graphic Design</p>
                <p>Click anywhere to view more...</p>
            </div>
            <div className="div-2"></div>
            <div className="div-3"></div>
            <div className="div-4"></div>
        </div>
    )
}

export default AboutPage