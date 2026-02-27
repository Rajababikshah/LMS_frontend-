import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./StudentDashboardCourses.css";
import "./StudentDashboardWishlist.css";
import course1Img from './assets/course1.jpg';
import course2Img from './assets/course2.jpg';
import course3Img from './assets/course3.jpg';
import studentAvatarImg from './assets/student-avatar.jpg';
import { useNavigate } from 'react-router-dom';

const wishlist = [
  {
    id: 1,
    img: course1Img,
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    rating: 4.6,
    reviews: 451444,
    price: 37.00,
    oldPrice: 49.00,
    authors: ["Harry Potter", "John Wick"],
  },
  {
    id: 2,
    img: course2Img,
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    rating: 4.8,
    reviews: 451444,
    price: 24.00,
    authors: ["Nobody"],
  },
  {
    id: 3,
    img: course3Img,
    title: "Angular - The Complete Guide (2021 Edition)",
    rating: 4.7,
    reviews: 451444,
    price: 13.00,
    authors: ["Kevin Gilbert"],
  },
];

export default function StudentDashboardWishlist() {
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
              <span onClick={() => navigate('/student-dashboard-teachers')} style={{cursor:'pointer'}}>Teachers</span>
              <span onClick={() => navigate('/student-dashboard-message')} style={{cursor:'pointer'}}>Message</span>
              <span className="active" style={{color:'#ff6b35', fontWeight:700, position:'relative', display:'inline-block'}}>Wishlist
              </span>
              <span onClick={() => navigate('/student-dashboard-purchase-history')} style={{cursor:'pointer'}}>Purchase History</span>
              <span onClick={() => navigate('/student-dashboard-settings')} style={{cursor:'pointer'}}>Settings</span>
            </div>
          </div>
        </div>
        <div className="wishlist-container">
          <div className="wishlist-title">Wishlist (3)</div>
          <div className="wishlist-table-wrapper">
            <table className="wishlist-table">
              <thead>
                <tr>
                  <th>COURSE</th>
                  <th>PRICES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="wishlist-course-info">
                        <img src={item.img} alt={item.title} className="wishlist-course-img" />
                        <div className="wishlist-course-details">
                          <div className="wishlist-course-title">
                            <span className="wishlist-course-rating">&#9733; {item.rating}</span>
                            <span className="wishlist-course-reviews">({item.reviews.toLocaleString()} Review)</span><br/>
                            {item.title}
                          </div>
                          <div className="wishlist-course-authors">
                            Course by: {item.authors.join(' • ')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="wishlist-price">${item.price.toFixed(2)}</span>
                      {item.oldPrice && <span className="wishlist-old-price">${item.oldPrice.toFixed(2)}</span>}
                    </td>
                    <td>
                      <button className="wishlist-action-btn buy">Buy Now</button>
                      <button className="wishlist-action-btn cart">Add To Cart</button>
                      <button className="wishlist-action-btn heart">&#10084;</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
