import { useState } from "react";
import "./Header.css";

function Header({ onBrandClick, onNavigateToSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSectionClick = (event, targetIndex) => {
        const handled = onNavigateToSection?.(targetIndex);
        setMenuOpen(false);

        if (handled) {
            event.preventDefault();
        }
    };

    return (
        <header role="banner" className="header">
            <nav aria-label="Main navigation">
                <a
                    className="nav-brand"
                    href="/#hero"
                    onClick={(event) => {
                        if (onBrandClick) {
                            event.preventDefault();
                            onBrandClick();
                        }
                    }}
                >
                    <img src="./cb-logo.svg" alt="Cold Brew Code" className="nav-logo" />
                </a>
                <button
                className="nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                <ul className={`nav-links${menuOpen ? " open" : ""}`}>
                    <li><a href="/#about" className="nav-link" onClick={(event) => handleSectionClick(event, 1)}>About</a></li>
                    <li><a href="/#team" className="nav-link" onClick={(event) => handleSectionClick(event, 2)}>Team</a></li>
                    <li><a href="/#projects" className="nav-link" onClick={(event) => handleSectionClick(event, 3)}>Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
