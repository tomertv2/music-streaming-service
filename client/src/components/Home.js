import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [topSongs, setTopSongs] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [topPlaylists, setTopPlaylists] = useState([]);

    useEffect(() => {
        const fetchedData = async () => {
          const { data } = await axios.get('/top_songs');
          setTopSongs(data);
        };
        fetchedData();
    }, []);

    useEffect(() => {
        const fetchedData = async () => {
          const { data } = await axios.get('/top_artists');
          setTopArtists(data);
        };
        fetchedData();
    }, []);

    useEffect(() => {
        const fetchedData = async () => {
          const { data } = await axios.get('/top_albums');
          setTopAlbums(data);
        };
        fetchedData();
    }, []);

    useEffect(() => {
        const fetchedData = async () => {
          const { data } = await axios.get('/top_playlists');
          setTopPlaylists(data);
        };
        fetchedData();
    }, []);

    return (
    <div>
        <h2>Top 20 Songs:</h2>
        <Carousel itemsToShow={4}>
            {topSongs.map(song => 
              <div>{song.title}</div>
            )}
        </Carousel>
        <h2>Top 20 Artists:</h2>
        <Carousel itemsToShow={4}>
            {topArtists.map(artist => 
              <div><Link to={`/Artist/${artist.artist_id}`}>{artist.artist_name}</Link></div>
            )}
        </Carousel>
        <h2>Top 20 Albums:</h2>
        <Carousel itemsToShow={4}>
            {topAlbums.map(album => <div>{album.album_name}</div>)}
        </Carousel>
        <h2>Top 20 Playlists:</h2>
        <Carousel itemsToShow={4}>
            {topPlaylists.map(playlist => <div>{playlist.playlist_name}</div>)}
        </Carousel>
    </div>
  );
}

export default Home;
