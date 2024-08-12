import React from 'react';
import './aboutus.css';
import Navbar from './navbar';
import Footer from './footer';

function AboutUs() {
  return (
    <div className="about-us-container">
      <Navbar />

      <header className="header-background">
        <div className="header-content">
          <h1 className='ab1'>Why Us ?</h1>
          <p>
            Discover how HireHorizon connects top talent with leading companies
            and find out what sets us apart.
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At HireHorizon, we are committed to bridging the gap between job seekers and employers. Our mission is to provide a platform that ensures the best match for both parties, fostering growth and success.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We value honesty and transparency in all our interactions.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We strive to continuously improve and innovate to stay ahead.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We believe in working together to achieve common goals.</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2 className='title57'>Meet Our Team</h2>
          <br></br>
          <div className="team-members">
            <div className="team-member">
              <img src="https://odihpn.org/wp-content/uploads/2022/02/john-smith.jpeg" alt="Team Member 1" />
              <h3>John goody</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY=" alt="Team Member 2" />
              <h3>Caleb Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="Team Member 3" />
              <h3>Tony Rodgers</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg" alt="Team Member 3" />
              <h3>Liv Smith</h3>
              <p>CTO</p>
            </div>
            
          </div>
        </section>

      
      </main>

      <Footer/>
    </div>
  );
}

export default AboutUs;
