import Footer from "./Footer";
import Header from './Header';
import pic from '../assets/imran.webp';
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";

function Home(){
    return(
        <>
        <Header/>
            <div className='home-container'>
                <div className='home-left'>
                    <div className='home-details'>
                        <h1> Mohamed Imran</h1>
                        <p className='bio'>A passionate junior software developer who is ready to adventure the thrilling Technology world.</p>
                    </div>
                    <div className='home-btn-container'>
                        <a href="/imran-portfolio/resume.pdf" download>
                            <button className='resume-btn'>Resume</button>
                        </a>
                    </div>
                    <div className='inner-bottom'>
                        <div className='inner-bottom-left'>
                            <p className='work-title'>SOFTWARE DEVELOPER</p>
                            <p className='location'>Form <span className='nation'>MY</span></p>
                        </div>
                        <div className='inner-bottom-right'>
                            <a href="https://www.linkedin.com/in/mohamed-imran-9b618a2a7/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="home-icon" size={50}/></a>
                            <a href="https://github.com/MohamedImran7868/" target="_blank" rel="noopener noreferrer"><FaGithub className="github-icon" size={50}/></a>
                        </div>
                    </div>
                </div>
                <div className='home-right'> 
                    <img src={pic} alt="Imran" className='profile-pic'/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;