import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">Cold Brew Code</p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Cold Brew Code. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
