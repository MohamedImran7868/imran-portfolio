import Header from "./Header";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";
import pic1 from '../assets/project 1.png';
import pic2 from '../assets/project 2.png';
import pic3 from '../assets/project 3.png';
import pic4 from '../assets/project 4.png';

function Project(){
    return(
        <>
        <Header/>
        <div className="project-container">
            <h1 className="project-title">My Art</h1>
            <div className="project-list">
                <div className="project-item">
                    <img src={pic1} alt="Project 1" className="project-image"/>
                    <div className="project-details">
                        <a className="project-name" href="https://imran7868.ct.ws/FYPWise-web/" target="_blank">FYPWise</a>
                        <p className="project-description">A group project, done by 4 wizards. This project is about managing students FYP through a website.</p>
                        <p>Role: id (password)</p>
                        <p>Student: 1211101935 (123)</p>
                        <p>Lecturer: L001 (123)</p>
                        <p>Admin: A001 (123)</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src={pic2} alt="Project 2" className="project-image"/>
                    <div className="project-details">
                        <a className="project-name" href="https://imran-pokemon-fetch-api.tiiny.site/" target="_blank">Pokemon Stats Search</a>
                        <p className="project-description">A simple project that retrieve and display the attribute of entered pokemon name or id.</p>
                        <p>Pikachu (name)</p>
                        <p>2 (id)</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src={pic3} alt="Project 3" className="project-image"/>
                    <div className="project-details">
                        <a className="project-name" href="https://determined-coyote.static.domains/" target="_blank">Cash Register</a>
                        <p className="project-description">A simple project that show the changes given and remaining changes based on user input.</p>
                        <p>The Item Amount is fixed: $3.26</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src={pic4} alt="Project 4" className="project-image"/>
                    <div className="project-details">
                        <a className="project-name" href="https://imran7868.playcode.io/" target="_blank">Quote Machine</a>
                        <p className="project-description">A quote machine that generates quote.</p>
                    </div>
                </div>
            </div>
            <div className="others">
                <p>For more: <a href="https://github.com/MohamedImran7868/" target="_blank" rel="noopener noreferrer"><FaGithub className="github-icon" size={24}/></a></p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Project;