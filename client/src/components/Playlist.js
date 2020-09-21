import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Playlist.css';

function Playlist() {
  const [playlist, setPlaylist] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(`/playlist/${params.id}`);
      setPlaylist(data);
    }
    fetchedData();
  }, [params]);
  
  console.log(playlist)

  return (
    <div>
        {playlist[0] ? 
        <div className="playlist-container">
            <div className="playlist-header">{playlist[0].playlist_name}</div>
            <div className="playlist-data-container">
              <div className="playlist-photo-time">
                <img src={playlist[0].cover_img} alt={playlist[0].playlist_name} width='300' height='300' />
                <br />
                <div>Created At: {playlist[0].created_at.replace(/T/g, ' ').replace(/Z/g, '')}</div>
              </div>
              <div className="song-list">
                {playlist.map(song => 
                  <div key={song.songs_in_playlists_id}>
                    <Link to={`/song/${song.song_id}?playlist=${params.id}`}>{song.title}</Link> | {song.artist_name} | {song.length}
                  </div>
                )}
              </div>
            </div>
        </div> :
        <div>no playlist found</div>}
    </div>
  );
}

export default Playlist;
