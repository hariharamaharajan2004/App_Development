import React, { useContext } from 'react';
import { CompanyContext } from './CompanyContext';
import './Removecompanies.css'; // Import the CSS file

const RemoveCompanies = () => {
  const { companies, removeCompany } = useContext(CompanyContext);

  const handleRemove = (companyName) => {
    removeCompany(companyName);
  };

  return (
    <div className="remove-company-page">
      <h1>Remove Company</h1>
      {companies.length > 0 ? (
        <div className="company-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <img src={company.src} alt={company.name} className="company-image" />
              <div className="company-details">
                <h4>{company.name}</h4>
                <p>{company.description}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemove(company.name)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No companies available to remove.</p>
      )}
    </div>
  );
};

export default RemoveCompanies;
