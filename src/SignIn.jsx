import React from 'react';
import './Signup.css';
import rocketImg from './assets/rocket1.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add('signup-page');
    return () => document.body.classList.remove('signup-page');
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add credential validation logic here if needed
    navigate('/student-dashboard');
  };

  return (
    <div className="signup-container">
      <div className="signup-illustration">
        <img src={rocketImg} alt="Sign In Illustration" />
      </div>
      <div className="signup-form-area">
        <form className="signup-form" onSubmit={handleSignIn}>
          <h2 className="signup-title">Sign in to your account</h2>
          <div className="signup-field-group">
            <label htmlFor="signin-email" className="signup-label">Email</label>
            <input id="signin-email" type="text" placeholder="Username or email address..." className="signup-input" />
          </div>
          <div className="signup-field-group">
            <label htmlFor="signin-password" className="signup-label">Password</label>
            <div className="signup-password-wrapper">
              <input id="signin-password" type="password" placeholder="Password" className="signup-input" />
            </div>
          </div>
          <div className="signup-row signup-actions">
            <div className="signup-checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="signup-btn-main">Sign In <span className="arrow">→</span></button>
          </div>
          <div className="signup-divider">
            <div className="signup-divider-line"></div>
            <span>SIGN IN WITH</span>
            <div className="signup-divider-line"></div>
          </div>
          <div className="signup-social-row">
            <button type="button" className="signup-social-btn google">Google</button>
            <button type="button" className="signup-social-btn facebook">Facebook</button>
            <button type="button" className="signup-social-btn apple">Apple</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
