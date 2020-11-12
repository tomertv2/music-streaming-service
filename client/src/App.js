import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Song from './components/Song';
import Album from './components/Album';
import Playlist from './components/Playlist';
import Artist from './components/Artist';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import Login from './components/Login';
import Search from './components/Search';
import track from './services/AnalyticsManager';
import './App.css';

function App() {
  useEffect(()=>{
    track("app launched");
  },[]);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/song/:id' component={Song} />
          <Route path='/album/:id' component={Album} />
          <Route path='/Playlist/:id' component={Playlist} />
          <Route path='/artist/:id' component={Artist} />
          <Route path='/login' component={Login} />
          <Route path='/search' component={Search} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
