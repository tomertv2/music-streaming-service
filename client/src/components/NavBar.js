import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import track from '../services/AnalyticsManager';
import './NavBar.css';

export default function NavBar() {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Location changed');
    track('Page changed', { location: location });
  }, [location]);

  return (
    <div className='navbar'>
      <h2 className='navbar-header'>Music Streaming Service</h2>
      <div className='navbar-container'>
        <div className='nav-link'>
        <Link to={'/'}>
          Home
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/song'}>
          Song
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/album'}>
          Album
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/playlist'}>
          Playlist
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/artist'}>
          Artist
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/login'}>
          Login
        </Link>
        </div>
        <div className='nav-link'>
        <Link to={'/search'}>
          Search
        </Link>
        </div>
      </div>
    </div>
  );
}
