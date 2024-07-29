import React, { useState } from 'react';
import tcsLogo from '../assets/imgs/tcs-logo.png';
import iciciLogo from '../assets/imgs/icici-logo.png';
import wellsFargoLogo from '../assets/imgs/wellsfargo-logo.png';
import datamaticsLogo from '../assets/imgs/datamatics-logo.png';
import amazonLogo from '../assets/imgs/amazon-logo.png';
import actelent from '../assets/imgs/actalent-logo.png';
import airtel from '../assets/imgs/airtel-logo.png';
import capegemini from '../assets/imgs/capegemini-logo.png';
import chart from '../assets/imgs/chart-logo.png';
import fis from '../assets/imgs/fis-logo.png';
import genpact from '../assets/imgs/genpact-logo.png';
import jio from '../assets/imgs/jio-logo.png';
import jp from '../assets/imgs/jp-logo.png';
import persistant from '../assets/imgs/persistent-logo.png';
import relainceretail from '../assets/imgs/relianceretail-logo.png';
import xoriant from '../assets/imgs/xoriant-logo.png';
import acc from '../assets/imgs/accenture-logo.png';
import '../styles/companies.css';
import Navbar from './navbar';
import Footer from './footer';

const companies = [
  { src: tcsLogo, name: 'Tata Consultancy Services', rating: '3.8', reviews: '78K+', description: 'Explore challenging and exciting opportunities at TCS', moreInfo: 'Additional details about TCS jobs and roles.' },
  { src: iciciLogo, name: 'ICICI Bank', rating: '4.0', reviews: '34.5K+', description: 'Leading private sector bank in India.', moreInfo: 'Additional details about ICICI Bank jobs and roles.' },
  { src: wellsFargoLogo, name: 'Wells Fargo', rating: '4.0', reviews: '5.5K+', description: 'Start your future now', moreInfo: 'Additional details about Wells Fargo jobs and roles.' },
  { src: datamaticsLogo, name: 'Datamatics', rating: '3.5', reviews: '1.8K+', description: 'Global digital solutions & technology company.', moreInfo: 'Additional details about Datamatics jobs and roles.' },
  { src: amazonLogo, name: 'Amazon', rating: '4.1', reviews: '60K+', description: 'World\'s largest e-commerce company.', moreInfo: 'Additional details about Amazon jobs and roles.' },
  { src: actelent, name: 'Actalent', rating: '3.7', reviews: '80K+', description: 'Global Engineering company.', moreInfo: 'Additional details about Actalent jobs and roles.' },
  { src: airtel, name: 'Airtel', rating: '4.0', reviews: '58K+', description: 'Largest telecom provider.', moreInfo: 'Additional details about Airtel jobs and roles.' },
  { src: capegemini, name: 'CapeGemini', rating: '4.1', reviews: '108K+', description: 'Global leader in consulting and digital transformation.', moreInfo: 'Additional details about CapeGemini jobs and roles.' },
  { src: jio, name: 'jio', rating: '4.2', reviews: '50K+', description: 'Shaping the Future with Groundbreaking Technology and Consulting.', moreInfo: 'Additional details about Jio jobs and roles.' },
  { src: relainceretail, name: 'Relaince retail', rating: '3.9', reviews: '18K+', description: 'The Forefront of Technology and Digital Advancement.', moreInfo: 'Additional details about Reliance Retail jobs and roles.' },
  { src: chart, name: 'Standard chartered', rating: '3.8', reviews: '111K+', description: 'Delivering Next-Generation IT Services and Solutions Worldwide.', moreInfo: 'Additional details about Standard Chartered jobs and roles.' },
  { src: xoriant, name: 'Xoriant', rating: '3.9', reviews: '35K+', description: 'Global leader in digital transformation.', moreInfo: 'Additional details about Xoriant jobs and roles.' },
  { src: fis, name: 'FIS', rating: '3.7', reviews: '78K+', description: 'Empowering Businesses through Innovative Technology and Expertise.', moreInfo: 'Additional details about FIS jobs and roles.' },
  { src: genpact, name: 'Genpact', rating: '4.0', reviews: '90K+', description: 'Redefining the Digital Landscape with Cutting-Edge Solutions.', moreInfo: 'Additional details about Genpact jobs and roles.' },
  { src: jp, name: 'JpMorgan', rating: '4.3', reviews: '78K+', description: 'Leading the Charge in Digital Transformation and Solutions.', moreInfo: 'Additional details about JP Morgan jobs and roles.' },
  { src: acc, name: 'accenture', rating: '4.1', reviews: '199K+', description: 'Innovating Tomorrow"s Technology Today.', moreInfo: 'Additional details about Accenture jobs and roles.' },
  { src: persistant, name: 'persitant', rating: '4.2', reviews: '109K+', description: 'Driving Excellence in Global IT and Consulting Services.', moreInfo: 'Additional details about Persistent jobs and roles.' },
];

const Companies = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCompanyIndex, setExpandedCompanyIndex] = useState(null);

  const handleViewAllToggle = () => {
    setShowAll(!showAll);
  };

  const handleViewJobsClick = (index) => {
    setExpandedCompanyIndex(expandedCompanyIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="featured-companies">
        <h3>Featured companies actively hiring</h3>
        <div className="filters">
          {/* <button className="filter-button active">All</button> */}
          {/* Add more filter buttons if needed */}
        </div>
        <div className="company-cards">
          {companies.slice(0, showAll ? companies.length : 4).map((company, index) => (
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
        <button className="view-all-companies" onClick={handleViewAllToggle}>
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Companies;
