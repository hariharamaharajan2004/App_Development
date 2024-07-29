import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ username }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Admin Panel</h2>
        <div className="sidebar-user">
          <p>Welcome, <span className="username">{username}</span></p>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/post-job">
            <FontAwesomeIcon icon={faClipboard} className="sidebar-icon" /> Post a Job
          </Link>
        </li>
        <li>
          <Link to="/domain-jobs">
            <FontAwesomeIcon icon={faClipboard} className="sidebar-icon" /> Domain Jobs
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" /> Login
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
