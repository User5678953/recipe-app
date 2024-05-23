// src/components/HomePage.js
import React, { useState } from 'react';
import RecipeList from './RecipeList';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [exclusions, setExclusions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const exclusionsArray = searchQuery.split(',').map(item => item.trim());
    setExclusions(exclusionsArray);
  };

  return (
    <div className="homepage-container">
      <main>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <RecipeList exclusions={exclusions} />
      </main>
    </div>
  );
};

export default HomePage;
