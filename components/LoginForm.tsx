"use client";

import React from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Box 
      sx={{
        width: '400px',
        backgroundColor: '#f8f5ff',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid #e0e0e0',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Welcome Back Heading */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Welcome Back!
      </Typography>

      {/* Email Input */}
      <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
        Email
      </Typography>
      <TextField
        fullWidth
        placeholder="Enter your email address"
        variant="outlined"
        InputProps={{
          sx: {
            borderRadius: '8px',
            backgroundColor: 'white',
          },
        }}
        sx={{ marginBottom: '20px' }}
      />

      {/* Password Input */}
      <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
        Password
      </Typography>
      <TextField
        fullWidth
        type="password"
        placeholder="Enter your password"
        variant="outlined"
        InputProps={{
          sx: {
            borderRadius: '8px',
            backgroundColor: 'white',
          },
        }}
        sx={{ marginBottom: '20px' }}
      />

      {/* Log In Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#b19cd9',
          color: 'white',
          height: '48px',
          borderRadius: '8px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#007bff',
          },
          marginBottom: '16px',
        }}
      >
        Log in
      </Button>

      {/* Forgot Password Link */}
      <Box textAlign="right">
        <Link href="#" sx={{ color: '#6e6e6e', fontSize: '0.9rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
          Forgot your password?
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;