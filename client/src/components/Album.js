import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Album.css';

function Album() {
  const [album, setAlbum] = useState({});
  const [songsInAlbum, setSongsInAlbum] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(`/album/${params.id}`);
      setAlbum(data[0]);
      const songs = await (await axios.get(`/songsFromAlbum/${params.id}`)).data;
      setSongsInAlbum(songs);
    }
    fetchedData();
  }, [params]);

  return (
    <div>
        {album && songsInAlbum ? 
        <div className="album-container">
            <h3 className="album-header">{album.album_name}</h3>
            <h4 className="art-header">By {album.artist_name}</h4>
            <div className="album-data-container">
              <img src={album.cover_img} alt={album.album_name} width='300' height='300' />
              <div className="song-list">
                {songsInAlbum.map(song => 
                  <div key={song.song_id}>
                    <Link to={`/song/${song.song_id}?album=${params.id}`}>{song.title}</Link> | {song.length}
                  </div>  
                )}
              </div>
            </div>
        </div> :
        <div>no album found</div>}
    </div>
  );
}

export default Album;
