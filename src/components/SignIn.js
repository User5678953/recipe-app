// src/components/SignIn.js
import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import { ui } from '../firebase';

const SignIn = () => {
  useEffect(() => {
    const uiConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
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
