import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import '../styles/signup.css';

function Signup({ onRegister }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !phone || !location) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isStrongPassword(password)) {
      alert('Please choose a stronger password. It should contain at least one lowercase letter, one uppercase letter, and one digit, and be at least 8 characters long.');
      return;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    if (onRegister) {
      onRegister(firstName, lastName, email, password);
    }

    console.log('Sign-up successful');
    setSignupSuccess(true);
    navigate('/dashboard');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="signup">
      <div className="signup-main">
        <div className="logo">
          <img src={logo} alt="HireHorizon" />
        </div>
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <h1 className="hi">Register to HireHorizon</h1>
          <hr className='co'></hr>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <small>Must be at least 8 characters long, with at least one lowercase letter, one uppercase letter, and one digit.</small>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Register
          </button>
          {signupSuccess && (
            <div className="redirect-link">
              <Link to="/Login">Go to Login</Link>
            </div>
          )}
        </form>
        <p className="signin-link">
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

Signup.defaultProps = {
  onRegister: () => {},
};

export default Signup;
