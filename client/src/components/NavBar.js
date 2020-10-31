import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import track from '../services/AnalyticsManager';
import './NavBar.css';

export default function NavBar() {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Location changed');
    track('Page changed', {'location': location});
  }, [location]);

  return (
    <div className='navbar'>
      <h2 className='navbar-header'>Music Streaming Service</h2>
      <div className='navbar-container'>
        <Link to={'/'} className='nav-link'>
          Home
        </Link>
        <Link to={'/song'} className='nav-link'>
          Song
        </Link>
        <Link to={'/album'} className='nav-link'>
          Album
        </Link>
        <Link to={'/playlist'} className='nav-link'>
          Playlist
        </Link>
        <Link to={'/artist'} className='nav-link'>
          Artist
        </Link>
      </div>
    </div>
  );
}
