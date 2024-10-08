"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#f7f7f7', // Subtle background color
        borderBottom: '1px solid #e0e0e0',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      }}
    >
      <Toolbar className="flex justify-between">
        {/* Left Section: Logo and Navigation Links */}
        <Box className="flex items-center space-x-4">
          {/* Logo */}
          <Typography variant="h5" component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
            PlatePlan
          </Typography>

          {/* Navigation Links */}
          <Box className="flex space-x-6">
            <Link href="/s" passHref>
              <Button
                sx={{
                  color: 'blue',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease', // Smooth hover transition
                  '&:hover': { color: 'darkblue' }, // Hover effect
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="" passHref>
              <Button
                sx={{
                  color: 'black',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: 'gray' }, // Hover effect
                }}
              >
                About us
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Right Section: Log In and Sign Up Buttons */}
        <Box className="flex items-center space-x-4">
          <Link href="/login" passHref>
            <Button
              sx={{
                color: 'black',
                transition: 'color 0.3s ease',
                '&:hover': { color: 'gray' }, // Hover effect for Log In button
              }}
            >
              Log in
            </Button>
          </Link>

          <Link href="/signup" passHref>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, rgba(0,119,255,1) 0%, rgba(0,85,255,1) 100%)', // Modern gradient
                color: 'white',
                borderRadius: '12px', // Rounded edges
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for button depth
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Smooth hover transitions
                '&:hover': {
                  backgroundColor: 'darkblue', // Change on hover
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
                },
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