import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const CompanyContext = createContext();

// Provide the context to components
export const CompanyProvider = ({ children }) => {
  // Static companies
  const initialCompanies = [
    { 
      src: 'https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494', 
      name: 'Tata Consultancy Services', 
      category: 'IT', 
      rating: '3.8', 
      reviews: '78K+', 
      description: 'Explore challenging and exciting opportunities at TCS', 
      location: 'Bangalore', 
      salary: ['3-5 Lakhs'], 
      jobs: ['Software Engineer', 'Data Analyst', 'Project Manager'], 
      department: ['Engineering'] 
    },
    { 
      src: 'https://download.logo.wine/logo/Wells_Fargo/Wells_Fargo-Logo.wine.png', 
      name: 'Wells Fargo', 
      category: 'MNC', 
      rating: '4.0', 
      reviews: '5.5K+', 
      description: 'Start your future now', 
      location: 'Hyderabad', 
      salary: ['7+ Lakhs'], 
      jobs: ['Investment Banker', 'Risk Analyst', 'Compliance Officer'], 
      department: ['Finance and Accounting'] 
    },
    { 
      src: 'https://example.com/icici-logo.png', 
      name: 'ICICI Bank', 
      category: 'MNC', 
      rating: '4.0', 
      reviews: '34.5K+', 
      description: 'Leading private sector bank in India.', 
      location: 'Mumbai', 
      salary: ['5-7 Lakhs'], 
      jobs: ['Financial Analyst', 'Bank Manager', 'Loan Officer'], 
      department: ['Finance and Accounting'] 
    },
    {
      src: 'https://example.com/datamatics-logo.png', 
      name: 'Datamatics Global Services', 
      category: 'IT', 
      rating: '4.1', 
      reviews: '12K+', 
      description: 'Innovative solutions in IT, data, and consulting services', 
      location: 'Mumbai', 
      salary: ['4-6 Lakhs'], 
      jobs: ['Software Developer', 'Data Scientist', 'Business Analyst'], 
      department: ['IT Services', 'Data Science']
    },
    {
      src: '', 
      name: 'Reliance Jio', 
      category: 'Telecom', 
      rating: '4.0', 
      reviews: '25K+', 
      description: 'Leading telecom company providing 4G LTE network services', 
      location: 'Mumbai', 
      salary: ['5-7 Lakhs'], 
      jobs: ['Network Engineer', 'Sales Manager', 'Customer Support Executive'], 
      department: ['Telecom', 'Customer Service', 'Sales']
    },
  ];

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies'));
    if (storedCompanies && storedCompanies.length > 0) {
      setCompanies(storedCompanies);
    } else {
      setCompanies(initialCompanies);
      localStorage.setItem('companies', JSON.stringify(initialCompanies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companies));
  }, [companies]);

  const addCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  const removeCompany = (companyName) => {
    setCompanies(companies.filter(company => company.name !== companyName));
  };

  return (
    <CompanyContext.Provider value={{ companies, addCompany, removeCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
