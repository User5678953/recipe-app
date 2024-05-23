// src/components/GettingStarted.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserPreferences from './UserPreferences';

const GettingStarted = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Getting Started</h2>
      <UserPreferences />
      <button onClick={handleGoToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default GettingStarted;
