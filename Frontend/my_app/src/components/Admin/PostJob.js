import React, { useState, useContext } from 'react'; // Import useContext
import PostJobForm from './PostJobForm';
import './PostJob.css'; // Import the CSS file for styling
import Sidebar from '../Sidebar/Sidebar';
import { AuthContext } from './AuthContext'; // Adjust the import path

const PostJob = () => {
  const { user, logout } = useContext(AuthContext); // Use useContext correctly
  const [jobs, setJobs] = useState([]);

  const handlePostJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="post-job-container">
      <Sidebar username={user?.email} /> {/* Use user.email if user is an object with email */}
      <div className="post-job-content">
        <div className="post-job-form-container">
          <PostJobForm onSubmit={handlePostJob} />
        </div>
        <div className="posted-jobs-container">
          <h2>Posted Jobs</h2>
          {jobs.map((job, index) => (
            <div key={index} className="job-item">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostJob;
