// Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from './logo67.png';
import profilePhoto from './profile-photo.png';

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear the session token
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    
    // Redirect to login page
    handleNavigation('/login');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2B2118' }}> 
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="logo" style={{ width: 200, height: 65 }} />
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={() => handleNavigation('/dashboard')}>Home</Button>
          <Button color="inherit" onClick={() => handleNavigation('/companies')}>Company</Button>
          <Button color="inherit" onClick={() => handleNavigation('/jobsearch')}>Jobs</Button>
          <Button color="inherit" onClick={() => handleNavigation('/services')}>Services</Button>
        </Box>
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <Avatar alt="Profile Photo" src={profilePhoto} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { handleNavigation('/adminlogin'); handleMenuClose(); }}>Admin Login</MenuItem>
          <MenuItem onClick={() => { handleLogout(); handleMenuClose(); }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
