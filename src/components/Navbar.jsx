import "./navbar.css";

function Navbar() {
    return (
        <nav>
            <span className="nav-brand">Cold Brew Code</span>
            <ul className="nav-links">
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#team" className="nav-link">Team</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;