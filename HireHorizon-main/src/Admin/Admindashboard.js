import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2'; 
import 'chart.js/auto';
import './Admindashboard.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { useJobContext } from '../Jobcontext'; 

const AdminDashboard = () => {
  const { jobs } = useJobContext(); 
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/count'); // Adjust endpoint as necessary
        if (response.ok) {
          const data = await response.json();
          setTotalUsers(data); // Data should directly be the count
        } else {
          console.error('Failed to fetch user count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserCount();
    const intervalId = setInterval(fetchUserCount, 60000); // Poll every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const pieData1 = {
    labels: ['Companies', 'Courses', 'Mentorships'],
    datasets: [
      {
        data: [10, 20, 30], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  const pieData2 = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  const barData = {
    labels: [ 'March', 'April', 'May', 'June','July','August'],
    datasets: [
      {
        label: 'Job Postings',
        data: [10, 20, 15, 30, 25, 40], 
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',  
          'rgba(255, 99, 132, 0.2)',   
          'rgba(75, 192, 192, 0.2)',   
          'rgba(153, 102, 255, 0.2)',  
          'rgba(255, 159, 64, 0.2)',   
          'rgba(255, 205, 86, 0.2)'    
        ],
        borderColor: [
          '#36A2EB',  
          '#FF6384',  
          '#4BC0C0',  
          '#9966FF',  
          '#FFCE56',  
          '#FF9F40'   
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <Header />
      <div className="admin-dashboard" style={{ backgroundColor: 'white' }}>
        <Sidebar />
        
        <div className="main-content">
          <h1 className='ti9'>Admin Dashboard</h1>

          <div className="cards-container">
            <div className="card">
              <h3>Total Companies</h3>
              <p>20</p>
            </div>
            <div className="card">
              <h3>Total Jobs</h3>
              <p>{jobs.length}</p> 
            </div>
            <div className="card">
              <h3>Total Users</h3>
              <p>{totalUsers}</p> {/* Display the number of users */}
            </div>
          </div>

          <br/>
          <br/>
          <br/>
         
          <div className="chart-container">
            <div className="overview-section">
              <h2>Overview</h2>
              <div className="charts-wrapper">
                <div className="chart-wrapper1">
                  <Pie data={pieData1} />
                </div>
                <div className="chart-wrapper1">
                  <Pie data={pieData2} />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="job-postings-section">
              <h2>Job Postings Trend</h2>
              <br />
              <div className="chart-wrapper2">
                <Bar data={barData} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
