import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./StudentDashboardCourses.css";
import "./StudentDashboardWishlist.css";
import profileImg from './assets/student-avatar.jpg';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboardSettings() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(profileImg);

  return (
    <>
      <Navbar />
      <div className="student-dashboard-top-bg"></div>
      <div className="student-dashboard-bg">
        <div className="student-dashboard-profile-bg">
          <div className="student-dashboard-profile-card">
            <div className="student-dashboard-profile-content">
              <img className="student-dashboard-avatar" src={profileImg} alt="Student" />
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
              <span onClick={() => navigate('/student-dashboard-message')} style={{cursor:'pointer'}}>Message</span>
              <span onClick={() => navigate('/student-dashboard-wishlist')} style={{cursor:'pointer'}}>Wishlist</span>
              <span onClick={() => navigate('/student-dashboard-purchase-history')} style={{cursor:'pointer'}}>Purchase History</span>
              <span className="active" style={{color:'#ff6b35', fontWeight:700, position:'relative', display:'inline-block'}}>Settings
              </span>
            </div>
          </div>
        </div>
        <div className="wishlist-container">
          <div className="wishlist-title">Account settings</div>
          <div style={{display:'flex', gap:48, alignItems:'flex-start'}}>
            {/* Profile Image Upload */}
            <div style={{background:'#fff', border:'1px solid #ececec', borderRadius:8, padding:'32px 32px 18px 32px', width:320, display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div style={{width:200, height:200, borderRadius:8, overflow:'hidden', marginBottom:18, position:'relative'}}>
                <img src={photo} alt="Profile" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                <label htmlFor="upload-photo" style={{position:'absolute', left:0, right:0, bottom:0, background:'rgba(30,30,30,0.6)', color:'#fff', width:'100%', textAlign:'center', padding:'14px 0', cursor:'pointer', fontWeight:500}}>
                  <span style={{fontSize:18, marginRight:8}}>⬆</span> Upload Photo
                  <input id="upload-photo" type="file" accept="image/*" style={{display:'none'}} onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = ev => setPhoto(ev.target.result);
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }} />
                </label>
              </div>
              <div style={{color:'#888', fontSize:14, marginTop:8, textAlign:'center'}}>Image size should be under 1MB and image ration needs to be 1:1</div>
            </div>
            {/* Settings Form */}
            <form style={{flex:1, background:'#fff', borderRadius:8, padding:'0px 32px 18px 32px', display:'flex', flexDirection:'column', gap:24}}>
              <div style={{display:'flex', gap:18}}>
                <div style={{flex:1, display:'flex', flexDirection:'column', gap:8}}>
                  <label style={{fontWeight:500, color:'black'}}>Full name</label>
                  <input type="text" placeholder="First name" value={firstName} onChange={e=>setFirstName(e.target.value)} style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16}} />
                </div>
                <div style={{flex:1, display:'flex', flexDirection:'column', gap:8}}>
                  <label style={{fontWeight:500, color:'#888'}}>&nbsp;</label>
                  <input type="text" placeholder="Last name" value={lastName} onChange={e=>setLastName(e.target.value)} style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16}} />
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                <label style={{fontWeight:500, color:'black'}}>Username</label>
                <input type="text" placeholder="Enter your username" value={username} onChange={e=>setUsername(e.target.value)} style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16}} />
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                <label style={{fontWeight:500, color:'black'}}>Email</label>
                <input type="email" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)} style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16}} />
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                <label style={{fontWeight:500, color:'black'}}>Title</label>
                <div style={{position:'relative'}}>
                  <input type="text" placeholder="Your tittle, proffesion or small biography" value={title} onChange={e=>setTitle(e.target.value)} maxLength={50} style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16, width:'100%'}} />
                  <span style={{position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', color:'#bdbdbd', fontSize:14}}>{title.length}/50</span>
                </div>
              </div>
              <button type="submit" style={{background:'#ff6b35', color:'#fff', border:'none', borderRadius:6, fontWeight:600, fontSize:17, padding:'14px 0', marginTop:8, cursor:'pointer', width:180}}>Save Changes</button>
              {/* Change Password Section */}
              <div style={{marginTop:48}}>
                <div style={{fontWeight:700, fontSize:22, marginBottom:24}}>Change password</div>
                <form style={{display:'flex', flexDirection:'column', gap:24, maxWidth:480}}>
                  <div style={{display:'flex', flexDirection:'column', gap:8}}>
                    <label style={{fontWeight:500, color:'black'}}>Current Password</label>
                    <div style={{position:'relative'}}>
                      <input type="password" placeholder="Password" style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16, width:'100%'}} />
                      <span style={{position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', color:'#888', cursor:'pointer', fontSize:20}}>&#128065;</span>
                    </div>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap:8}}>
                    <label style={{fontWeight:500, color:'black'}}>New Password</label>
                    <div style={{position:'relative'}}>
                      <input type="password" placeholder="Password" style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16, width:'100%'}} />
                      <span style={{position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', color:'#888', cursor:'pointer', fontSize:20}}>&#128065;</span>
                    </div>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap:8}}>
                    <label style={{fontWeight:500, color:'black'}}>Confirm Password</label>
                    <div style={{position:'relative'}}>
                      <input type="password" placeholder="Confirm new password" style={{padding:'12px', borderRadius:6, border:'1px solid #ececec', fontSize:16, width:'100%'}} />
                      <span style={{position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', color:'#888', cursor:'pointer', fontSize:20}}>&#128065;</span>
                    </div>
                  </div>
                  <button type="button" style={{background:'#ff6b35', color:'#fff', border:'none', borderRadius:6, fontWeight:600, fontSize:17, padding:'14px 0', marginTop:8, cursor:'pointer', width:180}}>Change Password</button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div><br></br>
      <Footer />
    </>
  );
}
