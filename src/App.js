import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserPreferences from './components/UserPreferences';
import AuthProvider from './components/AuthProvider';
import HomePage from './components/HomePage';
import GettingStarted from './components/GettingStarted';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar';
import RecipeDetail from './components/RecipeDetail';
import MyRecipes from './components/MyRecipes';
import { DarkModeProvider } from './contexts/DarkModeContext';
import './App.css'; 

function App() {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/preferences" element={<UserPreferences />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
