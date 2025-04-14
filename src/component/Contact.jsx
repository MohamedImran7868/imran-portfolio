import Header from "./Header";
import Footer from "./Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser' 

function Contact(){
    const sentEmail = (e) => {
        e.preventDefault();
        alert("Email Sent");

        emailjs.sendForm('service_t8aoi7x', 'template_8hm7fjv', e.target, 'LKz3fqE9oYlqBSyKn')

        document.getElementById('form').reset();
        e.target.reset();
    }

    return(
        <>
        <Header/>
        <div className="contact-container">
            <div className="right">
                <div className="top-right">
                    <h1 className="connect">Connect With Me!</h1>
                </div>
                <div className="bottom-right">
                    <p>Other:</p> 
                    <a href="https://www.linkedin.com/in/mohamed-imran-9b618a2a7/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="home-icon" size={50}/></a>
                    <a href="https://github.com/MohamedImran7868/" target="_blank" rel="noopener noreferrer"><FaGithub className="github-icon" size={50}/></a>
                </div>
            </div>
            <div className="Left">
                <p>Email:</p>
                <form className="form" onSubmit={sentEmail} id="form">
                    <input type="text" placeholder="Your name" name="name" className="input" required/>
                    <input type="email" placeholder="Your email" className="input" name="email" required/>
                    <textarea placeholder="Message" className="textarea"  name="message" required></textarea>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Contact;