import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import '../styles/login.css';
import logo from '../assets/imgs/logo.png';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (username === storedEmail && password === storedPassword) {
      console.log('Login successful');
      onLogin(username, password);
      setLoginSuccess(true);
      navigate('/dashboard'); // Redirect to the dashboard page
    } else {
      alert('Invalid email or password');
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdF4I77rk1NbmNxRdn3CJpW8K7MZ2i53xfVThcG1NohgrFnItL2SBdCtjmCmTp13egtSXQ7rm2rB&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-601739518%3A1721974654067006&ddm=0';
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="form-header">
          <h2>Login</h2>
          <div className="google-button-container">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          <p>OR</p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="create-account">Login</button>
          {loginSuccess && (
            <div className="redirect-link">
              <Link to="/dashboard">Go to Dashboard</Link>
            </div>
          )}
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </form>
        <p className="login-link">
          Don't have an account? <Link to="/Signup">Create Account</Link>
        </p>
      </div>
      <div className="login-image">
        <div className="overlay-text">
          <h2>"Your Pathway to Career Success."</h2>
          <p>Create a free account and get full access to all features for 30 days. No credit card needed. Trusted by over 7,000 professionals.</p>
        </div>
      </div>
    </div>
  );
}

Login.defaultProps = {
  onLogin: () => {},
};

export default Login;
