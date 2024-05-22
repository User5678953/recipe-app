// src/components/UserPreferences.js
import React, { useState } from 'react';
import { firestore, auth } from '../firebase';

const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    diet: '',
    exclusions: '',
    cuisine: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await firestore.collection('preferences').doc(user.uid).set(preferences);
        alert('Preferences saved successfully');
      } catch (error) {
        console.error('Error saving preferences: ', error);
        alert('Error saving preferences');
      }
    } else {
      alert('No user is logged in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Diet:
          <input
            type="text"
            name="diet"
            value={preferences.diet}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Exclusions:
          <input
            type="text"
            name="exclusions"
            value={preferences.exclusions}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Cuisine:
          <input
            type="text"
            name="cuisine"
            value={preferences.cuisine}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save Preferences</button>
    </form>
  );
};

export default UserPreferences;
