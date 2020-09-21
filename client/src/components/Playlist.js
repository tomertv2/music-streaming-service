import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

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
            <div>{playlist[0].playlist_name}</div>
            <div>{playlist[0].created_at.replace(/T/g, ' ').replace(/Z/g, '')}</div>
            <img src={playlist[0].cover_img} alt={playlist[0].playlist_name} width='300' height='300' />
            {playlist.map(song => 
              <div key={song.songs_in_playlists_id}>
                {song.title} | {song.artist_name} | {song.length}
              </div>  
            )}
        </div> :
        <div>no playlist found</div>}
    </div>
  );
}

export default Playlist;
