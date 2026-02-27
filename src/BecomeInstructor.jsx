import React from "react";
import Navbar from "./Navbar";
import "./BecomeInstructor.css";
import insImage from "./assets/ins-image.jpg";
import desktopImg from "./assets/desktop.jpg";
import desktop2Img from "./assets/desktop2.jpg";
import desktop4Img from "./assets/desktop4.jpg";
import desktop5Img from "./assets/desktop5.jpg";
import desktop6Img from "./assets/desktop6.jpg";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

const BecomeInstructor = () => {
  const navigate = useNavigate();
  return (
  <div>
    <Navbar />
    {/* Header Section: Light gray background, centered heading and breadcrumb */}
    <div className="become-instructor-header-bg">
      <div className="become-instructor-header-content">
        <div className="become-instructor-header-title">Become an Instructor</div>
        <div className="become-instructor-header-breadcrumb">
          <span style={{ color: "#888" }}>Home</span>
          <span style={{ color: "#888" }}> / </span>
          <span style={{ color: "#888" }}>Become an instructor</span>
        </div>
      </div>
    </div>
    {/* Main Section: Left content, right image */}
    <div className="become-instructor-main-section">
      <div className="become-instructor-main-content">
        <div className="become-instructor-main-title">Become an Instuctor</div>
        <div className="become-instructor-main-desc">
          Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.
        </div>
        <button className="become-instructor-main-btn" onClick={() => navigate('/instructor-dashboard')}>Get Started</button>
      </div>
      <div className="become-instructor-main-img">
        <img src={insImage} alt="Become Instructor" />
      </div>
    </div><br></br>
    {/* Stats Row Section */}
    <div className="about-companies-stats-row" style={{ marginTop: 0 }}>
      <div className="about-companies-stats-row-inner">
        <div className="about-stat">
          <span className="stat-icon orange">
            {/* user group icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#ff6b35" strokeWidth="2">
                <circle cx="10" cy="14" r="4" />
                <circle cx="22" cy="14" r="4" />
                <path d="M4 24c0-3.314 3.582-6 8-6s8 2.686 8 6" />
                <path d="M18 24c0-2.209 2.686-4 6-4s6 1.791 6 4" />
              </g>
            </svg>
          </span>
          <span className="stat-main orange">67.1k</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon blue">
            {/* certificate icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="20" height="16" rx="2" stroke="#6366f1" strokeWidth="2" />
              <path d="M10 12h12M10 16h8" stroke="#6366f1" strokeWidth="2" />
            </svg>
          </span>
          <span className="stat-main blue">26k</span>
          <span className="stat-label">Certified Instructor</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon red">
            {/* globe icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="#ff5722" strokeWidth="2" />
              <ellipse cx="16" cy="16" rx="7" ry="12" stroke="#ff5722" strokeWidth="2" />
              <path d="M4 16h24" stroke="#ff5722" strokeWidth="2" />
            </svg>
          </span>
          <span className="stat-main red">72</span>
          <span className="stat-label">Country Language</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon green">
            {/* check badge icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="#22c55e" strokeWidth="2" />
              <path d="M11 17l3 3 7-7" stroke="#22c55e" strokeWidth="2" />
            </svg>
          </span>
          <span className="stat-main green">99.9%</span>
          <span className="stat-label">Success Rate</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon gold">
            {/* layers icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#ffb300" strokeWidth="2">
                <path d="M16 6l12 6-12 6-12-6 12-6z" />
                <path d="M4 18l12 6 12-6" />
                <path d="M4 24l12 6 12-6" />
              </g>
            </svg>
          </span>
          <span className="stat-main gold">57</span>
          <span className="stat-label">Trusted Companies</span>
        </div>
      </div>
    </div>
    {/* Why Teach Section */}
    <section className="become-instructor-why-section">
      <div className="become-instructor-why-inner">
        <div className="become-instructor-why-img">
          <img src={desktopImg} alt="Eduguard platform preview" />
        </div>
        <div className="become-instructor-why-content">
          <h2 className="become-instructor-why-title">Why you’ll start teaching on Eduguard</h2>
          <p className="become-instructor-why-desc">Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis.</p>
          <ul className="become-instructor-why-list">
            <li>
              <span className="why-check-icon">✔</span>
              <span>
                <strong>Tech your students as you want.</strong><br />
                Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.
              </span>
            </li>
            <li>
              <span className="why-check-icon">✔</span>
              <span>
                <strong>Manage your course, payment in one place</strong><br />
                Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.
              </span>
            </li>
            <li>
              <span className="why-check-icon">✔</span>
              <span>
                <strong>Chat with your students</strong><br />
                Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* Steps to Become Instructor Section */}
    <section className="become-instructor-steps-section">
      <h2 className="become-instructor-steps-title">How you'll become<br />successful instructor</h2>
      <div className="become-instructor-steps-grid">
        <div className="become-instructor-step-card">
          <div className="step-icon step-icon-blue">
            {/* certificate icon */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="24" height="20" rx="3" fill="#f3f0ff"/><rect x="12" y="16" width="16" height="2" rx="1" fill="#6366f1"/><rect x="12" y="20" width="10" height="2" rx="1" fill="#6366f1"/><rect x="8" y="10" width="24" height="20" rx="3" stroke="#6366f1" strokeWidth="2"/></svg>
          </div>
          <div className="step-title">1. Apply to become instructor.</div>
          <div className="step-desc">Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</div>
        </div>
        <div className="become-instructor-step-card">
          <div className="step-icon step-icon-red">
            {/* profile icon */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="24" height="20" rx="3" fill="#fff0f0"/><rect x="16" y="18" width="8" height="2" rx="1" fill="#ff6b35"/><rect x="16" y="22" width="8" height="2" rx="1" fill="#ff6b35"/><rect x="8" y="10" width="24" height="20" rx="3" stroke="#ff6b35" strokeWidth="2"/></svg>
          </div>
          <div className="step-title">2. Setup & edit your profile.</div>
          <div className="step-desc">Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.</div>
        </div>
        <div className="become-instructor-step-card">
          <div className="step-icon step-icon-orange">
            {/* play icon */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="24" height="20" rx="3" fill="#fff5f0"/><circle cx="20" cy="20" r="6" stroke="#ff6b35" strokeWidth="2" fill="#fff5f0"/><polygon points="19,17 25,20 19,23" fill="#ff6b35"/></svg>
          </div>
          <div className="step-title">3. Create your new course</div>
          <div className="step-desc">Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.</div>
        </div>
        <div className="become-instructor-step-card">
          <div className="step-icon step-icon-green">
            {/* handshake icon */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="24" height="20" rx="3" fill="#f0fff4"/><path d="M14 22l4 4 8-8" stroke="#22c55e" strokeWidth="2" fill="none"/><rect x="8" y="10" width="24" height="20" rx="3" stroke="#22c55e" strokeWidth="2"/></svg>
          </div>
          <div className="step-title">4. Start teaching & earning</div>
          <div className="step-desc">Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.</div>
        </div>
      </div>
    </section>
    {/* Instructor Rules & Regulations Section */}
    <section className="become-instructor-rules-section">
      <div className="become-instructor-rules-inner">
        <div className="become-instructor-rules-content">
          <h2 className="become-instructor-rules-title">Instructor rules & regulations</h2>
          <p className="become-instructor-rules-desc">Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem.</p>
          <ul className="become-instructor-rules-list">
            <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
            <li>Nam leo tortor, tempus et felis non.</li>
            <li>Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
            <li>Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpis.</li>
          </ul>
        </div>
        <div className="become-instructor-rules-img">
          <img src={desktop2Img} alt="Instructor teaching" />
        </div>
      </div>
    </section>
    {/* Support/Help Section */}
    <section className="become-instructor-help-section">
      <div className="become-instructor-help-inner">
        <div className="become-instructor-help-img">
          <img src={desktop4Img} alt="Support" />
        </div>
        <div className="become-instructor-help-content">
          <h2 className="become-instructor-help-title">Don’t worry we’re always<br />here to help you</h2>
          <p className="become-instructor-help-desc">Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim.</p>
          <ul className="become-instructor-help-list">
            <li><span className="help-arrow">→</span> Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.</li>
            <li><span className="help-arrow">→</span> Those who are looking to reboot their work life and try a new profession that.</li>
            <li><span className="help-arrow">→</span> Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
            <li><span className="help-arrow">→</span> Duis ornare enim ullamcorper congue.</li>
          </ul>
          <div className="become-instructor-help-contact">
            <span className="help-contact-icon">✉</span>
            <span className="help-contact-label">EMAIL US, ANYTIME ANYWHERE</span>
            <span className="help-contact-email">help.eduguard@gamil.com</span>
          </div>
        </div>
      </div>
    </section>
    {/* Success Story Section */}
    <section className="become-instructor-success-section">
      <div className="become-instructor-success-inner">
        <div className="become-instructor-success-content">
          <h2 className="become-instructor-success-title">20k+ Instructor created<br />their success story with eduguard</h2>
          <p className="become-instructor-success-desc">Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.</p>
          <div className="become-instructor-success-quote">
            <span className="success-quote-icon">99</span>
            <div className="success-quote-text">
              Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.
            </div>
          </div>
          <div className="success-nav-btns">
            <button className="success-nav-btn nav-btn-prev">←</button>
            <button className="success-nav-btn nav-btn-next">→</button>
          </div>
        </div>
        <div className="become-instructor-success-imgs">
          <img src={desktop5Img} alt="Success story" className="success-main-img" />
          {/* You can add more avatar images here for a grid effect if desired */}
        </div>
      </div>
    </section>
    {/* Call to Action Section */}
    <section className="become-instructor-cta-section">
      <div className="become-instructor-cta-inner">
        <div className="become-instructor-cta-content">
          <h2 className="become-instructor-cta-title">Start teaching with us<br />and inspire others</h2>
          <p className="become-instructor-cta-desc">Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
          <button className="become-instructor-cta-btn">Register Now</button>
        </div>
        <div className="become-instructor-cta-imgs">
          <div className="cta-img-slice cta-img-slice-left">
            <img src={desktop6Img} alt="Inspire" />
          </div>
          <div className="cta-img-slice cta-img-slice-right">
            <img src={desktop6Img} alt="Inspire" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default BecomeInstructor;
