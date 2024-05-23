// src/components/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignInWithEmail = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Signed in successfully');
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in result:', result);
      toast.success('Signed in successfully with Google');
      navigate('/dashboard');
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignInWithEmail}>
        <h2>Sign In</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="button-container">
          <button type="submit">Sign In</button>
          <button type="button" onClick={handleGoogleSignIn}>Use Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
