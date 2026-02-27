import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './StudentDashboardCourses.css';
import { useNavigate } from 'react-router-dom';

import teacher1Img from './assets/teacher1.jpg';
import teacher2Img from './assets/teacher2.jpg';
import teacher3Img from './assets/teacher3.jpg';
import teacher4Img from './assets/teacher4.jpg';
import teacher5Img from './assets/teacher5.jpg';
import teacher6Img from './assets/teacher6.jpg';
import teacher7Img from './assets/teacher7.jpg';
import teacher8Img from './assets/teacher8.jpg';
import studentAvatarImg from './assets/student-avatar.jpg';

const instructors = [
  {
    img: teacher1Img,
    name: "Devon Lane",
    role: "Senior Developer",
    rating: 4.8,
    students: "854",
  },
  {
    img: teacher2Img,
    name: "Robert Fox",
    role: "UI/UX Designer",
    rating: 4.2,
    students: "197,637",
  },
  {
    img: teacher3Img,
    name: "Kathryn Murphy",
    role: "Adobe Instructor",
    rating: 4.8,
    students: "197,637",
  },
  {
    img: teacher4Img,
    name: "Jerome Bell",
    role: "Adobe Instructor",
    rating: 4.4,
    students: "2,711",
  },
  {
    img: teacher5Img,
    name: "Cody Fisher",
    role: "Digital Product Designer",
    rating: 3.5,
    students: "197,637",
  },
  {
    img: teacher6Img,
    name: "Jane Cooper",
    role: "Lead Developer",
    rating: 4.1,
    students: "982,941",
  },
  {
    img: teacher7Img,
    name: "Eleanor Pena",
    role: "Adobe Instructor",
    rating: 5.0,
    students: "451,444",
  },
  {
    img: teacher8Img,
    name: "Dianne Russell",
    role: "Lead Developer",
    rating: 4.7,
    students: "154,817",
  },
];

export default function StudentDashboardTeachers() {
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
              <span onClick={() => navigate('/student-dashboard-courses')} style={{cursor:'pointer'}}>Courses</span>
              <span className="active" style={{color:'#ff6b35', fontWeight:700, position:'relative', display:'inline-block'}}>Teachers
              </span>
              <span onClick={() => navigate('/student-dashboard-message')} style={{cursor:'pointer'}}>Message</span>
              <span onClick={() => navigate('/student-dashboard-wishlist')} style={{cursor:'pointer'}}>Wishlist</span>
              <span onClick={() => navigate('/student-dashboard-purchase-history')} style={{cursor:'pointer'}}>Purchase History</span>
              <span onClick={() => navigate('/student-dashboard-settings')} style={{cursor:'pointer'}}>Settings</span>
            </div>
          </div>
        </div>
        {/* Heading for Teachers */}
        <div className="student-dashboard-heading student-dashboard-courses-heading">Instructors (241)</div><br></br>
        {/* Filters Section */}
        <div className="student-dashboard-courses-filters-row">
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Search:</label>
            <input className="student-dashboard-courses-search" placeholder="Search in your teachers..." />
          </div><br></br>
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Courses:</label>
            <select className="student-dashboard-courses-sort" defaultValue="All Courses">
              <option>All Courses</option>
            </select>
          </div>
          <div className="student-dashboard-courses-filter-col">
            <label className="student-dashboard-courses-filter-label">Teacher:</label>
            <select className="student-dashboard-courses-teacher" defaultValue="All Teachers">
              <option>All Teachers</option>
            </select>
          </div>
        </div>
        {/* Instructor Grid */}
        <div className="student-dashboard-course-grid">
          {instructors.map((instructor, idx) => (
            <div className="student-dashboard-course-card instructor-card" key={idx}>
              <img className="student-dashboard-course-img instructor-card-img" src={instructor.img} alt={instructor.name} />
              <div className="student-dashboard-course-content instructor-card-content">
                <div className="student-dashboard-course-title instructor-card-title">{instructor.name}</div>
                <div className="student-dashboard-course-subtitle instructor-card-role">{instructor.role}</div>
                <div className="instructor-card-meta-row">
                  <span className="instructor-card-rating">&#9733; {instructor.rating}</span>
                  <span className="instructor-card-students">{instructor.students} students</span>
                </div>
                <button className="student-dashboard-course-btn instructor-card-btn" onClick={() => navigate('/student-dashboard-message')}>Send Message</button>
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
