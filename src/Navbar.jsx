import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from 'react-router-dom';
import studentAvatarImg from './assets/student-avatar.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStudentDashboard = location.pathname === '/student-dashboard' || location.pathname === '/student-dashboard-courses';
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <ul className="navbar-links">
          <li className="active" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</li>
          <li onClick={() => navigate('/courses')} style={{cursor: 'pointer'}}>Courses</li>
          <li onClick={() => navigate('/about')} style={{cursor: 'pointer'}}>About</li>
          <li onClick={() => navigate('/contact')} style={{cursor: 'pointer'}}>Contact</li>
          <li onClick={() => navigate('/become-instructor')} style={{cursor: 'pointer'}}>Become an Instructor</li>
        </ul>
        <div className="navbar-lang-currency">
          <span>USD <span className="arrow">▼</span></span>
          <span>English <span className="arrow">▼</span></span>
        </div>
      </div>
      <div className="navbar-bottom">
           <div className="navbar-logo-browse">
             <div className="navbar-logo">
               <span className="logo-icon" aria-label="logo">🎓</span>
               <span className="logo-text">E-tutor</span>
               <select className="browse-select" style={{ marginLeft: 16 }}>
                 <option>Browse</option>
               </select>
             </div>
             <div className="navbar-browse-search">
               <input className="search-input" placeholder="What do you want learn..." />
             </div>
           </div>
        <div className="navbar-auth">
          {isStudentDashboard ? (
            <>
              <span className="icon" aria-label="notifications" style={{marginRight: '12px'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#23262f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16v-5a6 6 0 1 0-12 0v5"/><path d="M5 16h14"/><path d="M9 20h6"/></svg>
              </span>
              <span className="icon" aria-label="cart" style={{marginRight: '12px'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#23262f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </span>
              <img src={studentAvatarImg} alt="Student Avatar" className="navbar-student-avatar" style={{width:36, height:36, borderRadius:'50%', objectFit:'cover', marginLeft:'8px', cursor:'pointer'}} />
            </>
          ) : (
            <>
              <span className="icon" aria-label="notifications" style={{marginRight: '12px'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#23262f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16v-5a6 6 0 1 0-12 0v5"/><path d="M5 16h14"/><path d="M9 20h6"/></svg>
              </span>
              <span className="icon" aria-label="cart" style={{marginRight: '18px'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#23262f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </span>
              <button className="create-account" onClick={() => navigate('/signup')}>
                Create Account
              </button><br></br>
              <span style={{width: '16px', display: 'inline-block'}}></span>
              <button className="sign-in" onClick={() => navigate('/signin')}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
