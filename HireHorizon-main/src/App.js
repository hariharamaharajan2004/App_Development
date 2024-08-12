// src/App.js
import React from 'react';
import { JobProvider } from './Jobcontext';
import { CompanyProvider } from '../CompanyContext'; // Ensure correct import
import AddJobPage from './AddJobPage';
import JobSearchPage from './jobsearchpage';
import AddCompanies from './Admin/Addcompanies';
import RemoveCompanies from './Removecompanies';

function App() {
  return (
    <JobProvider>
      <CompanyProvider>
        <AddJobPage />
        <JobSearchPage />
        <AddCompanies />
        <RemoveCompanies />
        {/* Other components */}
      </CompanyProvider>
    </JobProvider>
  );
}

export default App;
