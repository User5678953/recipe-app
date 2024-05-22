// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserPreferences from './components/UserPreferences';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/preferences" element={<UserPreferences />} />
          <Route path="/" element={<div>Welcome to PlatePlanner!</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

