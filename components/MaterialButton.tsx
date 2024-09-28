"use client"; // Ensure it's a Client Component

import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  text: string;
  onClick: () => void;
  sx?: object;
}

const MaterialButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained" // Material UI prop
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
    >
      {text}
    </Button>
  );
};

export default MaterialButton;
