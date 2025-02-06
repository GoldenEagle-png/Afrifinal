import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Auth.css'; // Unified, enhanced CSS
import Header from "./Header";
import Footer from "./Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    // Simple artistic password strength logic
    if (value.length === 0) {
      setPasswordStrength('');
    } else if (value.length < 6) {
      setPasswordStrength('weak');
    } else if (value.length < 10) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add signup logic here, then:
    navigate('/Stock-Images/Login');
  };

  const handleHomeRedirect = () => {
    navigate('/Stock-Images');
  };

  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="auth-card">
          <h2 className="auth-title">Create Your Account</h2>
          <p className="auth-subtitle">Sign up to download unlimited full-resolution media</p>

          <div className="social-login">
            <p className="divider-text">Or continue with</p>
            <div className="social-buttons">
              <a href="#0" className="social-btn google-btn">
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google"
                  className="social-icon"
                />
                <span>Google</span>
              </a>
              <a href="#0" className="social-btn facebook-btn">
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-input" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            {password && (
              <p className="password-strength">
                Password Strength:{' '}
                <span className={`strength-label ${passwordStrength}`}>
                  {passwordStrength.toUpperCase()}
                </span>
              </p>
            )}

            <div className="terms-check">
              <input type="checkbox" id="terms-signup" required />
              <label htmlFor="terms-signup">
                I accept the <a href="/terms">terms &amp; conditions</a>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="primary-btn">
                Create Account
              </button>
              <button type="button" onClick={handleHomeRedirect} className="secondary-btn">
                Home
              </button>
            </div>
          </form>
          <div className="auth-footer">
            <p>Already have an account?</p>
            <a href="/Stock-Images/Login" className="create-account-btn">
              Sign In
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
