import React from 'react';
import './companies.css';

const SearchFilterSidebar = ({ filter, setFilter }) => {
  const handleWorkModeChange = (e) => {
    setFilter((prevFilter) => ({ ...prevFilter, workMode: e.target.value }));
  };

  const handleLocationChange = (e) => {
    setFilter((prevFilter) => ({ ...prevFilter, location: e.target.value }));
  };

  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setFilter((prevFilter) => ({
      ...prevFilter,
      salary: prevFilter.salary.includes(value)
        ? prevFilter.salary.filter((s) => s !== value)
        : [...prevFilter.salary, value],
    }));
  };

  const handleDepartmentChange = (e) => {
    const value = e.target.value;
    setFilter((prevFilter) => ({
      ...prevFilter,
      department: prevFilter.department.includes(value)
        ? prevFilter.department.filter((d) => d !== value)
        : [...prevFilter.department, value],
    }));
  };

  return (
    <div className="sidebar1">
      <h3>Filter</h3>
      <div className="filter-section">
        <label>Company Type</label>
        <select value={filter.workMode} onChange={handleWorkModeChange}>
          <option value="">All</option>
          <option value="MNC">MNC</option>
          {/* <option value="Start-up">Start-up</option> */}
          <option value="Govt">Govt</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Location</label>
        <select value={filter.location} onChange={handleLocationChange}>
          <option value="">Enter Location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Erode">Erode</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="filter-group">
        <h4>Salary</h4>
        {['1-3 Lakhs', '3-5 Lakhs', '5-7 Lakhs', '7+ Lakhs'].map((range) => (
          <label key={range}>
            <input
              type="checkbox"
              value={range}
              checked={filter.salary.includes(range)}
              onChange={handleSalaryChange}
            />
            {range}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Department</h4>
        {['Engineering', 'Marketing', 'Data Science', 'Finance and Accounting'].map((dept) => (
          <label key={dept}>
            <input
              type="checkbox"
              value={dept}
              checked={filter.department.includes(dept)}
              onChange={handleDepartmentChange}
            />
            {dept}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterSidebar;
