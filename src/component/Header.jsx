import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="navbar-container">
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