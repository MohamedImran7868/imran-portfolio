import Header from "./Header";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si"
import { SiCplusplus } from "react-icons/si";

function About(){
    return(
        <>
        <Header/>
        <div className="about-container">
            <div className="top-container">
                <h1 className="title">Achievement</h1>
                <div className="inner-container">
                    <div className="about-left">
                        <ul>
                            <li className="ahievement-list">Bachelor of Computer Science (Software Engineering)</li>
                            <li className="ahievement-list">4/9 Semester Dean List</li>
                            <li className="ahievement-list">CGPA: 3.71</li>
                        </ul>
                    </div>
                    <div className="about-right">
                        <ul>
                            <li className="ahievement-list">Participated in CodeNection 2024</li>
                            <li className="ahievement-list">Finished Several Online Courses</li>
                        </ul>
                    </div>
                    </div>
            </div>
            <hr />
            <div className="bottom-container">
                <h1 className="title">Skill</h1>
                <div className="skill">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <IoLogoJavascript />
                    <FaJava />
                    <FaPython />
                    <FaReact />
                    <SiPhp />
                    <SiMysql />
                    <SiCplusplus />
                </div>
            </div>
        </div>
        </>
    );
}

export default About;