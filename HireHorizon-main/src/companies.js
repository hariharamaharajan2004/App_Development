import React, { useState, useContext } from 'react';
import { CompanyContext } from './CompanyContext';
import Navbar from './navbar';
import SearchFilterSidebar from './Searchfiltersidebar';

const Companies = () => {
  const { companies } = useContext(CompanyContext);
  const [filter, setFilter] = useState({
    workMode: '',
    location: '',
    salary: [],
    department: [],
  });

  const filteredCompanies = companies.filter((company) => {
    const matchesWorkMode = filter.workMode === '' || company.category === filter.workMode;
    const matchesLocation = filter.location === '' || company.location === filter.location;
    const matchesSalary = filter.salary.length === 0 || filter.salary.includes(company.salary[0]);
    const matchesDepartment = filter.department.length === 0 || company.department.some(dept => filter.department.includes(dept));

    return matchesWorkMode && matchesLocation && matchesSalary && matchesDepartment;
  });

  return (
    <div>
      <Navbar />
      <div className="companies-page1">
        <SearchFilterSidebar filter={filter} setFilter={setFilter} />
        <div className="content2">
          <div className="search-container">
            <form className='search-form'>
              <input type="search" placeholder="Search companies..." aria-label="Search" />
              <button type="submit" className="search-button">Search</button>
            </form>
          </div>
          <div className="featured-companies1">
            <h3 className='ti'>Featured companies actively hiring</h3>
            <div className="company-cards">
              {filteredCompanies.map((company, index) => (
                <div key={index} className="company-card">
                  <img src={company.src} alt={company.name} />
                  <h4>{company.name}</h4>
                  <p className="rating">{company.rating} <span>{company.reviews} reviews</span></p>
                  <p>{company.description}</p>
                  <button className="view-jobs">View jobs</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
