import React, { useCallback, useEffect, useState } from 'react';
import network from '../services/network';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({});

  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const fetchData = async (input) => {
    const { data: results } = await network.get(`/api/search?q=${input}`);
    console.log(results);
    setSearchResults(results);
  };

  const handleChangeOfInput = useCallback(debounce(fetchData, 250), []);

  useEffect(() => {
    handleChangeOfInput(searchInput);
  }, [searchInput]);

  return (
    <div>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='type to search...'
      />
    </div>
  );
}

export default Search;
