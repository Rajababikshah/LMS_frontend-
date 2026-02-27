import React from "react";
import { Link } from "react-router-dom";
import "./InstructorDashboard.css";
import avatar1 from "./assets/avatar1.jpg";
import InstructorSidebar from './InstructorSidebar';

const InstructorDashboard = () => (
  <div className="instructor-dashboard-page">
    <div className="dashboard-flex-layout">
      <InstructorSidebar />
      <main className="dashboard-main-content">
        <div className="instructor-dashboard-header" style={{marginBottom: '32px'}}>
          <div className="dashboard-header-left">
            <span className="dashboard-greeting">Good Morning</span>
            <h1 className="dashboard-title">Dashboard</h1>
          </div>
          <div className="dashboard-header-right">
            <div className="dashboard-search-bar">
              <span className="dashboard-search-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke="#6366f1" strokeWidth="2" />
                  <line x1="16" y1="16" x2="21" y2="21" stroke="#6366f1" strokeWidth="2" />
                </svg>
              </span>
              <input type="text" placeholder="Search" className="dashboard-search-input" />
            </div>
            <span className="dashboard-profile-icon">
              <img src={avatar1} alt="Instructor" />
            </span>
          </div>
        </div>
        <div className="dashboard-stats-grid">
          <div className="dashboard-stat dashboard-stat-pink">
            <span className="stat-icon">📚</span>
            <div className="stat-main">957</div>
            <div className="stat-label">Enrolled Courses</div>
          </div>
          <div className="dashboard-stat dashboard-stat-blue">
            <span className="stat-icon">🎬</span>
            <div className="stat-main">19</div>
            <div className="stat-label">Active Courses</div>
          </div>
          <div className="dashboard-stat dashboard-stat-orange">
            <span className="stat-icon">👨‍🏫</span>
            <div className="stat-main">241</div>
            <div className="stat-label">Course Instructors</div>
          </div>
          <div className="dashboard-stat dashboard-stat-green">
            <span className="stat-icon">🏆</span>
            <div className="stat-main">951</div>
            <div className="stat-label">Completed Courses</div>
          </div>
          <div className="dashboard-stat dashboard-stat-pink">
            <span className="stat-icon">👥</span>
            <div className="stat-main">1,674,767</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="dashboard-stat dashboard-stat-green">
            <span className="stat-icon">📅</span>
            <div className="stat-main">3</div>
            <div className="stat-label">Online Courses</div>
          </div>
          <div className="dashboard-stat dashboard-stat-gray">
            <span className="stat-icon">💵</span>
            <div className="stat-main">$7,461,767</div>
            <div className="stat-label">USD Total Earning</div>
          </div>
          <div className="dashboard-stat dashboard-stat-blue">
            <span className="stat-icon">📦</span>
            <div className="stat-main">56,489</div>
            <div className="stat-label">Course Sold</div>
          </div>
        </div>
        <div className="dashboard-profile-card">
          <div className="profile-avatar">
            <img src={avatar1} alt="Instructor" />
          </div>
          <div className="profile-info">
            <div className="profile-name">Vako Shvili</div>
            <div className="profile-email">vako.shvili@gmail.com</div>
            <div className="profile-progress-bar">
              <span>1/4 Steps</span>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{width:'25%'}}></div>
              </div>
              <span className="progress-bar-label">25% Completed</span>
            </div>
          </div>
          <button className="profile-edit-btn">Edit Biography</button>
          <span className="profile-arrow-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="24" height="24" rx="8" fill="#f7f8fa" />
              <line x1="16" y1="10" x2="16" y2="22" stroke="#222" strokeWidth="2" strokeLinecap="round" />
              <polyline points="12,18 16,22 20,18" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div className="dashboard-main-grid">
          <div className="dashboard-activity">
            <h3>Recent Activity <span className="dashboard-activity-date">Today</span></h3>
            <ul className="activity-list">
              <li><span className="activity-icon">🟠</span> <strong>Kevin</strong> comments on your lecture "What is ux" in "2021 ui/ux design with figma" <span className="activity-time">Just now</span></li>
              <li><span className="activity-icon">🟠</span> <strong>John</strong> give a 5 star rating on your course "2021 ui/ux design with figma" <span className="activity-time">5 mins ago</span></li>
              <li><span className="activity-icon">🟠</span> <strong>Sraboni</strong> purchase your course "2021 ui/ux design with figma" <span className="activity-time">6 mins ago</span></li>
              <li><span className="activity-icon">🟠</span> <strong>Arif</strong> purchase your course "2021 ui/ux design with figma" <span className="activity-time">8 mins ago</span></li>
            </ul>
          </div>
          <div className="dashboard-revenue">
            <h3>Revenue <span className="dashboard-revenue-date">This month</span></h3>
            <div className="revenue-chart-wrapper">
              <svg width="100%" height="100%" viewBox="0 0 340 180">
                <polyline points="0,100 40,80 80,90 120,60 160,70 200,50 240,80 280,60 320,90 340,70" fill="none" stroke="#6366f1" strokeWidth="3" />
                <circle cx="120" cy="60" r="8" fill="#6366f1" />
                <text x="120" y="40" fill="#222" fontSize="14">51,749</text>
                <text x="120" y="110" fill="#888" fontSize="12">7th Aug</text>
              </svg>
              <div className="chart-y-labels">
                <div>1m</div>
                <div>500k</div>
                <div>100k</div>
                <div>10k</div>
                <div>1k</div>
                <div>0</div>
              </div>
              <div className="chart-x-labels">
                <span>Aug 01</span>
                <span>Aug 10</span>
                <span>Aug 20</span>
                <span>Aug 31</span>
              </div>
            </div>
          </div>
          <div className="dashboard-profile-view">
            <h3>Profile View <span className="dashboard-profile-view-date">Today</span></h3>
            <div className="profile-view-chart">
                <svg width="100%" height="100%" viewBox="0 0 240 200" preserveAspectRatio="none">
                  {/* background bars */}
                  <g className="profile-bg-group" fill="#e6f7e6">
                    <rect x="8"  y="20" width="12" height="160" rx="4" />
                    <rect x="28" y="20" width="12" height="160" rx="4" />
                    <rect x="48" y="20" width="12" height="160" rx="4" />
                    <rect x="68" y="20" width="12" height="160" rx="4" />
                    <rect x="88" y="20" width="12" height="160" rx="4" />
                    <rect x="108" y="20" width="12" height="160" rx="4" />
                    <rect x="128" y="20" width="12" height="160" rx="4" />
                    <rect x="148" y="20" width="12" height="160" rx="4" />
                    <rect x="168" y="20" width="12" height="160" rx="4" />
                    <rect x="188" y="20" width="12" height="160" rx="4" />
                    <rect x="208" y="20" width="12" height="160" rx="4" />
                  </g>
                  {/* filled bars (dark green from bottom) */}
                  <g className="profile-bars-group" fill="#16a34a">
                    {/* heights are px within 160px available space; y is computed so bars anchor at bottom */}
                    <rect x="8"  y="60"  width="12" height="120" rx="3" />
                    <rect x="28" y="20"  width="12" height="160" rx="3" />
                    <rect x="48" y="40"  width="12" height="140" rx="3" />
                    <rect x="68" y="80"  width="12" height="100" rx="3" />
                    <rect x="88" y="20"  width="12" height="160" rx="3" />
                    <rect x="108" y="60" width="12" height="120" rx="3" />
                    <rect x="128" y="100" width="12" height="80"  rx="3" />
                    <rect x="148" y="40"  width="12" height="140" rx="3" />
                    <rect x="168" y="120" width="12" height="60"  rx="3" />
                    <rect x="188" y="60"  width="12" height="120" rx="3" />
                    <rect x="208" y="80"  width="12" height="100" rx="3" />
                  </g>
                </svg>
            </div>
            <div className="profile-view-earning">$7,443</div>
            <div className="profile-view-label">USD Dollar you earned.</div>
          </div>
        </div>
        <div className="dashboard-extra-grid">
          <div className="course-rating-card">
            <div className="course-rating-header">
              <span>Overall Course Rating</span>
              <span className="course-rating-date">This week</span>
            </div>
              <div className="course-rating-main">
                <div className="course-rating-score-box">
                  <div className="course-rating-value">4.6</div>
                  <div className="course-rating-stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span className="half-star">½</span>
                  </div>
                  <div className="course-rating-label">Overall Rating</div>
                </div>
                <div className="course-rating-chart-box">
                  <svg width="100%" height="100%" viewBox="0 0 220 60" preserveAspectRatio="none">
                    <polyline points="0,40 20,30 40,35 60,25 80,30 100,20 120,25 140,30 160,22 180,30 200,26 220,30" fill="none" stroke="#ff8a34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="course-rating-breakdown">
                <div className="course-rating-row">
                  <div className="stars-label">★★★★★</div>
                  <div className="course-rating-track"><div className="course-rating-bar" style={{width:'56%'}}></div></div>
                  <div className="course-rating-percent">56%</div>
                </div>
                <div className="course-rating-row">
                  <div className="stars-label">★★★★</div>
                  <div className="course-rating-track"><div className="course-rating-bar" style={{width:'37%'}}></div></div>
                  <div className="course-rating-percent">37%</div>
                </div>
                <div className="course-rating-row">
                  <div className="stars-label">★★★</div>
                  <div className="course-rating-track"><div className="course-rating-bar" style={{width:'8%'}}></div></div>
                  <div className="course-rating-percent">8%</div>
                </div>
                <div className="course-rating-row">
                  <div className="stars-label">★★</div>
                  <div className="course-rating-track"><div className="course-rating-bar" style={{width:'1%'}}></div></div>
                  <div className="course-rating-percent">1%</div>
                </div>
                <div className="course-rating-row">
                  <div className="stars-label">★</div>
                  <div className="course-rating-track"><div className="course-rating-bar" style={{width:'0.5%'}}></div></div>
                  <div className="course-rating-percent">&lt;1%</div>
                </div>
              </div>
          </div>
          <div className="course-overview-card">
            <div className="course-overview-header">
              <span>Course Overview</span>
              <span className="course-overview-date">This week</span>
            </div>
            <div className="course-overview-chart">
              <svg width="100%" height="180" viewBox="0 0 340 180">
                <polyline points="0,100 40,80 80,90 120,60 160,70 200,50 240,80 280,60 320,90 340,70" fill="none" stroke="#6366f1" strokeWidth="3" />
                <polyline points="0,140 40,120 80,130 120,110 160,120 200,100 240,130 280,110 320,140 340,120" fill="none" stroke="#ff6b35" strokeWidth="3" />
              </svg>
              <div className="course-overview-x-labels">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>
              <div className="course-overview-y-labels">
                <span>1m</span><span>500k</span><span>100k</span><span>10k</span><span>1k</span><span>0</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default InstructorDashboard;

