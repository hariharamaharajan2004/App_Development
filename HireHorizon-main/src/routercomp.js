import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Companies from './companies';
import Aboutus from './aboutus';
import Services from './services';
import AdminLogin from './Admin/AdminLoginComponent.js';
import Dashboard from './dashboard';
import AdminDashboard from './Admin/Admindashboard.js';
import CourseDetails from './coursedetails';
import JobSearchPage from './jobsearchpage.js';
import View1 from './view1.js';
import ApplyForm from './applyform.js';
import Mentor from './mentor.js';
import Internship from './internship.js';
import Addjobs from './Admin/Addjob.js';
import RemoveJobPage from './removejob.js';
import ContactUs from './ContactUs.js';
import FAQ from './FAQ.js';
import View2 from './view2.js';
import View3 from './view3.js';
import View4 from './view4.js';
import View5 from './view5.js';
import View6 from './view6.js';
import AddCompanies from './Admin/Addcompanies.js';
import RemoveCompanies from './Removecompanies.js';
import { JobProvider } from './Jobcontext';
import { CompanyProvider } from './CompanyContext.js'; // Ensure correct import

function App() {
  return (
    <JobProvider>
      <CompanyProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/login" element={<Login />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/services" element={<Services />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/courses" element={<CourseDetails />} />
              <Route path="/jobsearch" element={<JobSearchPage />} />
              <Route path="/applyform" element={<ApplyForm />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/addjobs" element={<Addjobs />} />
              <Route path="/mentor" element={<Mentor />} />
              <Route path="/removejob" element={<RemoveJobPage />} />
              <Route path="/removecompanies" element={<RemoveCompanies />} />
              <Route path="/addcompanies" element={<AddCompanies />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/" element={<Login />} />


              <Route path="/view1" element={<View1 />} />
              <Route path="/view2" element={<View2 />} />
              <Route path="/view3" element={<View3 />} />
              <Route path="/view4" element={<View4 />} />
              <Route path="/view5" element={<View5 />} />
              <Route path="/view6" element={<View6 />} />


            </Routes>
          </div>
        </Router>
      </CompanyProvider>
    </JobProvider>
  );
}

export default App;
