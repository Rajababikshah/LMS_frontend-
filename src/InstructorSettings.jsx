import React, { useState } from "react";
import InstructorSidebar from './InstructorSidebar';
import './InstructorDashboard.css';
import './InstructorSettings.css';
import defaultAvatar from './assets/avatar1.jpg';

export default function InstructorSettings(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneCode, setPhoneCode] = useState('+880');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [title, setTitle] = useState('');
  const [biography, setBiography] = useState('');
  const [photo, setPhoto] = useState(defaultAvatar);

  function handleUpload(e){
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = ev => setPhoto(ev.target.result);
    reader.readAsDataURL(f);
  }

  function handleSave(e){
    e.preventDefault();
    // placeholder: wire to API
    console.log('save', { firstName, lastName, username, phoneCode, phoneNumber, title, biography });
    alert('Settings saved (local only)');
  }

  return (
    <div className="instructor-dashboard-page">
      <div className="dashboard-flex-layout">
        <InstructorSidebar />
        <main className="dashboard-main-content">
          <div className="instructor-dashboard-header compact">
            <div className="dashboard-header-left">
              <span className="dashboard-greeting">Good Morning</span>
              <h1 className="dashboard-title">Account Settings</h1>
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
                <img src={defaultAvatar} alt="Instructor" />
              </span>
            </div>
          </div>

          <div className="settings-page-shell">
            <div className="instructor-wishlist-container">
              <div className="wishlist-title">Account Settings</div>
              <div className="instructor-settings-panel">
                <div className="profile-upload-outer">
                  <div className="profile-upload-box">
                    <div className="upload-overlay">
                      <div className="profile-avatar-wrapper">
                        <img className="profile-avatar" src={photo} alt="Profile" />
                      </div>
                      <label className="upload-btn">
                        Upload Photo
                        <input type="file" accept="image/*" style={{display:'none'}} onChange={handleUpload} />
                      </label>
                    </div>
                    <div className="upload-hint">Image size should be under 1MB and image ratio needs to be 1:1</div>
                  </div>
                </div>

                <form className="settings-form" onSubmit={handleSave}>
                  <div className="settings-section">
                    <div className="settings-form-row">
                      <div className="settings-form-col">
                        <label>Full name</label>
                        <input className="settings-input" placeholder="First name" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                      </div>
                      <div className="settings-form-col">
                        <label style={{visibility:'hidden'}}>Last</label>
                        <input className="settings-input" placeholder="Last name" value={lastName} onChange={e=>setLastName(e.target.value)} />
                      </div>
                    </div>

                    <div style={{marginTop:12}}>
                      <label>Username</label>
                      <input className="settings-input" placeholder="Enter your username" value={username} onChange={e=>setUsername(e.target.value)} />
                    </div>

                    <div className="phone-row" style={{marginTop:12}}>
                      <div style={{width:'100%'}}>
                        <label>Phone Number</label>
                        <div className="phone-row" style={{marginTop:8}}>
                          <select className="settings-input phone-code" value={phoneCode} onChange={e=>setPhoneCode(e.target.value)} style={{width:120}}>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+91">+91</option>
                            <option value="+880">+880</option>
                          </select>
                          <input className="settings-input" placeholder="Your Phone number..." value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <div style={{marginTop:12, position:'relative'}}>
                      <label>Title</label>
                      <input className="settings-input" placeholder="Your title, profession or small biography" maxLength={50} value={title} onChange={e=>setTitle(e.target.value)} />
                      <div style={{position:'absolute', right:12, top:36, color:'#9ca3af', fontSize:13}}>{title.length}/50</div>
                    </div>

                    <div style={{marginTop:12, position:'relative'}}>
                      <label>Biography</label>
                      <textarea className="settings-input settings-textarea" placeholder="Your title, profession or small biography" rows={6} maxLength={500} value={biography} onChange={e=>setBiography(e.target.value)} />
                      <div style={{position:'absolute', right:12, bottom:12, color:'#9ca3af', fontSize:13}}>{biography.length}/500</div>
                    </div>

                    <div className="settings-actions" style={{marginTop:20}}>
                      <button type="submit" className="save-btn">Save Changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Social Profile Section */}
          <div className="instructor-wishlist-container" style={{marginTop:24}}>
            <div className="wishlist-title">Social Profile</div>
            <div className="instructor-settings-panel" style={{padding:'22px'}}>
              <div className="settings-form" style={{flex:1}}>
                <div className="settings-section social-section">
                  <div style={{marginBottom:12}}>
                    <label>Personal Website</label>
                    <div style={{display:'flex', alignItems:'center', gap:12}}>
                      <div className="social-icon">🌐</div>
                      <input className="settings-input" placeholder="Personal website or portfolio url..." />
                    </div>
                  </div>

                  <div className="social-grid">
                    <div className="social-item">
                      <label>Facebook</label>
                      <div className="social-input-wrapper">
                        <div className="social-icon" style={{background:'#fff6f1', color:'#ff6b35'}}>f</div>
                        <input className="settings-input" placeholder="Username" />
                      </div>
                    </div>
                    <div className="social-item">
                      <label>Instagram</label>
                      <div className="social-input-wrapper">
                        <div className="social-icon" style={{background:'#fff6f1', color:'#ff6b35'}}>ig</div>
                        <input className="settings-input" placeholder="Username" />
                      </div>
                    </div>
                    <div className="social-item">
                      <label>Linkedin</label>
                      <div className="social-input-wrapper">
                        <div className="social-icon" style={{background:'#fff6f1', color:'#ff6b35'}}>in</div>
                        <input className="settings-input" placeholder="Username" />
                      </div>
                    </div>

                    <div className="social-item">
                      <label>Twitter</label>
                      <div className="social-input-wrapper">
                        <div className="social-icon" style={{background:'#fff6f1', color:'#ff6b35'}}>tw</div>
                        <input className="settings-input" placeholder="Username" />
                      </div>
                    </div>
                    <div className="social-item">
                      <label>Whatsapp</label>
                      <div className="social-input-wrapper">
                        <div className="social-icon" style={{background:'#fff6f1', color:'#ff6b35'}}>wa</div>
                        <input className="settings-input" placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="social-item">
                      <label>Youtube</label>
                      <div className="social-input-wrapper">
                        <div className="social-icon" style={{background:'#fff6f1', color:'#ff6b35'}}>yt</div>
                        <input className="settings-input" placeholder="Username" />
                      </div>
                    </div>
                  </div>

                  <div style={{marginTop:18}}>
                    <button className="save-btn">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Notifications + Change Password Section */}
          <div className="settings-two-col" style={{marginTop:28}}>
            <div className="settings-panel notifications-panel">
              <div className="wishlist-title">Notifications</div>
              <div className="notifications-list" style={{marginTop:12}}>
                <label className="notif-item"><input type="checkbox" /> <span>I want to know who buy my course.</span></label>
                <label className="notif-item"><input type="checkbox" defaultChecked /> <span>I want to know who write a review on my course.</span></label>
                <label className="notif-item"><input type="checkbox" /> <span>I want to know who commented on my lecture.</span></label>
                <label className="notif-item"><input type="checkbox" defaultChecked /> <span>I want to know who download my lecture notes.</span></label>
                <label className="notif-item"><input type="checkbox" defaultChecked /> <span>I want to know who replied on my comment.</span></label>
                <label className="notif-item"><input type="checkbox" /> <span>I want to know daily how many people visited my profile.</span></label>
                <label className="notif-item"><input type="checkbox" defaultChecked /> <span>I want to know who download my lecture attach file.</span></label>
              </div>
              <div style={{marginTop:18}}>
                <button className="save-btn">Save Changes</button>
              </div>
            </div>

            <div className="settings-panel change-pass-panel">
              <div className="wishlist-title">Change password</div>
              <div style={{marginTop:12}}>
                <label>Current Password</label>
                <div className="input-with-icon" style={{marginTop:8}}>
                  <input type="password" className="settings-input" placeholder="Password" />
                  <span className="eye">👁️</span>
                </div><br></br>
              </div>
              <div style={{marginTop:12}}>
                <label>New Password</label>
                <div className="input-with-icon" style={{marginTop:8}}>
                  <input type="password" className="settings-input" placeholder="Password" />
                  <span className="eye">👁️</span>
                </div><br></br>
              </div>
              <div style={{marginTop:12}}>
                <label>Confirm Password</label>
                <div className="input-with-icon" style={{marginTop:8}}>
                  <input type="password" className="settings-input" placeholder="Confirm new password" />
                  <span className="eye">👁️</span>
                </div><br></br>
              </div>
              <div style={{marginTop:18}}>
                <button className="save-btn">Save Changes</button>
              </div>
            </div>
          </div><br></br><br></br>
        </main>
      </div>
    </div>
  );
}
