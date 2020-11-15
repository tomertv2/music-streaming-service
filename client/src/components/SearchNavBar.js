import React from 'react';
import { Link } from 'react-router-dom';

function SearchNavBar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to={'/search'} className='nav-link'>
          All
        </Link>
        <Link to={'/search/songs'} className='nav-link'>
          Songs
        </Link>
        <Link to={'/search/albums'} className='nav-link'>
          Albums
        </Link>
        <Link to={'/search/playlists'} className='nav-link'>
          Playlists
        </Link>
        <Link to={'/search/artists'} className='nav-link'>
          Artists
        </Link>
      </div>
    </div>
  );
}

export default SearchNavBar;
