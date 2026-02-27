import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './StudentDashboardCourses.css';
import { useNavigate } from 'react-router-dom';

import course1Img from './assets/course1.jpg';
import course2Img from './assets/course2.jpg';
import course3Img from './assets/course3.jpg';
import course4Img from './assets/course4.jpg';
import course5Img from './assets/course5.jpg';
import course6Img from './assets/course6.jpg';
import course7Img from './assets/course7.jpg';
import course8Img from './assets/course8.jpg';
import course9Img from './assets/course9.jpg';
import course10Img from './assets/course10.jpg';
import course11Img from './assets/course11.jpg';
import course12Img from './assets/course12.jpg';
import course13Img from './assets/course13.jpg';
import course14Img from './assets/course14.jpg';
import course15Img from './assets/course15.jpg';
import course16Img from './assets/course16.jpg';
import studentAvatarImg from './assets/student-avatar.jpg';

const courses = [
  {
    img: course10Img,
    title: "Premiere Pro CC for Beginners: Video Editing Introduction",
    subtitle: "7. Adding Content to Our Website",
    button: "Watch Lecture",
    status: "26% Completed",
  },
  {
    img: course11Img,
    title: "Graphic Design Masterclass - Learn GREAT Design",
    subtitle: "17. The Dark Art of Centering Elements with CSS",
    button: "Watch Lecture",
    status: "21% Completed",
  },
  {
    img: course12Img,
    title: "Angular - The Complete Guide (2021 Edition)",
    subtitle: "54. CSS Static and Relative Positioning",
    button: "Watch Lecture",
    status: null,
  },
  {
    img: course13Img,
    title: "Complete Blender Creator: Learn 3D Modelling",
    subtitle: "6. Learn More About Typography",
    button: "Watch Lecture",
    status: "52% Completed",
  },
  {
    img: course14Img,
    title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
    subtitle: "1. Introductions",
    button: "Watch Lecture",
    status: null,
  },
  {
    img: course15Img,
    title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites",
    subtitle: "1. Introductions",
    button: "Watch Lecture",
    status: null,
  },
  {
    img: course16Img,
    title: "Instagram Marketing 2021: Complete Guide to Instagram Growth",
    subtitle: "54. CSS Static and Relative Positioning",
    button: "Watch Lecture",
    status: "52% Completed",
  },
  {
    img: course5Img,
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner",
    subtitle: "91. CSS Float and Clear",
    button: "Watch Lecture",
    status: "13% Completed",
  },
  {
    img: course6Img,
    title: "Automate the Boring Stuff with Python Programming",
    subtitle: "3. Absolute positioning",
    button: "Watch Lecture",
    status: "34% Completed",
  },
  {
    img: course7Img,
    title: "Machine Learning A-Z™: Hands-On Python & R in Data Science",
    subtitle: "93. Font Styling in Our Personal Site",
    button: "Watch Lecture",
    status: "31% Completed",
  },
  {
    img: course8Img,
    title: "Selenium WebDriver with Java - Basics to Advanced",
    subtitle: "31. Learn More About Web Design",
    button: "Watch Lecture",
    status: "34% Completed",
  },
  {
    img: course9Img,
    title: "Data Structures & Algorithms Essentials (2021)",
    subtitle: "8. CSS Sizing",
    button: "Watch Lecture",
    status: null,
  },
  {
    img: course1Img,
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    subtitle: "6. Learn More About Typography",
    button: "Watch Lecture",
    status: "51% Completed",
  },
  {
    img: course2Img,
    title: "Mega Digital Marketing Course A-Z: 12 Courses in 1",
    subtitle: "6. Learn More About Typography",
    button: "Watch Lecture",
    status: "12% Completed",
  },
  {
    img: course3Img,
    title: "Adobe Premiere Pro CC - Advanced Training Course",
    subtitle: "3. Absolute positioning",
    button: "Watch Lecture",
    status: "41% Completed",
  },
  {
    img: course4Img,
    title: "iPhone Photography | Take Professional Photos With Your Phone",
    subtitle: "8. CSS Sizing",
    button: "Watch Lecture",
    status: "62% Completed",
  },
];

export default function StudentDashboardCourses() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="student-dashboard-top-bg"></div>
      <div className="student-dashboard-bg">
        <div className="student-dashboard-profile-bg">
          <div className="student-dashboard-profile-card">
            <div className="student-dashboard-profile-content">
              <img className="student-dashboard-avatar" src={studentAvatarImg} alt="Student" />
              <div className="student-dashboard-info">
                <div className="student-dashboard-name">Kevin Gilbert</div>
                <div className="student-dashboard-role">Web Designer & Best-Selling Instructor</div>
              </div>
            </div>
            <button className="student-dashboard-instructor-btn" onClick={() => navigate('/instructor-dashboard')}>Become Instructor <span className="arrow">→</span></button>
            <div className="student-dashboard-tabs">
              <span onClick={() => navigate('/student-dashboard')} style={{cursor:'pointer'}}>Dashboard</span>
              <span className="active" style={{color:'#ff6b35', fontWeight:700, position:'relative', display:'inline-block'}}>Courses
              </span>
              <span onClick={() => navigate('/student-dashboard-teachers')} style={{cursor:'pointer'}}>Teachers</span>
              <span onClick={() => navigate('/student-dashboard-message')} style={{cursor:'pointer'}}>Message</span>
              <span onClick={() => navigate('/student-dashboard-wishlist')} style={{cursor:'pointer'}}>Wishlist</span>
              <span onClick={() => navigate('/student-dashboard-purchase-history')} style={{cursor:'pointer'}}>Purchase History</span>
              <span onClick={() => navigate('/student-dashboard-settings')} style={{cursor:'pointer'}}>Settings</span>
            </div>
          </div>
        </div>
        {/* Heading for Courses */}
        <div className="student-dashboard-heading student-dashboard-courses-heading">Courses (57)</div><br></br>
        {/* Filters Section*/}
        <div className="student-dashboard-courses-filters-row">
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Search:</label>
            <input className="student-dashboard-courses-search" placeholder="Search in your courses..." />
          </div><br></br>
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Sort by:</label>
            <select className="student-dashboard-courses-sort" defaultValue="Latest">
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Status:</label>
            <select className="student-dashboard-courses-status" defaultValue="All Courses">
              <option>All Courses</option>
              <option>Completed</option>
              <option>Active</option>
            </select>
          </div>
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Teacher:</label>
            <select className="student-dashboard-courses-teacher" defaultValue="All Teachers">
              <option>All Teachers</option>
              <option>Teacher 1</option>
              <option>Teacher 2</option>
            </select>
          </div>
        </div>
        {/* Course Grid */}
        <div className="student-dashboard-course-grid">
          {courses.map((course, idx) => (
            <div className="student-dashboard-course-card" key={idx}>
              <img className="student-dashboard-course-img" src={course.img} alt={course.title} />
              <div className="student-dashboard-course-content">
                <div className="student-dashboard-course-title">{course.title}</div>
                <div className="student-dashboard-course-subtitle">{course.subtitle}</div>
                <div className="student-dashboard-course-actions">
                  <button className="student-dashboard-course-btn">{course.button}</button>
                  {course.status && <span className="student-dashboard-course-status">{course.status}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="student-dashboard-pagination">
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-circle">
            <span style={{color: '#ff6b35', fontSize: '1.2rem'}}>&larr;</span>
          </button>
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-faded">01</button>
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-active">02</button>
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-faded">03</button>
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-faded">04</button>
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-faded">05</button>
          <button className="student-dashboard-pagination-btn student-dashboard-pagination-circle">
            <span style={{color: '#ff6b35', fontSize: '1.2rem'}}>&rarr;</span>
          </button>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
}
