import React from 'react';
import { Link } from 'react-router-dom';

function SearchNavBar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='nav-link'>
        <Link to={'/search'}>
          All
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/search/songs'}>
          Songs
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/search/albums'}>
          Albums
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/search/playlists'}>
          Playlists
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/search/artists'}>
          Artists
        </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchNavBar;
