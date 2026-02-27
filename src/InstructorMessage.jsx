import React, { useState } from 'react';
import InstructorSidebar from './InstructorSidebar';
import './InstructorDashboard.css';
import './StudentDashboardMessage.css';
import avatar1 from './assets/avatar1.jpg';
import teacher6Img from './assets/teacher6.jpg';
import teacher7Img from './assets/teacher7.jpg';
import teacher8Img from './assets/teacher8.jpg';

const messageList = [
  { id: 1, name: 'Jane Cooper', avatar: teacher6Img, snippet: 'Yeah sure, tell me zafor', time: 'just now', selected: true },
  { id: 2, name: 'Jenny Wilson', avatar: teacher7Img, snippet: 'Thank you so much, sir', time: '2 d', unread: true },
  { id: 3, name: 'Marvin McKinney', avatar: teacher8Img, snippet: "You're Welcome", time: '1 m' },
  { id: 4, name: 'Eleanor Pena', avatar: avatar1, snippet: 'Thanks a lot', time: '1 h' },
];

const chatMessages = [
  { id: 1, sender: 'teacher', text: "Hello and thanks for signing up to the course. If you have any questions feel free to ask 😊", date: 'Today' },
  { id: 2, sender: 'student', text: 'Hello, Good Evening.' },
  { id: 3, sender: 'student', text: "I only have a small doubt about your lecture. can you give me some time for this?" },
  { id: 4, sender: 'teacher', text: 'Yeah sure, tell me zafor' },
];

export default function InstructorMessage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(chatMessages);
  const [selected, setSelected] = useState(1);

  function handleSend() {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'student', text: input }]);
    setInput('');
  }

  return (
    <div className="instructor-dashboard-page">
      <div className="dashboard-flex-layout">
        <InstructorSidebar />

        <main className="dashboard-main-content">
          <div className="instructor-dashboard-header">
            <div className="dashboard-header-left">
              <span className="dashboard-greeting">Good Morning</span>
              <h1 className="dashboard-title">Message <span style={{fontSize:12, color:'#9ca3af'}}> (3)</span></h1>
            </div>
            <div className="dashboard-header-right">
              <div className="dashboard-search-bar">
                <span className="dashboard-search-icon">🔎</span>
                <input className="dashboard-search-input" placeholder="Search" />
              </div>
              <span className="dashboard-profile-icon">
                <img src={avatar1} alt="Instructor" />
              </span>
            </div>
          </div>

          <div style={{padding:5}}>
            <div className="message-page-container instructor-message">
              {/* Sidebar */}
              <div className="message-sidebar">
                <div className="message-sidebar-header">
                  <span>Message</span>
                  <button className="message-compose-btn">+ Compose</button>
                </div>
                <input className="message-search-box" placeholder="Search" />
                <div className="message-list">
                  {messageList.map(m => (
                    <div key={m.id} className={`message-list-item${m.id === selected ? ' selected' : ''}`} onClick={() => setSelected(m.id)}>
                      <img className="message-list-avatar" src={m.avatar} alt={m.name} />
                      <div className="message-list-info">
                        <div className="message-list-name">{m.name}</div>
                        <div className="message-list-snippet">{m.snippet}</div>
                      </div>
                      <div className="message-list-meta">
                        <span>{m.time}</span>
                        {m.unread && <span className="message-list-dot" />}
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
                  {messages.map(msg => (
                    <div key={msg.id} className={`message-chat-msg${msg.sender === 'student' ? ' sent' : ''}`}>
                      {msg.text}
                      {msg.date && <div className="msg-time">{msg.date}</div>}
                    </div>
                  ))}
                </div>

                <div className="message-chat-input-row">
                  <input className="message-chat-input" placeholder="Type your message" value={input} onChange={e => setInput(e.target.value)} />
                  <button className="message-chat-send-btn" onClick={handleSend}>Send <span style={{fontWeight:700, fontSize:18}}>&#8594;</span></button>
                </div>
              </div>
            </div>
          </div><br></br><br></br>
        </main>
      </div>
    </div>
  );
}
