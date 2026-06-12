import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={`${import.meta.env.BASE_URL}cb-wordmark.svg`}
        alt="Cold Brew Code"
        className="footer-brand"
      />
      <p className="footer-copy">&copy; {new Date().getFullYear()} Cold Brew Code LLC. All rights reserved.</p>
      <nav className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </nav>
    </footer>
  );
}

export default Footer;
