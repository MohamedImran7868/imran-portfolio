import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
      const toggleDarkMode = () => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }
        setIsDarkMode(!isDarkMode);
      };
    const navigate = useNavigate();
    return (
        
        <div className="navbar-container">
            <button onClick={toggleDarkMode} className='dark-mode-btn'>
                {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="navbar">
                <button 
                    className="nav-btn" 
                    onClick={() => navigate('/')}
                    data-text="Home"
                >
                    <span>Home</span>
                </button>
                <button 
                    className="nav-btn" 
                    onClick={() => navigate('/about')}
                    data-text="About"
                >
                    <span>About</span>
                </button>
                <button 
                    className="nav-btn" 
                    onClick={() => navigate('/project')}
                    data-text="Project"
                >
                    <span>Project</span>
                </button>
                <button 
                    className="nav-btn" 
                    onClick={() => navigate('/contact')}
                    data-text="Contact"
                >
                    <span>Contact</span>
                </button>
            </div>
        </div>
    );
}

export default Header;