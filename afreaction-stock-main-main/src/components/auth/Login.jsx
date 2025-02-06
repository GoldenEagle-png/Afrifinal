import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Auth.css'; // Unified, enhanced CSS

import googleIcon from '../../assets/google.png';
import facebookIcon from '../../assets/facebook.png';
import bgImage from '../../assets/download.png';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Client'); // Default role

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add authentication logic here, then redirect based on role
    if (role === 'Admin') {
      navigate('/Stock-Images/admin');
    } else if (role === 'Editor') {
      navigate('/Stock-Images/editor');
    } else if (role === 'Client') {
      navigate('/Stock-Images/client');
    }
  };

  const handleHomeRedirect = () => {
    navigate('/Stock-Images');
  };

  return (
    <>
     
      <div 
        className="auth-page" 
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="auth-card">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to your account</p>
          <form onSubmit={handleSubmit} className="auth-form">
            {/* Role selection */}
            <div className="form-group">
              <label htmlFor="role" className="form-label">Login As:</label>
              <select 
                id="role" 
                className="form-input" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Client">Client</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="social-login">
              <p className="divider-text">Or continue with</p>
              <div className="social-buttons">
                <a href="#0" className="social-btn google-btn">
                  <img
                    src={googleIcon}
                    alt="Google"
                    className="social-icon"
                  />
                  <span>Google</span>
                </a>
                <a href="#0" className="social-btn facebook-btn">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="social-icon"
                  />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="terms-check">
              <input type="checkbox" id="terms" required defaultChecked />
              <label htmlFor="terms">
                I accept the <a href="/terms">terms &amp; conditions</a>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="primary-btn">
                Sign In
              </button>
              <button 
                type="button" 
                onClick={handleHomeRedirect} 
                className="secondary-btn"
              >
                Home
              </button>
            </div>
          </form>
          <div className="auth-footer">
            <p>Don't have an account?</p>
            <a href="/Stock-Images/SignUp" className="create-account-btn">
              Create Account
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;
