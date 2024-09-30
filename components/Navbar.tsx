"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar className="flex justify-between">
        {/* Logo */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold', paddingLeft: '16px' }}
        >
          PlatePlan
        </Typography>

        {/* Navigation Links */}
        <Box className="hidden md:flex space-x-4">
          <Link href="/" passHref>
            <Button sx={{ color: '#000', fontWeight: '500' }}>Home</Button>
          </Link>
          <Link href="/about" passHref>
            <Button sx={{ color: '#000', fontWeight: '500' }}>About us</Button>
          </Link>
        </Box>

        {/* Log In and Sign Up Buttons */}
        <Box className="flex items-center space-x-3" sx={{ paddingRight: '16px' }}>
          <Button sx={{ color: '#000' }}>Log in</Button>
          {/* Sign up Button with Link */}
          <Link href="/signup" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1a73e8', // Adjusted color to blue
                color: 'white',
                borderRadius: '20px', // Rounded button
                paddingLeft: '16px',
                paddingRight: '16px',
                '&:hover': { backgroundColor: '#1565c0' },
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