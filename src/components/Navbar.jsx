import { useState } from "react";
import "./navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <span className="nav-brand">Cold Brew Code</span>
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