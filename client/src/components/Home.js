import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import network from '../services/network';
import './Home.css';

function Home() {
    const [topSongs, setTopSongs] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [topPlaylists, setTopPlaylists] = useState([]);

    useEffect(() => {
        const fetchedData = async () => {
          const { data: songs } = await network.get('/api/song');
          setTopSongs(songs);
          const { data: artists } = await network.get('/api/artist');
          setTopArtists(artists);
          const { data: albums } = await network.get('/api/album');
          setTopAlbums(albums);
          const { data: playlists } = await network.get('/api/playlist');
          setTopPlaylists(playlists);
        };
        fetchedData();
    }, []);

    return (
    <div>
        <h2 className="top-header">Top 20 Songs:</h2>
        {topSongs ? 
        <Carousel itemsToShow={4}>
            {topSongs.map(song => 
              <div key={song.id} className="cube-in-carousel">
                <img src={song.Artist.coverImg} alt={song.title} width='150' height='150' />
                <br />
                <Link to={`/song/${song.id}?album=${song.albumId}`}>{song.title}</Link>
              </div>
            )}
        </Carousel>
        :
        <div>No songs found</div>}
        <h2 className="top-header">Top 20 Artists:</h2>
        {topArtists ?
        <Carousel itemsToShow={4}>
            {topArtists.map(artist => 
              <div key={artist.id} className="cube-in-carousel">
                <img src={artist.coverImg} alt={artist.artistName} width='150' height='150' />
                <br />
                <Link to={`/artist/${artist.id}`}>{artist.artistName}</Link>
              </div>
            )}
        </Carousel>
        :
        <div>No artists found</div>}
        <h2 className="top-header">Top 20 Albums:</h2>
        {topAlbums ? 
        <Carousel itemsToShow={4}>
            {topAlbums.map(album => 
              <div key={album.id} className="cube-in-carousel">
                <img src={album.coverImg} alt={album.albumName} width='150' height='150' />
                <br />
                <Link to={`/album/${album.id}`}>{album.albumName}</Link>
              </div>
            )}
        </Carousel>
        :
        <div>No albums found</div>}
        <h2 className="top-header">Top 20 Playlists:</h2>
        {topPlaylists ?
        <Carousel itemsToShow={4}>
            {topPlaylists.map(playlist => 
              <div key={playlist.id} className="cube-in-carousel">
                <img src={playlist.coverImg} alt={playlist.playlistName} width='150' height='150' />
                <br />
                <Link to={`/playlist/${playlist.id}`}>{playlist.playlistName}</Link>
              </div>
            )}
        </Carousel>
        :
        <div>No playlists found</div>}
    </div>
  );
}

export default Home;
