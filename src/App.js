// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
