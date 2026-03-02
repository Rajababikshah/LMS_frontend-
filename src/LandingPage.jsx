import './HeaderSection.css';
import './BrowseCategory.css';
import './BestSellingCourses.css';
import './FeatureCourses.css';
import './InstructorSection.css';
import './TrustedCompanies.css';
import netflixLogo from "./assets/netflix.png";
import youtubeLogo from "./assets/youtube.png";
import googleLogo from "./assets/google.png";
import lenovoLogo from "./assets/lenovo.png";
import slackLogo from "./assets/slack.png";
import verizonLogo from "./assets/verizon.png";
import lexmarkLogo from "./assets/lexmark.png";
import microsoftLogo from "./assets/microsoft.png";
import './LandingFooterCTA.css';
import MainSectionLayout from "./MainSectionLayout";
import headerImg from './assets/header-img.jpg';
import { useNavigate } from 'react-router-dom';

// HeaderSection
const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <MainSectionLayout
      title={"Learn with expert anytime anywhere"}
      desc={"Our mission is to help people to find the best course online and learn with expert anytime, anywhere."}
      button={<span onClick={() => navigate('/signup')}>Create Account</span>}
      image={headerImg}
    />
  );
};

// FeatureCourses
const featureCourses = [
  {
    title: "Investing In Stocks The Complete Course! (13 H...",
    category: "Health & Fitness",
    categoryColor: "#2ecc40",
    price: "$14.00",
    oldPrice: "$26.00",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    author: "Kevin Gilbert",
    rating: 5.0,
    ratingCount: "357,914",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    title: "Google Analytics Certification - Learn How To...",
    category: "Personal Development",
    categoryColor: "#ff6b35",
    price: "$14.00",
    oldPrice: "$26.00",
    image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg",
    author: "Kevin Gilbert",
    rating: 5.0,
    ratingCount: "357,914",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    title: "Adobe XD for Web Design: Essential Principles",
    category: "Productivity",
    categoryColor: "#6c63ff",
    price: "$14.00",
    oldPrice: "$26.00",
    image: "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg",
    author: "Kevin Gilbert",
    rating: 5.0,
    ratingCount: "357,914",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    title: "The Python Mega Course: Build 10 Real World ...",
    category: "Music",
    categoryColor: "#ffb347",
    price: "$14.00",
    oldPrice: "$26.00",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    author: "Kevin Gilbert",
    rating: 5.0,
    ratingCount: "357,914",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
];
const FeatureCourses = () => (
  <section className="feature-courses-section">
    <div className="feature-courses-header">
      <h2 className="feature-courses-title">Our feature courses</h2>
    </div>
    <div className="feature-courses-grid">
      {featureCourses.map((course, i) => (
        <div className="feature-course-card" key={i}>
          <img className="feature-course-img" src={course.image} alt={course.title} />
          <div className="feature-course-info">
            <div className="feature-course-row">
              <span className="feature-course-category" style={{background: course.categoryColor}}>{course.category}</span>
              <span className="feature-course-price">{course.price}</span>
              <span className="feature-course-oldprice">{course.oldPrice}</span>
            </div>
            <div className="feature-course-title2">{course.title}</div>
            <div className="feature-course-author">{course.author}</div>
            <div className="feature-course-row feature-course-meta">
              <span className="feature-course-rating">★ {course.rating} <span className="feature-course-rating-count">({course.ratingCount})</span></span>
              <span className="feature-course-students">👤 {course.students} students</span>
              <span className="feature-course-level">📊 {course.level}</span>
              <span className="feature-course-duration">⏰ {course.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// BestSellingCourses
const courses = [
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    category: "Design",
    price: "$57",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "The Complete 2021 Web Development Bootcamp",
    category: "Development",
    price: "$57",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "Learn Python Programming Masterclass",
    category: "Business",
    price: "$57",
    image: "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "Marketing",
    price: "$57",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "Reiki Level I, II and Master/Teacher Program",
    category: "IT & Software",
    price: "$57",
    image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "The Complete Foundation Stock Trading Course",
    category: "Music",
    price: "$57",
    image: "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "Beginner to Pro in Excel: Financial Modeling and Valuati...",
    category: "Marketing",
    price: "$57",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "The Python Mega Course: Build 10 Real World Applications",
    category: "Health & Fitness",
    price: "$57",
    image: "https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "Copywriting - Become a Freelance Copywriter, your ow...",
    category: "Design",
    price: "$57",
    image: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
  {
    title: "Google Analytics Certification - Learn How To Pass The Exam",
    category: "Lifestyle",
    price: "$57",
    image: "https://images.pexels.com/photos/1181442/pexels-photo-1181442.jpeg",
    rating: 5.0,
    students: "265.7K",
  },
];
const BestSellingCourses = () => (
  <section className="best-selling-section">
    <h2 className="best-selling-title">Best selling courses</h2>
    <div className="best-selling-grid">
      {courses.map((course, i) => (
        <div className="best-selling-card" key={i}>
          <img className="best-selling-img" src={course.image} alt={course.title} />
          <div className="best-selling-info">
            <div className="best-selling-row">
              <span className="best-selling-category">{course.category}</span>
              <span className="best-selling-price">{course.price}</span>
            </div>
            <div className="best-selling-title2">{course.title}</div>
            <div className="best-selling-row best-selling-meta">
              <span className="best-selling-rating">★ {course.rating}</span>
              <span className="best-selling-students">{course.students} students</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// BrowseCategory
const categories = [
  { label: "Label", courses: "63,476 Courses", color: "#edeaff", icon: "🔧" },
  { label: "Business", courses: "52,822 Courses", color: "#e7f7ea", icon: "🤝" },
  { label: "Finance & Accounting", courses: "33,841 Courses", color: "#fff3e7", icon: "🧾" },
  { label: "IT & Software", courses: "22,649 Courses", color: "#ffe7ea", icon: "🏳️" },
  { label: "Personal Development", courses: "20,126 Courses", color: "#fff3ed", icon: "📝" },
  { label: "Office Productivity", courses: "13,932 Courses", color: "#f3f4f6", icon: "🖥️" },
  { label: "Marketing", courses: "12,068 Courses", color: "#edeaff", icon: "📈" },
  { label: "Photography & Video", courses: "6,196 Courses", color: "#f3f4f6", icon: "📷" },
  { label: "Lifestyle", courses: "2,736 Courses", color: "#fff3e7", icon: "🏖️" },
  { label: "Design", courses: "2,600 Courses", color: "#fff3ed", icon: "✏️" },
  { label: "Health & Fitness", courses: "1,678 Courses", color: "#e7f7ea", icon: "🏥" },
  { label: "Music", courses: "959 Courses", color: "#fff3e7", icon: "🎵" },
];
const BrowseCategory = () => (
  <section className="browse-category-section">
    <h2 className="browse-category-title">Browse top category</h2>
    <div className="browse-category-grid">
      {categories.map((cat, i) => (
        <div
          className="browse-category-card"
          key={cat.label}
          style={{ background: cat.color }}
        >
          <div className="browse-category-icon">{cat.icon}</div>
          <div>
            <div className="browse-category-label">{cat.label}</div>
            <div className="browse-category-courses">{cat.courses}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="browse-category-footer">
      We have more category & subcategory. <span className="browse-all">Browse All <span className="arrow">→</span></span>
    </div>
  </section>
);

// InstructorSection
const instructors = [
  {
    name: "Devon Lane",
    title: "Senior Developer",
    rating: 4.6,
    students: 854,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Darrell Steward",
    title: "Digital Product Designer",
    rating: 4.9,
    students: 451444,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Jane Cooper",
    title: "UI/UX Designer",
    rating: 4.8,
    students: 435671,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Albert Flores",
    title: "Adobe Instructor",
    rating: 4.7,
    students: 511123,
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Kathryn Murphy",
    title: "Lead Developer",
    rating: 4.2,
    students: 2711,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];
const InstructorSection = () => {
  const navigate = useNavigate();
  return (
    <section className="instructor-section">
    <div className="instructor-top">
      <div className="instructor-cta instructor-cta-main">
        <div>
          <h3>Become an instructor</h3>
          <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
          <button className="instructor-btn" onClick={() => navigate('/instructor-dashboard')}>Start Teaching <span className="arrow">→</span></button>
        </div>
        <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="instructor" className="instructor-img" />
      </div>
      <div className="instructor-cta instructor-cta-steps">
        <h4>Your teaching & earning steps</h4>
        <ul>
          <li><span className="step step1">1</span> Apply to become instructor</li>
          <li><span className="step step2">2</span> Build & edit your profile</li>
          <li><span className="step step3">3</span> Create your new course</li>
          <li><span className="step step4">4</span> Start teaching & earning</li>
        </ul>
      </div>
    </div>
    <div className="instructor-month">
      <h2 className="instructor-title">Top instructor of the month</h2>
      <div className="instructor-grid">
        {instructors.map((ins, i) => (
          <div className="instructor-card" key={i}>
            <img src={ins.image} alt={ins.name} className="instructor-avatar" />
            <div className="instructor-name">{ins.name}</div>
            <div className="instructor-role">{ins.title}</div>
            <div className="instructor-meta">
              <span className="instructor-rating">★ {ins.rating}</span>
              <span className="instructor-students">{ins.students.toLocaleString()} students</span>
            </div>
          </div>
        ))}
      </div>
      <div className="instructor-footer">
        Thousands of students waiting for a instructor. Start teaching & earning now! <span className="become-instructor" onClick={() => navigate('/instructor-dashboard')}>Become Instructor <span className="arrow">→</span></span>
      </div>
      </div>
    </section>
  );
};

// TrustedCompanies
const companies = [
  { name: "Netflix", logo: netflixLogo },
  { name: "YouTube", logo: youtubeLogo },
  { name: "Google", logo: googleLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "Slack", logo: slackLogo },
  { name: "Verizon", logo: verizonLogo },
  { name: "Lexmark", logo: lexmarkLogo },
  { name: "Microsoft", logo: microsoftLogo },
];
const TrustedCompanies = () => (
  <section className="trusted-companies-section">
    <div className="trusted-companies-content">
      <h2>6.3k trusted companies</h2>
      <p>
        Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
      </p>
    </div>
    <div className="trusted-companies-logos">
      {companies.map((company) => (
        <div className="company-card" key={company.name}>
          <img src={company.logo} alt={company.name} />
        </div>
      ))}
    </div>
  </section>
);

function FooterSection() {
  const navigate = useNavigate();
  return (
    <footer className="footer-section">
      <div className="footer-bottom">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">E-tutor</span>
          </div>
          <p>Aliquam rhoncus ligula est, <br />non pulvinar elit convallis nec.<br /> Donec mattis odio at.</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#" className="active"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>TOP 4 CATEGORY</h4>
            <ul>
              <li>Development</li>
              <li>Finance & Accounting</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>About</li>
              <li onClick={() => navigate('/instructor-dashboard')}>Become Instructor</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>DOWNLOAD OUR APP</h4>
            <div className="footer-apps">
              <a className="app-btn app-store">Download now<br />App Store</a>
              <a className="app-btn play-store">Download now<br />Play Store</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div>
      <HeaderSection />
      <BrowseCategory />
      <BestSellingCourses />
      <FeatureCourses />
      <InstructorSection />
      <TrustedCompanies />
        <section className="landing-cta-stats">
          <div className="landing-cta-inner">
            <div className="landing-cta-left">
              <h2>Start learning with 67.1k<br/>students around the world.</h2>
              <div className="landing-cta-actions">
                <button className="cta-primary">Join The Family</button>
                <button className="cta-secondary">Browse All Courses</button>
              </div>
            </div>
              <div className="landing-cta-right">
                <div className="stat-item">
                  <div className="stat-value" style={{ color: '#fff' }}>6.3k</div>
                  <div className="stat-label" style={{ color: '#fff' }}>Online courses</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ color: '#fff' }}>26k</div>
                  <div className="stat-label" style={{ color: '#fff' }}>Certified Instructor</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ color: '#fff' }}>99.9%</div>
                  <div className="stat-label" style={{ color: '#fff' }}>Success Rate</div>
                </div>
              </div>
          </div>
        </section>
      <FooterSection />
    </div>
  );
}

export default LandingPage;
