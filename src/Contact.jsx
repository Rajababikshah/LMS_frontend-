import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";
import contactImg from "./assets/contact-img.png";
import LAImg from "./assets/LA.jpg";
import TokyoImg from "./assets/tokyo.jpg";
import MoscowImg from "./assets/moscow.jpg";
import MumbaiImg from "./assets/mumbai.jpg";
import contactHeadImg from "./assets/contact-head.png";
import MainSectionLayout from "./MainSectionLayout";

const branches = [
  {
    city: "Los Angeles, California",
    title: "Main Branch",
    address: "1702 Olympic Boulevard, Santa Monica, CA 90401",
    img: LAImg,
  },
  {
    city: "Tokyo, Japan",
    title: "East Asia Branch",
    address: "5 Chome-2-1 Ginza, Chuo City, Tokyo 104-0061",
    img: TokyoImg,
  },
  {
    city: "Moscow, Russia",
    title: "Europe Branch",
    address: "88 99 Arbat Street, Moscow, Russia 119019",
    img: MoscowImg,
  },
  {
    city: "Mumbai, India",
    title: "South Asia Branch",
    address: "Bandra Kurla Complex, Mumbai, India 400051",
    img: MumbaiImg,
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* Top Section: Heading and Breadcrumb (exactly like About page) */}
      <section className="about-top-section">
        <div className="about-top-heading">Contact</div>
        <div className="about-top-breadcrumb">
          <span className="about-breadcrumb-home">Home</span>
          <span className="about-breadcrumb-separator"> / </span>
          <span className="about-breadcrumb-current">Contact</span>
        </div>
      </section>
      <div className="contact-page">
        {/* Hero Section */}
        <MainSectionLayout
          title="Connect with us"
          desc="Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello."
          button={<><FaEnvelope style={{ marginRight: 8 }} />Copy Email</>}
          image={contactHeadImg}
        /><br></br><br></br>
        {/* Branches Section */}
        <section className="contact-branches-section">
          <div className="contact-branches-title">Our branches all over the world.</div>
          <div className="contact-branches-desc">
            Phasellus sed quam et eros faucibus cursus. Quisque mauris urna, imperdiet eu lobortis id, luctus ac erat nisl.
          </div>
          <div className="contact-branches-grid">
            {branches.map((branch, idx) => (
              <div className="contact-branch-card" key={idx}>
                <img className="contact-branch-img" src={branch.img} alt={branch.city} />
                <div className="contact-branch-info-ref">
                  <div className="contact-branch-title-ref">{branch.title}</div>
                  <div className="contact-branch-city-ref">{branch.city}</div>
                  <div className="contact-branch-address-ref">{branch.address}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Main Section */}
        <section className="contact-main-section-ref">
          <div className="contact-main-title-ref">Contact Us</div>
          <div className="contact-main-container-ref">
            <div className="contact-main-left-ref">
              <div className="contact-main-desc-ref">
                Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd love to meet.
              </div>
              <div className="contact-main-info-row-ref">
                <div className="contact-main-label-ref">ADDRESS</div>
                <div className="contact-main-value-ref">1702 Olympic Boulevard<br />Santa Monica, CA 90404</div>
              </div>
              <div className="contact-main-info-row-ref">
                <div className="contact-main-label-ref">PHONE NUMBER</div>
                <div className="contact-main-value-ref">(480) 555-0103<br />(219) 555-0114</div>
              </div>
              <div className="contact-main-info-row-ref">
                <div className="contact-main-label-ref">EMAIL ADDRESS</div>
                <div className="contact-main-value-ref">help.eduquard@gmail.com<br />career.eduquard@gmail.com</div>
              </div>
            </div>
            <div className="contact-main-right-ref">
              <div className="contact-form-title-ref">Get In touch</div>
              <div className="contact-form-desc-ref">Feel free contact with us, we love to make new partners & friends</div>
              <form className="contact-form-ref">
                <div className="contact-form-row-ref">
                  <input type="text" placeholder="First name..." required />
                  <input type="text" placeholder="Last name..." required />
                </div>
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Message Subject" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit" className="contact-form-btn-ref">
                  Send Message <span style={{ marginLeft: '8px' }}>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* Embedded Map Section*/}
      <section className="contact-map-section">
        <img
          src={contactImg}
          alt="Contact Map"
          className="contact-map-img"
        />
      </section>
      <Footer />
    </>
  );
}
