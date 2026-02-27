import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './StudentDashboardCourses.css';
import './OverallCourses.css';
import studentAvatarImg from './assets/student-avatar.jpg';

// Import student course images
import course1Img from './assets/course1.jpg';
import course2Img from './assets/course2.jpg';
import course3Img from './assets/course3.jpg';
import course4Img from './assets/course4.jpg';
import course5Img from './assets/course5.jpg';
import course6Img from './assets/course6.jpg';
import course7Img from './assets/course7.jpg';
import course8Img from './assets/course8.jpg';
import course9Img from './assets/course9.jpg';
import course10Img from './assets/course10.jpg';
import course11Img from './assets/course11.jpg';
import course12Img from './assets/course12.jpg';
import course13Img from './assets/course13.jpg';
import course14Img from './assets/course14.jpg';
import course15Img from './assets/course15.jpg';
import course16Img from './assets/course16.jpg';

// Import instructor course images
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

// Build arrays matching the source lists (keeps original data intact)
const studentCourses = [
  { img: course10Img, title: "Premiere Pro CC for Beginners: Video Editing Introduction", rating: '4.6', students: '58,420', price: '$39.00' },
  { img: course11Img, title: "Graphic Design Masterclass - Learn GREAT Design", rating: '4.7', students: '91,870', price: '$44.00' },
  { img: course12Img, title: "Angular - The Complete Guide (2021 Edition)", rating: '4.8', students: '134,560', price: '$59.00' },
  { img: course13Img, title: "Complete Blender Creator: Learn 3D Modelling", rating: '4.6', students: '72,910', price: '$49.00' },
  { img: course14Img, title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click", rating: '4.5', students: '63,340', price: '$34.00' },
  { img: course15Img, title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites", rating: '4.4', students: '49,875', price: '$29.00' },
  { img: course16Img, title: "Instagram Marketing 2021: Complete Guide to Instagram Growth", rating: '4.6', students: '55,210', price: '$31.00' },
  { img: course5Img, title: "[NEW] Ultimate AWS Certified Cloud Practitioner", rating: '4.8', students: '102,450', price: '$64.00' },
  { img: course6Img, title: "Automate the Boring Stuff with Python Programming", rating: '4.9', students: '187,320', price: '$42.00' },
  { img: course7Img, title: "Machine Learning A-Z™: Hands-On Python & R in Data Science", rating: '4.7', students: '156,780', price: '$69.00' },
  { img: course8Img, title: "Selenium WebDriver with Java - Basics to Advanced", rating: '4.5', students: '61,430', price: '$45.00' },
  { img: course9Img, title: "Data Structures & Algorithms Essentials (2021)", rating: '4.8', students: '118,990', price: '$52.00' },
  { img: course1Img, title: "Digital Marketing Masterclass - 23 Courses in 1", rating: '4.7', students: '84,670', price: '$38.00' },
  { img: course2Img, title: "Mega Digital Marketing Course A-Z: 12 Courses in 1", rating: '4.6', students: '73,210', price: '$35.00' },
  { img: course3Img, title: "Adobe Premiere Pro CC - Advanced Training Course", rating: '4.5', students: '52,340', price: '$41.00' },
  { img: course4Img, title: "iPhone Photography | Take Professional Photos With Your Phone", rating: '4.6', students: '47,680', price: '$27.00' },
];

const instructorCourses = [
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

export default function OverallCourses() {
  // Merge instructorCourses and studentCourses, normalize to a common shape and dedupe by title
  const [filterOpen, setFilterOpen] = useState(false);

  const map = new Map();

  instructorCourses.forEach(c => {
    map.set(c.title, {
      title: c.title,
      rating: c.rating || '—',
      students: c.students || '—',
      price: c.price || '—',
      image: c.image,
      source: 'instructor',
    });
  });

  studentCourses.forEach(c => {
    if (!map.has(c.title)) {
      map.set(c.title, {
        title: c.title,
        rating: c.rating || '—',
        students: c.students || '—',
        price: c.price || '—',
        image: c.img,
        source: 'student',
      });
    }
  });

  const allCourses = Array.from(map.values());

  return (
    <div>
      <Navbar />
      <div className="overall-container">
        {/* Filter panel/backdrop */}
        <div className={`overall-filter-backdrop ${filterOpen ? 'open' : ''}`} onClick={() => setFilterOpen(false)} />
        <aside className={`overall-filter-panel ${filterOpen ? 'open' : ''}`}>
          <div className="filter-header">
            <button className="filter-close" onClick={() => setFilterOpen(false)}>×</button>
            <h3>CATEGORY</h3>
          </div>
          <div className="filter-section">
            <div className="section category-section">
              <div className="filter-group">
                <div className="filter-group-title">Category</div>
                <div className="filter-items">
                  <label><input type="checkbox" /> Web development <span className="count">574</span></label>
                  <label><input type="checkbox" /> Data Science <span className="count">568</span></label>
                  <label className="checked"><input type="checkbox" defaultChecked /> Mobile Development <span className="count">1345</span></label>
                  <label><input type="checkbox" /> Software Testing <span className="count">317</span></label>
                  <label><input type="checkbox" /> Software Engineering <span className="count">31</span></label>
                  <label><input type="checkbox" /> Software Development Tools <span className="count">558</span></label>
                  <label><input type="checkbox" /> No-Code Development <span className="count">37</span></label>
                </div>
              </div>
            </div>

            <div className="section price-section">
              <div className="filter-group">
                <div className="filter-group-title">Price Range</div>
                <div className="price-options">
                  <label><input type="radio" name="price" /> Free</label>
                  <label><input type="radio" name="price" /> &lt; $25</label>
                  <label><input type="radio" name="price" /> $25 - $50</label>
                  <label><input type="radio" name="price" /> &gt; $50</label>
                </div>
              </div>
            </div>

            <div className="section level-duration-section">
              <div className="filter-group">
                <div className="filter-group-title">Level</div>
                <div className="filter-items">
                  <label><input type="checkbox" /> Beginner</label>
                  <label><input type="checkbox" /> Intermediate</label>
                  <label><input type="checkbox" /> Advanced</label>
                </div>
              </div>

              <div className="filter-group">
                <div className="filter-group-title">Duration</div>
                <div className="filter-items">
                  <label><input type="checkbox" /> &lt; 2 hours</label>
                  <label><input type="checkbox" /> 2 - 6 hours</label>
                  <label><input type="checkbox" /> &gt; 6 hours</label>
                </div>
              </div>
            </div>

            <div className="section rating-section">
              <div className="filter-group">
                <div className="filter-group-title">Minimum Rating</div>
                <div className="rating-controls">
                  <label><input type="radio" name="rating" /> ★★★★☆ &nbsp; & up</label>
                  <label><input type="radio" name="rating" /> ★★★☆☆ &nbsp; & up</label>
                  <label><input type="radio" name="rating" /> ★★☆☆☆ &nbsp; & up</label>
                </div>
              </div>
            </div>

            <div className="filter-actions">
              <button className="btn-clear" onClick={() => { /* TODO: clear controls */ }}>Clear</button>
              <button className="btn-apply" onClick={() => setFilterOpen(false)}>Apply Filters</button>
            </div>
          </div>
        </aside>
        <div className="overall-top">
          <div className="overall-top-inner">
            <button className={`filter-btn ${filterOpen ? 'active' : ''}`} onClick={() => setFilterOpen(v => !v)}>≡ Filter <span className="filter-count">3</span></button>
            <div className="overall-search">
              <input placeholder="Search courses..." className="overall-search-input" />
            </div>
            <div className="overall-actions">
              <label className="sort-label">Sort by:</label>
              <select className="overall-sort">
                <option>Trending</option>
                <option>Popular</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          <div className="overall-meta">
            <div className="overall-suggestions">Suggestion:
              <span> user interface</span>
              <span> user experience</span>
              <span> web design</span>
              <span> interface</span>
              <span> app</span>
            </div>
            <div className="overall-results">3,145,684 courses</div>
          </div>
        </div>

        <div className="overall-main" style={{padding: '8px 0 32px 0'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight:700, marginBottom: 16}}>All Courses</h2>
          <div className="student-dashboard-course-grid">
          {allCourses.map((course, idx) => (
            <div className="student-dashboard-course-card" key={idx}>
              <img className="student-dashboard-course-img" src={course.image} alt={course.title} />
              <div className="student-dashboard-course-content">
                <div className="student-dashboard-course-title">{course.title}</div>
                <div className="student-dashboard-course-subtitle">
                  <span className="course-meta">⭐ {course.rating} | 👨‍🎓 {course.students} | 💲 {course.price}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
