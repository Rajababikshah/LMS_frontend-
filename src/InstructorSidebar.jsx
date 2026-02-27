import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './InstructorDashboard.css';

const navItems = [
  { to: '/instructor-dashboard', icon: '📊', label: 'Dashboard' },
  { to: '/instructor-courses', icon: '📚', label: 'My Courses' },
  { to: '/instructor-earning', icon: '💵', label: 'Earning' },
  { to: '/instructor-message', icon: '💬', label: 'Message', badge: '3' },
  { to: '/instructor-settings', icon: '⚙️', label: 'Settings' },
];

export default function InstructorSidebar() {
  const navigate = useNavigate();
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">🎓</span>
        <span className="sidebar-logo-text">E-tutor</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
              >
                <span className="sidebar-nav-icon">{item.icon}</span>
                <span className="sidebar-nav-text">{item.label}</span>
                {item.badge ? <span className="sidebar-nav-badge">{item.badge}</span> : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-signout" role="button" onClick={() => navigate('/become-instructor')} style={{cursor:'pointer'}}>
        <span className="sidebar-signout-icon">↩️</span> Sign-out
      </div>
    </aside>
  );
}
