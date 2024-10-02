"use client";

import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; 


const Signup = () => {
    const router = useRouter(); // Initialize the router
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Form submitted');
  
      // Navigate to the body composition page after form submission
      router.push('/bodycomposition');
    };

  return (
    <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
            backgroundColor: 'white',
            padding: 6,
            borderRadius: 14, 
            boxShadow: 3,
            width: '400px',
            border: '1px solid #e0e0e0',
        }}
        >
        {/* Form Title */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Register Now
        </Typography>

        {/* Form Fields */}
        <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
            label="First Name"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            label="Last Name"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </Box>
        <TextField
            label="Email Address"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
        />
        <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
        />

        {/* Submit Button */}
        <Button
            type="submit"
            variant="contained"
            sx={{
            mt: 2,
            width: '100%',
            padding: '12px',
            backgroundColor: '#add8e6',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#007bff',
            },
            }}
        >
            Sign up
        </Button>
    </Box>
    
  );
};

export default Signup;

