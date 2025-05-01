import Navbar from "../components/NavBar"
import "../styles/About.css"

const AboutPage = () => {
    return(
        <div className="main div">
            <Navbar />
            <div className="header">
                <p>INTRESTS</p>
                <div className="intrest">
                    <div className="coding"></div>
                    <div className="designing"></div>
                    <div className="editing"></div>
                    <div className="photography"></div>
                </div>
            </div>

        </div>
    )
}

export default AboutPage