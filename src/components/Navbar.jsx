import { useState } from "react";
import "./navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <a className="nav-brand" href="#">
                <img src="/cb-logo.png" alt="Cold Brew Code" className="nav-logo" />
            </a>
            <button
                className="nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                {menuOpen ? "✕" : "☰"}
            </button>
            <ul className={`nav-links${menuOpen ? " open" : ""}`}>
                <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#team" className="nav-link" onClick={() => setMenuOpen(false)}>Team</a></li>
                <li><a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;