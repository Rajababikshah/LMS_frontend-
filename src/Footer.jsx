import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FooterSection.css";


function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer-section">
      <div className="footer-bottom">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">E-tutor</span>
          </div>
          <p>Aliquam rhoncus ligula est, <br />non pulvinar elit convallis nec.<br /> Donec mattis odio at.</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#" className="active"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>TOP 4 CATEGORY</h4>
            <ul>
              <li>Development</li>
              <li>Finance & Accounting</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>About</li>
              <li onClick={() => navigate('/instructor-dashboard')}>Become Instructor</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>DOWNLOAD OUR APP</h4>
            <div className="footer-apps">
              <a className="app-btn app-store">Download now<br />App Store</a>
              <a className="app-btn play-store">Download now<br />Play Store</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
