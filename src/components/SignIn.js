// src/components/SignIn.js
import React, { useEffect } from 'react';
import { ui } from '../firebase';

const SignIn = () => {
  useEffect(() => {
    const uiConfig = {
      signInOptions: [
        'password', // Ensure this matches the provider you use, e.g., 'password' for Email/Password
        'google.com' // Ensure this matches the provider you use, e.g., 'google.com' for Google Sign-In
      ],
      signInSuccessUrl: '/',
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div>
      <h2>Sign In</h2>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default SignIn;
