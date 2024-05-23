import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>PlatePlanner</h1>
      <div className="nav-links">
        {location.pathname === '/' && (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        {location.pathname !== '/' && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/my-recipes">My Recipes</Link>
            <Link to="/preferences">My Preferences</Link>
          </>
        )}
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
