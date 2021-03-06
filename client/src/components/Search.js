import React, { useCallback, useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import network from '../services/network';
import SearchNavBar from './SearchNavBar';
import SearchSongs from './SearchSongs';
import SearchAlbums from './SearchAlbums';
import SearchPlaylists from './SearchPlaylists';
import SearchArtists from './SearchArtists';
import SearchAll from './SearchAll';
import SearchWrapper from '../styles/MainSearch';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [songsResults, setSongsResults] = useState([]);
  const [albumsResults, setAlbumsResults] = useState([]);
  const [playlistsResults, setPlaylistsResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);

  const history = useHistory();

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
    setSongsResults(results.songs);
    setAlbumsResults(results.albums);
    setPlaylistsResults(results.playlists);
    setArtistsResults(results.artists);
    history.push('/search');
  };

  const handleChangeOfInput = useCallback(debounce(fetchData, 250), []);

  useEffect(() => {
    handleChangeOfInput(searchInput);
  }, [searchInput]);

  return (
    <SearchWrapper>
      <h2 className='search-header'>Search</h2>
      <SearchNavBar />
      <input
        type='text'
        className='search-input'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='type to search...'
      />
      <Route
        exact
        path='/search'
        render={() => (
          <SearchAll
            songs={songsResults}
            albums={albumsResults}
            playlists={playlistsResults}
            artists={artistsResults}
          />
        )}
      />
      <Route
        path='/search/songs'
        render={() => <SearchSongs input={searchInput} />}
      />
      <Route
        path='/search/albums'
        render={() => <SearchAlbums input={searchInput} />}
      />
      <Route
        path='/search/playlists'
        render={() => <SearchPlaylists input={searchInput} />}
      />
      <Route
        path='/search/artists'
        render={() => <SearchArtists input={searchInput} />}
      />
    </SearchWrapper>
  );
}

export default Search;
