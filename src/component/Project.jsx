import Header from "./Header";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";
import pic1 from '../assets/project 1.png';
import pic2 from '../assets/project 2.png';
import pic3 from '../assets/project 3.png';
import pic4 from '../assets/project 4.png';
import pic5 from '../assets/cr.gif';

function Project() {
    const projects = [
        {
            id: 1,
            title: "FYPWise",
            image: pic1,
            link: "https://imran7868.ct.ws/FYPWise-web/",
            github: "https://github.com/FYPWise/FYPWise-web",
            description: "A group project managing students' FYP through a website.",
            tags: ["HMTL/CSS","JavaScript","MySQL","InfinityFree","MVC built pattern","Web App"],
            details: {
                inputs: [
                    "Student: 1211101935 (123)",
                    "Lecturer: L001 (123)",
                    "Admin: A001 (123)"
                ]
            }
        },
        {
            id: 2,
            title: "Notes",
            image: pic2,
            link: "https://imran7868.playcode.io/",
            github: "https://github.com/MohamedImran7868/Quote-Machine",
            description: "A clean and intuitive note-taking application built with ReactNative and Expo.",
            tags: ["React","Expo","Mobile App", "Productivity"],
            details: {
                features: [
                    "Add New Notes - Quickly create notes with titles and content",
                    "Edit Existing Notes - Modify your notes anytime",
                    "Database - Notes saved in MariaDB (hosted by appwrite)",
                    "Clean UI - Minimalist interface focused on your content",
                    "Authentication - Requires Login or signup"
                ]
            }
        },
        {
            id: 3,
            title: "Quote Machine",
            image: pic3,
            link: "https://imran7868.playcode.io/",
            github: "https://github.com/MohamedImran7868/Quote-Machine",
            description: "Generates quotes and allows retweeting via Twitter button.",
            tags: ["React","Web App"],
            details: {}
        },
        {
            id: 4,
            title: "Pokemon Stat Search",
            image: pic4,
            link: "https://imran-pokemon-fetch-api.tiiny.site/",
            github: "https://github.com/MohamedImran7868/Pokemon",
            description: "Retrieves and displays attributes of Pokémon by name or ID.",
            tags: ["HMTL/CSS","JavaScript", "API Integration"],
            details: {
                inputs: [
                    "Pikachu (name)",
                    "2 (id)"
                ]
            }
        },
        {
            id: 5,
            title: "Cash Register",
            image: pic5,
            link: "https://determined-coyote.static.domains/",
            github: "https://github.com/MohamedImran7868/Cash-Register",
            description: "Calculates change based on user input.",
            tags: ["HMTL/CSS","JavaScript"],
            details: {}
        }
    ];

    return (
        <>
            <Header/>
            <div className="project-container">
                <h1 className="project-title">MY ART</h1>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="card-header">
                                <img src={project.image} alt={project.title} className="card-image"/>
                                <div className="card-title-group">
                                    <h3 className="card-title">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="github-icon" size={24}/>
                                    </a>
                                </div>
                                <div className="card-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-description">{project.description}</p>
                                
                                {project.details.inputs && (
                                    <>
                                        <h4>Sample Input:</h4>
                                        <ul className="card-list">
                                            {project.details.inputs.map((input, index) => (
                                                <li key={index}>{input}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                
                                {project.details.features && (
                                    <>
                                        <h4>Features:</h4>
                                        <ul className="card-list">
                                            {project.details.features.map((feature, index) => (
                                                <li key={index}>
                                                    <strong>{feature.split(' - ')[0]}</strong> - {feature.split(' - ')[1]}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="more-projects">
                    <p>For more: <a href="https://github.com/MohamedImran7868/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" size={24}/> GitHub
                    </a></p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Project;