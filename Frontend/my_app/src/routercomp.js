// src/RouterComp.js
import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard';
import Signup from './components/pages/signup';
import Login from './components/pages/login';
import Companies from './components/pages/companies';
import About from './components/pages/aboutus';
import Programs from './components/pages/programs';
import OurSuccessors from './components/pages/oursuccessors';
import PostJob from './components/Admin/PostJob';
import { AuthContext } from './components/Admin/AuthContext';
import RecruiterLogin from '../src/components/Admin/RecruiterLogin'; // Import the RecruiterLogin component


const RouterComp = () => {
  const handleLogin = (username, password) => {
    console.log(`Logged in with ${username} and ${password}`);
    // Assuming the dashboard path is /dashboard
    window.location.href = "/dashboard";
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/successors" element={<OurSuccessors />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/RecruiterLogin" element={<RecruiterLogin />} /> {/* Add this route */}

      </Routes>
    </BrowserRouter>
  );
};

export default RouterComp;
