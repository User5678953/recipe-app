import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import { ui } from '../firebase';

const SignIn = () => {
  useEffect(() => {
    const auth = getAuth();
    const uiConfig = {
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/',
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(() => {
        alert('Signed in successfully with Google');
      }).catch((error) => {
        console.error('Google sign-in error:', error);
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div id="firebaseui-auth-container"></div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;

