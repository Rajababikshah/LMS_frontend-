
import React from 'react';
import './Signup.css';
import rocketImg from './assets/rocket.png';

import { useEffect } from 'react';
const Signup = () => {
  useEffect(() => {
    document.body.classList.add('signup-page');
    return () => document.body.classList.remove('signup-page');
  }, []);
  return (
    <div className="signup-container">
      <div className="signup-illustration">
        <img src={rocketImg} alt="Signup Illustration" />
      </div>
      <div className="signup-form-area">
        <form className="signup-form">
          <h2 className="signup-title">Create your account</h2>
          <div className="signup-field-group">
            <label className="signup-label">Full Name</label>
            <div className="signup-row">
              <input id="signup-firstname" type="text" placeholder="First name..." className="signup-input" />
              <input id="signup-lastname" type="text" placeholder="Last name..." className="signup-input" />
            </div>
          </div>
          <div className="signup-field-group">
            <label htmlFor="signup-username" className="signup-label">Username</label>
            <input id="signup-username" type="text" placeholder="Username..." className="signup-input" />
          </div>
          <div className="signup-field-group">
            <label htmlFor="signup-email" className="signup-label">Email</label>
            <input id="signup-email" type="email" placeholder="Email address" className="signup-input" />
          </div>
          <div className="signup-row">
            <div className="signup-field-group" style={{flex: 1}}>
              <label htmlFor="signup-password" className="signup-label">Password</label>
              <div className="signup-password-wrapper">
                <input id="signup-password" type="password" placeholder="Create password" className="signup-input" />
              </div>
            </div>
            <div className="signup-field-group" style={{flex: 1}}>
              <label htmlFor="signup-confirm-password" className="signup-label">Confirm Password</label>
              <div className="signup-password-wrapper">
                <input id="signup-confirm-password" type="password" placeholder="Confirm password" className="signup-input" />
              </div>
            </div>
          </div>
          <div className="signup-row signup-actions">
            <div className="signup-checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I Agree with all of your <a href="#">Terms & Conditions</a></label>
            </div>
            <button type="submit" className="signup-btn-main">Create Account <span className="arrow">→</span></button>
          </div>
          <div className="signup-divider">
            <div className="signup-divider-line"></div>
            <span>SIGN UP WITH</span>
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

export default Signup;
