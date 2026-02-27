import React from "react";
import "./About.css";
import Footer from "./Footer";
import netflixLogo from "./assets/netflix.png";
import youtubeLogo from "./assets/youtube.png";
import googleLogo from "./assets/google.png";
import lenovoLogo from "./assets/lenovo.png";
import slackLogo from "./assets/slack.png";
import verizonLogo from "./assets/verizon.png";
import lexmarkLogo from "./assets/lexmark.png";
import microsoftLogo from "./assets/microsoft.png";
import MainSectionLayout from "./MainSectionLayout";

const About = () => (
  <div className="about-page">
    {/* Top Section: Heading and Breadcrumb */}
    <section className="about-top-section">
      <div className="about-top-heading">About</div>
      <div className="about-top-breadcrumb">
        <span className="about-breadcrumb-home">Home</span>
        <span className="about-breadcrumb-separator"> / </span>
        <span className="about-breadcrumb-current">About</span>
      </div>
    </section>
    {/* Timeline Section */}
    <MainSectionLayout
      title="We share knowledge with the world"
      desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla."
      image="https://images.pexels.com/photos/3775532/pexels-photo-3775532.jpeg"
    />
    {/* Companies & Stats Section - Unified Container */}
    <div className="about-companies-stats-container">
      <section className="about-companies">
        <div className="about-companies-inner">
          <div className="about-companies-left">
            <h2>We Just keep growing<br />with 6.3k Companies</h2>
            <p>Nullam egestas tellus at enim ornare tristique.<br />Class aptent taciti sociosqu ad litora torquent</p>
          </div>
          <div className="about-companies-right">
            <div className="about-companies-logos-grid">
              {[
                { name: "Netflix", logo: netflixLogo },
                { name: "YouTube", logo: youtubeLogo },
                { name: "Google", logo: googleLogo },
                { name: "Lenovo", logo: lenovoLogo },
                { name: "Slack", logo: slackLogo },
                { name: "Verizon", logo: verizonLogo },
                { name: "Lexmark", logo: lexmarkLogo },
                { name: "Microsoft", logo: microsoftLogo }
              ].map((company) => (
                <div className="about-company-logo-card" key={company.name}>
                  <img src={company.logo} alt={company.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="about-companies-stats-row">
        <div className="about-stat">
          <span className="stat-icon orange">{/* user group icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff6b35" strokeWidth="2"><circle cx="10" cy="14" r="4"/><circle cx="22" cy="14" r="4"/><path d="M4 24c0-3.314 3.582-6 8-6s8 2.686 8 6"/><path d="M18 24c0-2.209 2.686-4 6-4s6 1.791 6 4"/></g></svg>
          </span>
          <span className="stat-main orange">67.1k</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon blue">{/* certificate icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="8" width="20" height="16" rx="2" stroke="#6366f1" strokeWidth="2"/><path d="M10 12h12M10 16h8" stroke="#6366f1" strokeWidth="2"/></svg>
          </span>
          <span className="stat-main blue">26k</span>
          <span className="stat-label">Certified Instructor</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon red">{/* globe icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" stroke="#ff5722" strokeWidth="2"/><ellipse cx="16" cy="16" rx="7" ry="12" stroke="#ff5722" strokeWidth="2"/><path d="M4 16h24" stroke="#ff5722" strokeWidth="2"/></svg>
          </span>
          <span className="stat-main red">72</span>
          <span className="stat-label">Country Language</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon green">{/* check badge icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" stroke="#22c55e" strokeWidth="2"/><path d="M11 17l3 3 7-7" stroke="#22c55e" strokeWidth="2"/></svg>
          </span>
          <span className="stat-main green">99.9%</span>
          <span className="stat-label">Success Rate</span>
        </div>
        <div className="about-stat">
          <span className="stat-icon gold">{/* layers icon */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#ffb300" strokeWidth="2"><path d="M16 6l12 6-12 6-12-6 12-6z"/><path d="M4 18l12 6 12-6"/><path d="M4 24l12 6 12-6"/></g></svg>
          </span>
          <span className="stat-main gold">57</span>
          <span className="stat-label">Trusted Companies</span>
        </div>
      </div>
    </div>

    {/* Mission Section */}
    <section className="about-mission">
      <div className="about-mission-img">
        <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" alt="Mission" />
      </div>
      <div className="about-mission-content">
        <span className="about-mission-label">OUR ONE BILLION MISSION</span>
        <h2>Our one billion mission<br />sounds bold, We agree.</h2>
        <p>"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</p>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="about-gallery">
      <div className="about-gallery-content">
        <span className="about-gallery-label">OUR GALLERY</span>
        <h2>We've been here<br />almost 17 years</h2>
        <p>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula, torquent per conubia nostra.</p>
      </div>
      <div className="about-gallery-grid">
        {[
          "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg",
          "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
          "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
          "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
          "https://images.pexels.com/photos/1181288/pexels-photo-1181288.jpeg",
          "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg",
          "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
        ].map((src, i) => (
          <img src={src} alt="Gallery" key={i} />
        ))}
      </div>
    </section>

    {/* Quotes Section */}
    <section className="about-quotes">
      {[
        {
          quote: "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
          author: "Sundar Pichai",
          title: "Chief Chairman of Google",
          link: "Google"
        },
        {
          quote: "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
          author: "Satya Nadella",
          title: "CEO of Microsoft",
          link: "Microsoft"
        },
        {
          quote: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
          author: "Ted Sarandos",
          title: "Chief Executive Officer of Netflix",
          link: "Netflix"
        }
      ].map((q, i) => (
        <div className="about-quote-card" key={i}>
          <span className="about-quote-mark">“</span>
          <p>{q.quote}</p>
          <span className="about-quote-mark end">”</span>
          <div className="about-quote-author">
            <strong>{q.author}</strong>
            <span>{q.title}</span>
          </div>
        </div>
      ))}
    </section>

    <Footer />
  </div>
);

export default About;
