import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./InstructorDashboard.css";
import avatar1 from "./assets/avatar1.jpg";
import icourse1 from './assets/icourse1.jpg';
import icourse2 from './assets/icourse2.jpg';
import icourse3 from './assets/icourse3.jpg';
import icourse4 from './assets/icourse4.jpg';
import icourse5 from './assets/icourse5.jpg';
import icourse6 from './assets/icourse6.jpg';
import icourse7 from './assets/icourse7.jpg';
import icourse8 from './assets/icourse8.jpg';
import icourse9 from './assets/icourse9.jpg';
import icourse10 from './assets/icourse10.jpg';
import icourse11 from './assets/icourse11.jpg';
import icourse12 from './assets/icourse12.jpg';
import icourse13 from './assets/icourse13.jpg';
import icourse14 from './assets/icourse14.jpg';
import icourse15 from './assets/icourse15.jpg';
import icourse16 from './assets/icourse16.jpg';
import InstructorSidebar from './InstructorSidebar';

const courses = [
  { title: 'Web Development Bootcamp', rating: '4.8', students: '125,430', price: '$49.00', image: icourse1 },
  { title: 'Advanced React & Redux Masterclass', rating: '4.7', students: '89,210', price: '$59.00', image: icourse2 },
  { title: 'Python for Beginners to Pro', rating: '4.9', students: '210,875', price: '$39.00', image: icourse3 },
  { title: 'UI/UX Design with Figma', rating: '4.6', students: '74,390', price: '$34.00', image: icourse4 },
  { title: 'Data Structures & Algorithms', rating: '4.8', students: '98,650', price: '$44.00', image: icourse5 },
  { title: 'Machine Learning Fundamentals', rating: '4.7', students: '67,120', price: '$69.00', image: icourse6 },
  { title: 'Ethical Hacking & Cyber Security', rating: '4.9', students: '142,330', price: '$54.00', image: icourse7 },
  { title: 'Java Programming Masterclass', rating: '4.5', students: '83,540', price: '$42.00', image: icourse8 },
  { title: 'Full Stack MERN Development', rating: '4.8', students: '76,980', price: '$59.00', image: icourse9 },
  { title: 'Cloud Computing with AWS', rating: '4.6', students: '58,210', price: '$64.00', image: icourse10 },
  { title: 'Digital Marketing Complete Guide', rating: '4.7', students: '91,460', price: '$29.00', image: icourse11 },
  { title: 'Graphic Design Mastery', rating: '4.4', students: '47,890', price: '$24.00', image: icourse12 },
  { title: 'Blockchain Development Basics', rating: '4.6', students: '52,130', price: '$72.00', image: icourse13 },
  { title: 'DevOps Engineering Essentials', rating: '4.7', students: '39,875', price: '$68.00', image: icourse14 },
  { title: 'Mobile App Development with Flutter', rating: '4.8', students: '61,240', price: '$45.00', image: icourse15 },
  { title: 'SQL & Database Management', rating: '4.5', students: '73,510', price: '$32.00', image: icourse16 },
];

const InstructorCourses = () => {
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleDocClick = () => setOpenMenu(null);
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const toggleMenu = (e, idx) => {
    e.stopPropagation();
    setOpenMenu(prev => (prev === idx ? null : idx));
  };

  const onMenuAction = (e, action, course) => {
    e.stopPropagation();
    setOpenMenu(null);
    // Placeholder: implement navigation/actions as needed
    // For now just log
    // eslint-disable-next-line no-console
    console.log(action, course.title);
  };

  return (
    <div className="instructor-dashboard-page">
      <div className="dashboard-flex-layout">
        <InstructorSidebar />

        <main className="dashboard-main-content">
          <div className="instructor-dashboard-header">
            <div className="dashboard-header-left">
              <span className="dashboard-greeting">Good Morning</span>
              <h1 className="dashboard-title">My Courses</h1>
            </div>
            <div className="dashboard-header-right">
              <div className="dashboard-search-bar">
                <span className="dashboard-search-icon">🔎</span>
                <input className="dashboard-search-input" placeholder="Search in your course..." />
              </div>
              <span className="dashboard-profile-icon">
                <img src={avatar1} alt="Instructor" />
              </span>
            </div>
          </div>

          <div style={{padding: '0 24px 40px 24px'}}>
            <div style={{display:'flex', gap:16, alignItems:'center', marginBottom:20}}>
              <input style={{flex:1, padding:'12px 16px', borderRadius:6, border:'1px solid #e6e9ef'}} placeholder="Search in your courses..." />
              <select style={{padding:'12px 12px', borderRadius:6, border:'1px solid #e6e9ef'}}>
                <option>Latest</option>
                <option>Oldest</option>
              </select>
              <select style={{padding:'12px 12px', borderRadius:6, border:'1px solid #e6e9ef'}}>
                <option>All Category</option>
              </select>
              <select style={{padding:'12px 12px', borderRadius:6, border:'1px solid #e6e9ef'}}>
                <option>4 Star & Up</option>
              </select>
            </div>

            <div className="instructor-courses-grid">
              {courses.map((c, i) => (
                <div key={i} className="course-card">
                  <div
                    className="course-card-thumb"
                    style={c.image ? { backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                  >
                    <div className="course-category-badge">DEVELOPMENTS</div>
                  </div>
                  <div className="course-card-body">
                    <div className="course-title">{c.title}</div>
                    <div className="course-meta-row">
                      <div className="course-meta-left">
                        <span className="course-rating">⭐ {c.rating}</span>
                        <span className="course-students">{c.students} students</span>
                      </div>
                      <div className="course-meta-right">
                          <div className="course-price">{c.price}</div>
                          <div className="course-menu" onClick={(e)=>toggleMenu(e,i)} aria-haspopup="true" aria-expanded={openMenu===i} role="button" tabIndex={0}>
                            ⋯
                          </div>
                          {openMenu === i && (
                            <div className="course-menu-popup" onClick={e=>e.stopPropagation()} role="menu">
                              <button className="course-menu-item" onClick={(e)=>onMenuAction(e,'view',c)}>View Details</button>
                              <button className="course-menu-item" onClick={(e)=>onMenuAction(e,'edit',c)}>Edit Course</button>
                              <button className="course-menu-item course-menu-item-destructive" onClick={(e)=>onMenuAction(e,'delete',c)}>Delete Course</button>
                            </div>
                          )}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InstructorCourses;
