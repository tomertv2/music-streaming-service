import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import network from '../services/network';
import SearchNavBar from './SearchNavBar';
import SearchAll from './SearchAll';
import SearchSongs from './SearchSongs';
import SearchAlbums from './SearchAlbums';
import SearchPlaylists from './SearchPlaylists';
import SearchArtists from './SearchArtists';
import Error404 from './Error404';

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
      <Router>
        <input
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder='type to search...'
        />
        <SearchNavBar />
        <Switch>
          <Route exact path='/search' component={SearchAll} />
          <Route path='/search/songs' component={SearchSongs} />
          <Route path='/search/albums' component={SearchAlbums} />
          <Route path='/search/playlists' component={SearchPlaylists} />
          <Route path='/search/artists' component={SearchArtists} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default Search;
