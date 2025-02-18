// Footer component with social links
import '../../styles/Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsappSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const TopFooter = () => {
  return (
    // Main footer
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation and copyright */} 
        <div className="footer-text">
          <div className="footer-links-container">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          </div>
          <p>© 2025 acharyag.in</p>
        </div>
        {/*Social media icons*/}
        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaSquareXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsappSquare /></a>
        </div>
      </div>
    </footer>
  )
}

export default TopFooter