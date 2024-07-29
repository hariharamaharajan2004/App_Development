import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.js';
import Footer from './footer.js';
import '../styles/dashboard.css';
import tcsLogo from '../assets/imgs/tcs-logo.png';
import iciciLogo from '../assets/imgs/icici-logo.png';
import wellsFargoLogo from '../assets/imgs/wellsfargo-logo.png';
import datamaticsLogo from '../assets/imgs/datamatics-logo.png';
import amazonLogo from '../assets/imgs/amazon-logo.png';
import actelent from '../assets/imgs/actalent-logo.png';
import airtel from '../assets/imgs/airtel-logo.png';
import capegemini from '../assets/imgs/capegemini-logo.png';
import logo from '../assets/imgs/logo.png'; // Add your logo here
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const companies = [
  { src: tcsLogo, name: 'Tata Consultancy Services', rating: '3.8', reviews: '78K+', description: 'Explore challenging and exciting opportunities at TCS', moreInfo: 'Additional details about TCS jobs and roles.' },
  { src: iciciLogo, name: 'ICICI Bank', rating: '4.0', reviews: '34.5K+', description: 'Leading private sector bank in India.', moreInfo: 'Additional details about ICICI Bank jobs and roles.' },
  { src: wellsFargoLogo, name: 'Wells Fargo', rating: '4.0', reviews: '5.5K+', description: 'Start your future now', moreInfo: 'Additional details about Wells Fargo jobs and roles.' },
  { src: datamaticsLogo, name: 'Datamatics', rating: '3.5', reviews: '1.8K+', description: 'Global digital solutions & technology company.', moreInfo: 'Additional details about Datamatics jobs and roles.' },
  { src: amazonLogo, name: 'Amazon', rating: '4.1', reviews: '60K+', description: 'World\'s largest e-commerce company.', moreInfo: 'Additional details about Amazon jobs and roles.' },
  { src: actelent, name: 'Actalent', rating: '3.7', reviews: '80K+', description: 'Global Engineering company.', moreInfo: 'Additional details about Actalent jobs and roles.' },
  { src: airtel, name: 'Airtel', rating: '4.0', reviews: '58K+', description: 'Largest telecom provider.', moreInfo: 'Additional details about Airtel jobs and roles.' },
  { src: capegemini, name: 'CapeGemini', rating: '4.1', reviews: '108K+', description: 'Global leader in consulting and digital transformation.', moreInfo: 'Additional details about CapeGemini jobs and roles.' },
];

function Dashboard() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [expandedCompanyIndex, setExpandedCompanyIndex] = useState(null);

  const handleExploreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewJobsClick = (index) => {
    setExpandedCompanyIndex(expandedCompanyIndex === index ? null : index);
  };

  const handlecomRedirect = () => {
    navigate('/companies');
  };

  return (
    <div className="dashboard">
      <Navbar />
      <main className="main">
        <h2>Find your dream job now</h2>
        <p>5 lakh+ jobs for you to explore</p>
        <div className="search-bar">
          <input type="text" placeholder="Job titles, key words or company" />
          <button className="search-button">Search</button>
        </div>
        <div className="promotion">
          <h3>Think career, Think us</h3>
          <p>A suite of tools, services, and resources that help you get ahead in your career</p>
          <button className="explore-button" onClick={handleExploreClick}>Start exploring</button>
        </div>
        <div className="categories">
          <button>Remote</button>
          <button>MNC</button>
          <button>Internship</button>
          <button>Supply Chain</button>
          <button>Sales</button>
          <button>Engineering</button>
        </div>
        <div ref={sectionRef} className="featured-companies">
          <h3>Featured companies actively hiring</h3>
          <div className="company-cards">
            {companies.map((company, index) => (
              <div key={index} className="company-card">
                <img src={company.src} alt={company.name} />
                <h4>{company.name}</h4>
                <p className="rating">{company.rating} <span>{company.reviews} reviews</span></p>
                <p>{company.description}</p>
                <button className="view-jobs" onClick={() => handleViewJobsClick(index)}>
                  {expandedCompanyIndex === index ? 'Hide details' : 'View jobs'}
                </button>
                {expandedCompanyIndex === index && (
                  <div className="more-info">
                    <p>{company.moreInfo}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="view-all-companies" onClick={handlecomRedirect}>View all companies</button>
        </div>
        <div className="sponsored-companies">
          <h3>Sponsored Companies</h3>
          <div className="sponsored-company-cards">
            {/* Add your sponsored company cards here */}
            <div className="sponsored-company-card">
              <img src={tcsLogo} alt="TCS" />
              <h4>TCS</h4>
              <p>Innovative IT Solutions</p>
            </div>
            <div className="sponsored-company-card">
              <img src={iciciLogo} alt="ICICI Bank" />
              <h4>ICICI Bank</h4>
              <p>Leading Private Bank</p>
            </div>
            <div className="sponsored-company-card">
              <img src={wellsFargoLogo} alt="Wells Fargo" />
              <h4>Wells Fargo</h4>
              <p>Start Your Future</p>
            </div>
            <div className="sponsored-company-card">
              <img src={datamaticsLogo} alt="Datamatics" />
              <h4>Datamatics</h4>
              <p>Global Digital Solutions</p>
            </div>
            <div className="sponsored-company-card">
              <img src={amazonLogo} alt="Amazon" />
              <h4>Amazon</h4>
              <p>World's Largest E-commerce</p>
            </div>
            <div className="sponsored-company-card">
              <img src={actelent} alt="Actalent" />
              <h4>Actalent</h4>
              <p>Global Engineering Company</p>
            </div>
            <div className="sponsored-company-card">
              <img src={airtel} alt="Airtel" />
              <h4>Airtel</h4>
              <p>Largest Telecom Provider</p>
            </div>
            <div className="sponsored-company-card">
              <img src={capegemini} alt="CapeGemini" />
              <h4>CapeGemini</h4>
              <p>Consulting & Digital Transformation</p>
            </div>
            {/* Add more sponsored company cards as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
