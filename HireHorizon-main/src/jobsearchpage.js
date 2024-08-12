// src/JobSearchPage.js
import React, { useState } from 'react';
import './jobsearchpage.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { useJobContext } from './Jobcontext';

const JobSearchPage = () => {
  const { jobs } = useJobContext(); // Use context to get jobs

  const [filter, setFilter] = useState({
    workMode: '',
    experience: 1,
  });

  return (
    <div className="jobsearch-page1">
      <Navbar />
      <div className="content">
        <aside className="filters">
          <div className="filter-group">
            <h4>Work Mode</h4>
            <label>
              <input
                type="checkbox"
                checked={filter.workMode === 'Work from office'}
                onChange={() => setFilter({ ...filter, workMode: 'Work from office' })}
              />
              Work from office (1200)
            </label>
            <label>
              <input
                type="checkbox"
                checked={filter.workMode === 'Hybrid'}
                onChange={() => setFilter({ ...filter, workMode: 'Hybrid' })}
              />
              Hybrid (150)
            </label>
            <label>
              <input
                type="checkbox"
                checked={filter.workMode === 'Remote'}
                onChange={() => setFilter({ ...filter, workMode: 'Remote' })}
              />
              Remote (80)
            </label>
          </div>

          <div className="filter-group">
            <h4>Department</h4>
            <label>
              <input type="checkbox" />
              Engineering
            </label>
            <label>
              <input type="checkbox" />
              Marketing
            </label>
            <label>
              <input type="checkbox" />
              Sales
            </label>
            <label>
              <input type="checkbox" />
              HR
            </label>
          </div>

          <div className="filter-group">
            <h4>Experience</h4>
            <input
              type="range"
              min="0"
              max="10"
              value={filter.experience}
              onChange={(e) => setFilter({ ...filter, experience: e.target.value })}
            />
            <div>{filter.experience} Years</div>
          </div>

          <div className="filter-group">
            <h4>Salary</h4>
            <label>
              <input type="checkbox" />
              1-3 Lakhs
            </label>
            <label>
              <input type="checkbox" />
              3-5 Lakhs
            </label>
            <label>
              <input type="checkbox" />
              5-7 Lakhs
            </label>
            <label>
              <input type="checkbox" />
              7+ Lakhs
            </label>
          </div>
        </aside>
        <main className="job-listings">
          <div className="search-container">
            <form className="search-form">
              <input type="search" placeholder="Search jobs..." aria-label="Search" />
              <button type="submit" className="search-button">Search</button>
            </form>
          </div>
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="logo-container">
                <img src={job.logo} alt={`${job.company} Logo`} className="company-logo" />
              </div>
              <Link to={`/JobDetail/${index}`} style={{ textDecoration: 'none' }}>
                <h2>{job.title}</h2>
              </Link>
              <p>{job.company}</p>
              <div className="job-details">
                <span>{job.date}</span>
                <span>{job.salary}</span>
                <span>{job.experience}</span>
                <span>{job.location}</span>
              </div>
              <div className="job-tags">
                {job.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="job-meta">
                <span>{job.type}</span>
                <span>{job.posted}</span>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default JobSearchPage;


