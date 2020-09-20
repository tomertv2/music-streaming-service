import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Album() {
  const [album, setAlbum] = useState({});
  const [songsInAlbum, setSongsInAlbum] = useState([]);
  const [artistName, setArtistName] = useState('')
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
  
  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(`/artistByAlbum/${album.artist_id}`);
      setArtistName(data[0]);
    }
    fetchedData();
  }, [album]);

  return (
    <div>
        {album && songsInAlbum && artistName ? 
        <div className="album-container">
            <h3>{album.album_name}</h3>
            <h4>{artistName.artist_name}</h4>
            <img src={album.cover_img} alt={album.album_name} width='300' height='300' />
            <div>
            {songsInAlbum.map(song => 
              <div key={song.song_id} className="song-in-list">
                <Link to={`/song/${song.song_id}`}>{song.title}</Link> | {song.length}
              </div>  
            )}
            </div>
        </div> :
        <div>no artist found</div>}
    </div>
  );
}

export default Album;
