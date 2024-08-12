import React, { useState, useContext } from 'react';
import { CompanyContext } from '../CompanyContext';
import { useNavigate } from 'react-router-dom';
import './Addcompanies.css';

const AddCompanies = () => {
  const { addCompany } = useContext(CompanyContext);
  const [newCompany, setNewCompany] = useState({
    src: '',
    name: '',
    category: '',
    rating: '',
    reviews: '',
    description: '',
    location: '',
    salary: '',
    jobs: '',
    department: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({
      ...newCompany,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedCompany = {
      ...newCompany,
      salary: newCompany.salary.split(',').map(s => s.trim()),
      jobs: newCompany.jobs.split(',').map(j => j.trim()),
      department: newCompany.department.split(',').map(d => d.trim()),
    };
    addCompany(formattedCompany);
    setNewCompany({
      src: '',
      name: '',
      category: '',
      rating: '',
      reviews: '',
      description: '',
      location: '',
      salary: '',
      jobs: '',
      department: '',
    });
    navigate('/companies');
  };

  return (
    <div className="add-company-container">
      <h2>Add a New Company</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="src" value={newCompany.src} onChange={handleChange} placeholder="Image URL" required />
        <input type="text" name="name" value={newCompany.name} onChange={handleChange} placeholder="Company Name" required />
        <input type="text" name="category" value={newCompany.category} onChange={handleChange} placeholder="Category" />
        <input type="text" name="rating" value={newCompany.rating} onChange={handleChange} placeholder="Rating" />
        <input type="text" name="reviews" value={newCompany.reviews} onChange={handleChange} placeholder="Reviews" />
        <textarea name="description" value={newCompany.description} onChange={handleChange} placeholder="Description" />
        <input type="text" name="location" value={newCompany.location} onChange={handleChange} placeholder="Location" />
        <input type="text" name="salary" value={newCompany.salary} onChange={handleChange} placeholder="Salary (comma separated)" />
        <input type="text" name="jobs" value={newCompany.jobs} onChange={handleChange} placeholder="Jobs (comma separated)" />
        <input type="text" name="department" value={newCompany.department} onChange={handleChange} placeholder="Department (comma separated)" />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompanies;
