'use client'
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query.trim()); // Trim to remove unnecessary spaces
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        className="input input-bordered w-full max-w-md"
        placeholder="Search by tags..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch} // Trigger search on key up for real-time feedback
      />
      <button className="btn btn-primary ml-2" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
