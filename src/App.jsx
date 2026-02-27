import Navbar from './Navbar';
import Signup from './Signup'; 
import SignIn from './SignIn';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import StudentDashboard from './StudentDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboardCourses from './StudentDashboardCourses';
import StudentDashboardTeachers from './StudentDashboardTeachers';
import StudentDashboardMessage from './StudentDashboardMessage';
import StudentDashboardWishlist from './StudentDashboardWishlist';
import StudentDashboardPurchaseHistory from './StudentDashboardPurchaseHistory';
import StudentDashboardSettings from './StudentDashboardSettings';
import BecomeInstructor from './BecomeInstructor';
import InstructorDashboard from './InstructorDashboard';
import InstructorCourses from './InstructorCourses';
import InstructorMessage from './InstructorMessage';
import InstructorSettings from './InstructorSettings';
import InstructorEarning from './InstructorEarning';
import OverallCourses from './OverallCourses';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /></>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-dashboard-courses" element={<StudentDashboardCourses />} />
        <Route path="/student-dashboard-teachers" element={<StudentDashboardTeachers />} />
        <Route path="/student-dashboard-message" element={<StudentDashboardMessage />} />
        <Route path="/student-dashboard-wishlist" element={<StudentDashboardWishlist />} />
        <Route path="/student-dashboard-purchase-history" element={<StudentDashboardPurchaseHistory />} />
        <Route path="/student-dashboard-settings" element={<StudentDashboardSettings />} />
        <Route path="/become-instructor" element={<BecomeInstructor />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor-courses" element={<InstructorCourses />} />
        <Route path="/courses" element={<OverallCourses />} />
        <Route path="/instructor-earning" element={<InstructorEarning />} />
        <Route path="/instructor-message" element={<InstructorMessage />} />
        <Route path="/instructor-settings" element={<InstructorSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
