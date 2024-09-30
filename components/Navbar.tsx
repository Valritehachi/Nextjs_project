"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar className="flex justify-between">
        {/* Left Section: Logo and Navigation Links */}
        <Box className="flex items-center space-x-4">
          {/* Logo */}
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ color: 'black', fontWeight: 'bold' }}
          >
            PlatePlan
          </Typography>

          {/* Navigation Links */}
          <Box className="flex space-x-6">
            <Link href="/" passHref>
              <Button sx={{ color: 'blue', fontWeight: 'bold' }}>Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button sx={{ color: 'black' }}>About us</Button>
            </Link>
          </Box>
        </Box>

        {/* Right Section: Log In and Sign Up Buttons */}
        <Box className="flex items-center space-x-4">
          <Link href="/login" passHref>
            <Button
            sx={{
              color: 'black' 
            }}
            >
              Log in
            </Button>
          </Link>

          <Link href="/signup" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '8px',
                '&:hover': { backgroundColor: 'darkblue' },
              }}
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;