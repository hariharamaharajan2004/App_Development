import React, { useState } from 'react';
import { useJobContext } from '../Jobcontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Addjobs.css'; // Import the CSS file

const AddJobPage = () => {
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    date: '',
    salary: '',
    location: '',
    experience: '',
    qualification: '',
    tags: '',
    rating: '',
    reviews: '',
    type: '',
    posted: '',
    logo: '',
  });

  const { addJob } = useJobContext(); // Use the context's addJob function
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobWithTagsArray = {
      ...newJob,
      tags: newJob.tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags into an array
    };
    console.log('Adding job:', jobWithTagsArray); // Debugging line

    try {
      // Send the new job data to the backend
      await axios.post('http://localhost:8080/api/jobs/add', jobWithTagsArray);
      console.log('Job added successfully');
      
      // Update the context
      addJob(jobWithTagsArray);

      // Clear form
      setNewJob({
        title: '',
        company: '',
        date: '',
        salary: '',
        location: '',
        experience: '',
        qualification: '',
        tags: '',
        rating: '',
        reviews: '',
        type: '',
        posted: '',
        logo: '',
      });

      // Navigate to JobSearchPage
      navigate('/jobsearch'); 
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className="add-job-page">
      
      <h1>Add New Job</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input type="text" name="title" value={newJob.title} onChange={handleChange} id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" value={newJob.company} onChange={handleChange} id="company" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="text" name="date" value={newJob.date} onChange={handleChange} id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input type="text" name="salary" value={newJob.salary} onChange={handleChange} id="salary" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" value={newJob.location} onChange={handleChange} id="location" />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input type="text" name="experience" value={newJob.experience} onChange={handleChange} id="experience" />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="text" name="qualification" value={newJob.qualification} onChange={handleChange} id="qualification" />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma separated)</label>
          <input type="text" name="tags" value={newJob.tags} onChange={handleChange} id="tags" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input type="text" name="rating" value={newJob.rating} onChange={handleChange} id="rating" />
        </div>
        <div className="form-group">
          <label htmlFor="reviews">Reviews</label>
          <input type="text" name="reviews" value={newJob.reviews} onChange={handleChange} id="reviews" />
        </div>
        <div className="form-group">
          <label htmlFor="type">Job Type</label>
          <input type="text" name="type" value={newJob.type} onChange={handleChange} id="type" />
        </div>
        <div className="form-group">
          <label htmlFor="posted">Posted</label>
          <input type="text" name="posted" value={newJob.posted} onChange={handleChange} id="posted" />
        </div>
        <div className="form-group">
          <label htmlFor="logo">Logo URL</label>
          <input type="text" name="logo" value={newJob.logo} onChange={handleChange} id="logo" />
        </div>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJobPage;
