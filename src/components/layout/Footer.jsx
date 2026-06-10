import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">Cold Brew Code</p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Cold Brew Code LLC. All rights reserved.</p>
      <nav className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </nav>
    </footer>
  );
}

export default Footer;
