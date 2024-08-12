import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from './logo68.png';
import GoogleButton from 'react-google-button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleAdminLoginRedirect = () => {
    navigate('/adminlogin');
  };
  const handleLoginRedirect = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors

    try {
        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);

            // Save the JWT token to localStorage
            localStorage.setItem('token', data.token);

            // Navigate to the dashboard after login
            navigate('/dashboard');
        } else {
            const errorData = await response.json();
            setErrorMessage(`Login failed: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error:', error); // Log error for debugging
        setErrorMessage('An unexpected error occurred. Please try again.');
    }
};


  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?...'; // Google OAuth URL
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
        <form onSubmit={handleLoginRedirect}>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="create-account1">Login</button>
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </form>
        <p className="login-link">
          Don't have an account? <button onClick={handleSignupRedirect} className='h' style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, color: 'blue', textDecoration: 'underline' }}>Create Account</button>
        </p>
        <p className="admin-login-link">
          Admin? <button onClick={handleAdminLoginRedirect} className='h' style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, color: 'blue', textDecoration: 'underline' }}>Login here</button>
        </p>
      </div>
      <div className="login-image">
        {/* Additional content here if needed */}
      </div>
    </div>
  );
};

export default Login;
