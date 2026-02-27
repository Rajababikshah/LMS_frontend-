import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./StudentDashboardCourses.css";
import "./StudentDashboardWishlist.css";
import course1Img from './assets/course1.jpg';
import course3Img from './assets/course3.jpg';
import studentAvatarImg from './assets/student-avatar.jpg';
import { useNavigate } from 'react-router-dom';

const purchases = [
  {
    id: 1,
    date: "1st September, 2021 at 11:30 PM",
    courses: 3,
    amount: 75.00,
    method: "Credit Card",
    expanded: false,
    details: [
      {
        img: course3Img,
        title: "Learn Ethical Hacking From Scratch",
        rating: 4.7,
        reviews: 451444,
        price: 13.99,
        author: "Marvin McKinney"
      },
      {
        img: course1Img,
        title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
        rating: 4.7,
        reviews: 451444,
        price: 49.00,
        author: "Esther Howard"
      }
    ],
    card: {
      name: "Kevin Gilbert",
      number: "4142 **** **** ****",
      expiry: "04/24"
    }
  },
  {
    id: 2,
    date: "1st September, 2021 at 11:30 PM",
    courses: 3,
    amount: 75.00,
    method: "Credit Card",
    expanded: false,
    details: [],
    card: {}
  }
];

export default function StudentDashboardPurchaseHistory() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(0);
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
            <button className="student-dashboard-instructor-btn" onClick={() => navigate('/instructor-dashboard')}>
              Become Instructor <span className="arrow">→</span>
            </button>
            <div className="student-dashboard-tabs">
              <span onClick={() => navigate('/student-dashboard')} style={{cursor:'pointer'}}>Dashboard</span>
              <span onClick={() => navigate('/student-dashboard-courses')} style={{cursor:'pointer'}}>Courses</span>
              <span onClick={() => navigate('/student-dashboard-teachers')} style={{cursor:'pointer'}}>Teachers</span>
              <span onClick={() => navigate('/student-dashboard-message')} style={{cursor:'pointer'}}>Message</span>
              <span onClick={() => navigate('/student-dashboard-wishlist')} style={{cursor:'pointer'}}>Wishlist</span>
              <span className="active" style={{color:'#ff6b35', fontWeight:700, position:'relative', display:'inline-block'}}>Purchase History
              </span>
              <span onClick={() => navigate('/student-dashboard-settings')} style={{cursor:'pointer'}}>Settings</span>
            </div>
          </div>
        </div>
        <div className="wishlist-container">
          <div className="wishlist-title">Purchase History</div>
          {/* Single card below heading */}
          <div style={{background:'#fff', borderRadius:16, boxShadow:'0 2px 16px #0001', marginBottom:28, padding:0, overflow:'hidden', maxWidth:'100%'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'28px 32px 18px 32px'}}>
              <div>
                <div style={{fontWeight:600, fontSize:20, marginBottom:8, color:'#23262f'}}>1st September, 2021 at 11:30 PM</div>
                <div style={{display:'flex', alignItems:'center', gap:18, color:'#888', fontSize:17}}>
                  <span><span style={{color:'#7b61ff', fontWeight:700, fontSize:18}}>▶</span> 3 Courses</span>
                  <span><span style={{color:'#ff6b35', fontWeight:700, fontSize:18}}>$</span> 75.00 USD</span>
                  <span><span style={{color:'#7ed957', fontWeight:700, fontSize:18}}>▣</span> Credit Card</span>
                </div>
              </div>
              <button style={{background:'#f6f6f6', color:'#23262f', border:'none', borderRadius:8, fontWeight:700, fontSize:22, padding:'12px 18px', cursor:'pointer', transition:'background 0.2s'}}>
                <span>&#8595;</span>
              </button>
            </div>
          </div>
          {/* Move expanded card to top */}
          {(() => {
            const expandedIdx = purchases.findIndex((_, idx) => expanded === idx);
            let cards = [];
            if (expandedIdx !== -1) {
              cards.push(
                <div key={purchases[expandedIdx].id} style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 16px #0001', marginBottom:28, padding:0, overflow:'hidden'}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'28px 32px 18px 32px', borderBottom: purchases[expandedIdx].details.length ? '1px solid #f2f2f2' : 'none'}}>
                    <div>
                      <div style={{fontWeight:600, fontSize:17, marginBottom:8, color: (purchases[expandedIdx].details.length && expanded === expandedIdx) ? '#ff6b35' : '#23262f'}}>{purchases[expandedIdx].date}</div>
                      <div style={{display:'flex', alignItems:'center', gap:18, color:'#888', fontSize:15}}>
                        <span><span style={{color:'#7b61ff', fontWeight:700}}>▶</span> {purchases[expandedIdx].courses} Courses</span>
                        <span><span style={{color:'#ff6b35', fontWeight:700}}>$</span> {purchases[expandedIdx].amount.toFixed(2)} USD</span>
                        <span><span style={{color:'#7ed957', fontWeight:700}}>▣</span> {purchases[expandedIdx].method}</span>
                      </div>
                    </div>
                    <button onClick={()=>setExpanded(null)} style={{background: (purchases[expandedIdx].details.length && expanded === expandedIdx) ? '#ff6b35' : '#f6f6f6', color: (purchases[expandedIdx].details.length && expanded === expandedIdx) ? '#fff' : '#23262f', border:'none', borderRadius:6, fontWeight:700, fontSize:18, padding:'10px 14px', cursor:'pointer', transition:'background 0.2s'}}>
                      {purchases[expandedIdx].details.length ? <span>&#8593;</span> : <span>&#8595;</span>}
                    </button>
                  </div>
                  {purchases[expandedIdx].details.length && expanded === expandedIdx && (
                    <div style={{display:'flex', borderTop:'1px solid #f2f2f2'}}>
                      <div style={{flex:1, padding:'28px 32px', borderRight:'1px solid #f2f2f2'}}>
                        {purchases[expandedIdx].details.map((item, i) => (
                          <div key={i} style={{display:'flex', alignItems:'center', marginBottom:28}}>
                            <img src={item.img} alt={item.title} style={{width:90, height:90, borderRadius:8, objectFit:'cover', marginRight:18}} />
                            <div>
                              <div style={{fontWeight:600, fontSize:16, marginBottom:2}}>
                                <span style={{color:'#ff6b35', fontWeight:700, fontSize:15, marginRight:6}}>&#9733; {item.rating}</span>
                                <span style={{color:'#888', fontWeight:500, fontSize:14}}>({item.reviews.toLocaleString()} Review)</span><br/>
                                {item.title}
                              </div>
                              <div style={{color:'#bdbdbd', fontSize:13, marginTop:2}}>
                                Course by: {item.author}
                              </div>
                            </div>
                            <div style={{marginLeft:'auto', color:'#ff6b35', fontWeight:700, fontSize:18}}>${item.price.toFixed(2)}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{flex:1, padding:'28px 32px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <div style={{fontWeight:600, fontSize:17, marginBottom:18}}>{purchases[expandedIdx].date}</div>
                        <div style={{display:'flex', alignItems:'center', gap:18, color:'#888', fontSize:15, marginBottom:18}}>
                          <span><span style={{color:'#7b61ff', fontWeight:700}}>▶</span> 2 Courses</span>
                          <span><span style={{color:'#ff6b35', fontWeight:700}}>$</span> 75.00 USD</span>
                          <span><span style={{color:'#7ed957', fontWeight:700}}>▣</span> Credit Card</span>
                        </div>
                        <div style={{display:'flex', alignItems:'center', gap:24, color:'#888', fontSize:15}}>
                          <span>{purchases[expandedIdx].card.name}</span>
                          <span>{purchases[expandedIdx].card.number}</span>
                          <span>{purchases[expandedIdx].card.expiry}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            purchases.forEach((purchase, idx) => {
              if (expanded !== idx) {
                cards.push(
                  <div key={purchase.id} style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 16px #0001', marginBottom:28, padding:0, overflow:'hidden'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'28px 32px 18px 32px', borderBottom: purchase.details.length ? '1px solid #f2f2f2' : 'none'}}>
                      <div>
                        <div style={{fontWeight:600, fontSize:17, marginBottom:8, color: (purchase.details.length && expanded === idx) ? '#ff6b35' : '#23262f'}}>{purchase.date}</div>
                        <div style={{display:'flex', alignItems:'center', gap:18, color:'#888', fontSize:15}}>
                          <span><span style={{color:'#7b61ff', fontWeight:700}}>▶</span> {purchase.courses} Courses</span>
                          <span><span style={{color:'#ff6b35', fontWeight:700}}>$</span> {purchase.amount.toFixed(2)} USD</span>
                          <span><span style={{color:'#7ed957', fontWeight:700}}>▣</span> {purchase.method}</span>
                        </div>
                      </div>
                      <button onClick={()=>setExpanded(idx)} style={{background: (purchase.details.length && expanded === idx) ? '#ff6b35' : '#f6f6f6', color: (purchase.details.length && expanded === idx) ? '#fff' : '#23262f', border:'none', borderRadius:6, fontWeight:700, fontSize:18, padding:'10px 14px', cursor:'pointer', transition:'background 0.2s'}}>
                        {purchase.details.length ? (expanded === idx ? <span>&#8593;</span> : <span>&#8595;</span>) : <span>&#8595;</span>}
                      </button>
                    </div>
                  </div>
                );
              }
            });
            return cards;
          })()}
          {/* Remove single summary card, add list of purchase cards at the end */}
          {[{
            date: "31st August, 2021 at 11:30 PM",
            courses: 52,
            amount: 507.00,
            method: "Credit Card"
          }, {
            date: "24th August, 2021 at 6:34 PM",
            courses: 1,
            amount: 9.00,
            method: "Credit Card"
          }, {
            date: "1st September, 2021 at 8:47 PM",
            courses: 1,
            amount: 25.00,
            method: "Credit Card"
          }, {
            date: "1st September, 2021 at 11:30 PM",
            courses: 5,
            amount: 89.00,
            method: "Credit Card"
          }, {
            date: "17th July, 2021 at 10:51 AM",
            courses: 7,
            amount: 140.00,
            method: "Credit Card"
          }].map((item, idx) => (
            <div key={idx} style={{background:'#fff', borderRadius:16, boxShadow:'0 2px 16px #0001', marginBottom:28, padding:0, overflow:'hidden', maxWidth:'100%'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'28px 32px 18px 32px'}}>
                <div>
                  <div style={{fontWeight:600, fontSize:20, marginBottom:8, color:'#23262f'}}>{item.date}</div>
                  <div style={{display:'flex', alignItems:'center', gap:18, color:'#888', fontSize:17}}>
                    <span><span style={{color:'#7b61ff', fontWeight:700, fontSize:18}}>▶</span> {item.courses} Courses</span>
                    <span><span style={{color:'#ff6b35', fontWeight:700, fontSize:18}}>$</span> {item.amount.toFixed(2)} USD</span>
                    <span><span style={{color:'#7ed957', fontWeight:700, fontSize:18}}>▣</span> {item.method}</span>
                  </div>
                </div>
                <button style={{background:'#f6f6f6', color:'#23262f', border:'none', borderRadius:8, fontWeight:700, fontSize:22, padding:'12px 18px', cursor:'pointer', transition:'background 0.2s'}}>
                  <span>&#8595;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div><br></br>
      <Footer />
    </>
  );
}
