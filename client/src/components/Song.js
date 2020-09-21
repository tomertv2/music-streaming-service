import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import './Song.css';

function Song() {
  const [songData, setSongData] = useState()
  const [listOfSongs, setListOfSongs] = useState()
  const location = useLocation();
  const params = useParams();
  const qParams = new URLSearchParams(location.search);
  const playlist = qParams.get('playlist');
  const artist = qParams.get('artist');
  const album = qParams.get('album');

  console.log(location)

  useEffect(() => {
    const fetchedData = async () => {
      if (playlist) {
        const { data } = await axios.get(`/playlist/${playlist}`);
        setListOfSongs(data);
      } else if (album) {
        const { data } = await axios.get(`/songsFromAlbum/${album}`);
        setListOfSongs(data);
      } else if (artist) {
        const { data } = await axios.get(`/songsByArtist/${artist}`);
        setListOfSongs(data);
      }
    }
    fetchedData();
  }, [location]);

  console.log(listOfSongs);

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(`/song/${params.id}`);
      setSongData(data[0]);
    }
    fetchedData();
  }, [params]);

  console.log(songData);
  
  return (
    <div>
      {songData && listOfSongs ?
      <div>
        <h3 className="song-header">{songData.title}</h3>
        <h4 className="mini-header">{songData.artist_name} | {songData.album_name}</h4>
        <div className="song-data-container">
          <div className="not-lyrics">
            <iframe title="song-video" width="560" height="315" 
            src={`https://www.youtube.com/embed/${songData.youtube_link}`} 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="song-list-container">
              {listOfSongs.map(song =>
                <div key={song.song_id}>
                  <Link to={`/song/${song.song_id}${location.search}`}>{song.title}</Link> | {song.length} | {song.artist_name}
                </div>
              )}
            </div>
          </div>
          <div className="lyrics">{songData.lyrics}</div>  
        </div>
      </div> :
      <div>no song found</div>}
    </div>
  );
}

export default Song;
