import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from "../logo67.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBook, faBuilding, faUsers, faBriefcase, faChartBar, faSearch, faCog, faIndustry, faComments, faStar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="admin-profile">
        <img src={logo} alt="Admin" />
        {/* <span>HireHorizon</span> */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon className="fa-icon" icon={faTachometerAlt} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/joblist">
              <FontAwesomeIcon className="fa-icon" icon={faUsers} /> Manage Users
            </Link>
          </li>
          <li>
            <Link to="/addjobs">
              <FontAwesomeIcon className="fa-icon" icon={faBriefcase} /> Add Jobs
            </Link>
          </li>
          <li>
            <Link to="/removejob">
              <FontAwesomeIcon className="fa-icon" icon={faBriefcase} /> Remove Jobs
            </Link>
          </li>
          <li>
            <Link to="/addcompanies">
              <FontAwesomeIcon className="fa-icon" icon={faBuilding} /> Add Companies
            </Link>
          </li>
          <li>
            <Link to="/removecompanies">
              <FontAwesomeIcon className="fa-icon" icon={faBuilding} /> Remove Companies
            </Link>
          </li>
          <li>
            <Link to="/company-profile">
              <FontAwesomeIcon className="fa-icon" icon={faIndustry} /> Company Profile
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <FontAwesomeIcon className="fa-icon" icon={faComments} /> Feedback and Reviews
            </Link>
          </li>
          {/* <li>
            <Link to="/report">
              <FontAwesomeIcon className="fa-icon" icon={faChartBar} /> B/W Dates Report
            </Link>
          </li> */}
          {/* <li>
            <Link to="/search">
              <FontAwesomeIcon className="fa-icon" icon={faSearch} /> Search
            </Link>
          </li> */}
          <li>
            <Link to="/settings">
              <FontAwesomeIcon className="fa-icon" icon={faCog} /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
