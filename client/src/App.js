import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Song from './components/Song';
import Album from './components/Album';
import Playlist from './components/Playlist';
import Artist from './components/Artist';

function App() {
  return (
    <Router>
      <div>
        <h2>Music Streaming Service</h2>
        <ul className="navbar">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/song'} className="nav-link">Song</Link></li>
          <li><Link to={'/album'} className="nav-link">Album</Link></li>
          <li><Link to={'/playlist'} className="nav-link">Playlist</Link></li>
          <li><Link to={'/artist'} className="nav-link">Artist</Link></li>
        </ul>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/song/:id' component={Song} />
            <Route path='/album/:id' component={Album} />
            <Route path='/Playlist/:id' component={Playlist} />
            <Route path='/artist/:id' component={Artist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
