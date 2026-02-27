import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./StudentDashboardCourses.css";
import "./StudentDashboardMessage.css";
import studentAvatarImg from './assets/student-avatar.jpg';
import teacher6Img from './assets/teacher6.jpg';
import teacher7Img from './assets/teacher7.jpg';
import teacher8Img from './assets/teacher8.jpg';
import { useNavigate } from 'react-router-dom';

const messageList = [
  {
    id: 1,
    name: "Jane Cooper",
    avatar: teacher6Img,
    snippet: "Yeah sure, tell me zafor",
    time: "just now",
    selected: true,
  },
  {
    id: 2,
    name: "Jenny Wilson",
    avatar: teacher7Img,
    snippet: "Thank you so much, sir",
    time: "2 d",
    unread: true,
  },
  {
    id: 3,
    name: "Marvin McKinney",
    avatar: teacher8Img,
    snippet: "You're Welcome",
    time: "1 m",
    unread: true,
  },
  // ...add more as needed
];

const chatMessages = [
  {
    id: 1,
    sender: "teacher",
    text: "Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😊",
    date: "Today",
  },
  {
    id: 2,
    sender: "student",
    text: "Hello, Good Evening.",
  },
  {
    id: 3,
    sender: "student",
    text: "I'm Zafor",
  },
  {
    id: 4,
    sender: "student",
    text: "I only have a small doubt about your lecture. can you give me some time for this?",
  },
  {
    id: 5,
    sender: "teacher",
    text: "Yeah sure, tell me zafor",
  },
];

export default function StudentDashboardMessage() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
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
              <span onClick={() => navigate('/student-dashboard-teachers')} style={{cursor:'pointer'}}>Teachers</span>
              <span className="active" style={{color:'#ff6b35', fontWeight:700, position:'relative', display:'inline-block'}}>Message
              </span>
              <span onClick={() => navigate('/student-dashboard-wishlist')} style={{cursor:'pointer'}}>Wishlist</span>
              <span onClick={() => navigate('/student-dashboard-purchase-history')} style={{cursor:'pointer'}}>Purchase History</span>
              <span onClick={() => navigate('/student-dashboard-settings')} style={{cursor:'pointer'}}>Settings</span>
            </div>
          </div>
        </div>
        {/* Message/Chat UI */}
        <div className="message-page-container">
          {/* Sidebar */}
          <div className="message-sidebar">
            <div className="message-sidebar-header">
              <span>Message</span>
              <button className="message-compose-btn"><span style={{color:'#5b5be6',fontWeight:700,fontSize:18,marginRight:4}}>+</span> <span style={{color:'#5b5be6'}}>Compose</span></button>
            </div>
            <input className="message-search-box" placeholder="Search" />
            <div className="message-list">
              {messageList.map((msg) => (
                <div className={`message-list-item${msg.selected ? ' selected' : ''}` } key={msg.id}>
                  <img className="message-list-avatar" src={msg.avatar} alt={msg.name} />
                  <div className="message-list-info">
                    <div className="message-list-name">{msg.name}</div>
                    <div className="message-list-snippet">{msg.snippet}</div>
                  </div>
                  <div className="message-list-meta">
                    <span>{msg.time}</span>
                    {msg.unread && <span className="message-list-dot"></span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Chat Area */}
          <div className="message-chat-area">
            <div className="message-chat-header">
              <img className="message-chat-header-avatar" src={teacher6Img} alt="Jane Cooper" />
              <div className="message-chat-header-info">
                <div className="message-chat-header-name">Jane Cooper</div>
                <div className="message-chat-header-status">Active Now</div>
              </div>
              <div className="message-chat-header-actions"> <span style={{fontSize:24, color:'#bdbdbd', cursor:'pointer'}}>⋯</span> </div>
            </div>
            <div className="message-chat-body">
              <div className="message-chat-date">Today</div>
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`message-chat-msg${msg.sender === 'student' ? ' sent' : ''}`}>
                  {msg.text}
                  {msg.time && <span className="msg-time">{msg.time}</span>}
                </div>
              ))}
            </div>
            <div className="message-chat-input-row">
              <input className="message-chat-input" placeholder="Type your message" value={input} onChange={e => setInput(e.target.value)} />
              <button className="message-chat-send-btn">Send <span style={{fontWeight:700, fontSize:18}}>&#8594;</span></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
