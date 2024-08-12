import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header21">
      <h1>
        <Link to="/admindashboard" className="dashboard-link">Dashboard</Link>
      </h1>
      <div className="user-info21">
      <span>Admin</span>
        <button className="dropdown-button5" onClick={handleDropdownToggle}>
          
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKC2u1xrmlYviutXR9p-IM-AYHr-Se-viOg&s" 
            alt="Admin Icon" 
          />
        </button>
        
        {showDropdown && (
          <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">Profile</Link>
            <Link to="/adminlogin" className="dropdown-item">Logout</Link>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Header;
