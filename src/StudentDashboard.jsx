import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './StudentDashboard.css';
import { useNavigate } from 'react-router-dom';

import course1Img from './assets/course1.jpg';
import course2Img from './assets/course2.jpg';
import course3Img from './assets/course3.jpg';
import course4Img from './assets/course4.jpg';
import studentAvatarImg from './assets/student-avatar.jpg';

const courses = [
  {
    img: course1Img,
    title: "Reiki Level I, II and Master/Teacher Program",
    subtitle: "1. Introductions of Reiki - What is Reiki and how does it work?",
    progress: null,
    button: "Watch Lecture",
    status: null,
  },
  {
    img: course2Img,
    title: "The Complete 2021 Web Development Bootcamp",
    subtitle: "167. What You'll Need to Get Started - Setup",
    progress: "61% Completed",
    button: "Watch Lecture",
    status: "61% Completed",
  },
  {
    img: course3Img,
    title: "Copywriting - Become a Freelance Copywriter of projects",
    subtitle: "1. How to get started with figma and design tools",
    progress: null,
    button: "Watch Lecture",
    status: null,
  },
  {
    img: course4Img,
    title: "2021 Complete Python Bootcamp From Zero to...",
    subtitle: "9. Advanced CSS - Selector Priority",
    progress: "12% Completed",
    button: "Watch Lecture",
    status: "12% Completed",
  },
];

export default function StudentDashboard() {
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
              <span className="active">Dashboard</span>
              <span onClick={() => navigate('/student-dashboard-courses')} style={{cursor:'pointer'}}>Courses</span>
              <span>Teachers</span>
              <span>Message</span>
              <span>Wishlist</span>
              <span>Purchase History</span>
              <span>Settings</span>
            </div>
          </div>
        </div>
        {/* Dashboard Heading */}
        <div className="student-dashboard-heading">Dashboard</div>
        {/* Dashboard Stats */}
        <div className="student-dashboard-stats">
          <div className="stat-card stat-enrolled">
            <div className="stat-icon-box"><span className="stat-icon">▶️</span></div>
            <div className="stat-info">
              <div className="stat-value">957</div>
              <div className="stat-label">Enrolled Courses</div>
            </div>
          </div>
          <div className="stat-card stat-active">
            <div className="stat-icon-box"><span className="stat-icon">📘</span></div>
            <div className="stat-info">
              <div className="stat-value">6</div>
              <div className="stat-label">Active Courses</div>
            </div>
          </div>
          <div className="stat-card stat-completed">
            <div className="stat-icon-box"><span className="stat-icon">🏆</span></div>
            <div className="stat-info">
              <div className="stat-value">951</div>
              <div className="stat-label">Completed Courses</div>
            </div>
          </div>
          <div className="stat-card stat-instructors">
            <div className="stat-icon-box"><span className="stat-icon">👤</span></div>
            <div className="stat-info">
              <div className="stat-value">241</div>
              <div className="stat-label">Course Instructors</div>
            </div>
          </div>
        </div>
        {/* Course Grid */}
        <div className="student-dashboard-section-title">Let's start learning, Kevin</div>
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
        {/* Arrows */}
        <div className="student-dashboard-arrows">
          <button className="student-dashboard-arrow-btn">←</button>
          <button className="student-dashboard-arrow-btn" onClick={() => navigate('/student-dashboard-courses')}>→</button>
        </div><br></br>
      </div>
      <Footer />
    </>
  );
}
