import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-card">
      <div className="login-header">
        <h2 className="login-title">SHAMPOO</h2>
        <p className="login-subtitle">Access your creative workspace</p>
      </div>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        {/* Email Input with Icon */}
        <div className="input-container">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <input required type="email" placeholder="Email Address" className="styled-input" />
        </div>

        {/* Password Input with Icon and Toggle */}
        <div className="input-container">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input 
            required 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            className="styled-input" 
          />
          <button 
            type="button" 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        
        <div className="form-options">
          <label className="checkbox-label">
            <input type="checkbox" /> <span>Remember me</span>
          </label>
          <a href="#" className="text-link">Forgot?</a>
        </div>

        <button type="submit" className="primary-btn">Sign In</button>
      </form>

      <div className="divider">
        <span>OR CONNECT WITH</span>
      </div>

      <div className="social-row">
        {/* Google Icon */}
        <button className="icon-btn" aria-label="Google">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </button>

        {/* Apple Icon */}
        <button className="icon-btn" aria-label="Apple">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05 1.78-3.19 1.76-1.11-.02-1.57-.75-2.83-.75-1.29 0-1.76.73-2.85.77-1.12.04-2.27-.88-3.32-1.89-2.16-2.08-3.81-5.88-3.81-8.54 0-4.23 2.72-6.44 5.35-6.44 1.39 0 2.44.83 3.4.83.89 0 2.22-.98 3.86-.81 1.63.17 2.87.97 3.59 1.99-3.21 1.89-2.69 6.2.51 7.42-.64 1.58-1.51 3.12-2.71 4.66zm-4.32-16.14c.73-.89 1.22-2.12 1.08-3.35-1.06.04-2.34.71-3.1 1.59-.68.78-1.28 2.05-1.12 3.23 1.18.09 2.37-.58 3.14-1.47z" />
          </svg>
        </button>
      </div>

      <p className="bottom-text">
        Don't have an account? <a href="#">Join the Studio</a>
      </p>
    </div>
  );
}

export default Login;