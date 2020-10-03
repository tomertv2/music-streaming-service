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
      const { data } = await axios.get(`/api/album/${params.id}`);
      setAlbum(data);
      console.log(data);
      setSongsInAlbum(data.Songs);
    };
    fetchedData();
  }, [params]);

  return (
    <div>
      {album && songsInAlbum ? (
        <div className='album-container'>
          <h3 className='album-header'>{album.albumName}</h3>
          <h4 className='art-header'>By {album.artistName}</h4>
          <div className='album-data-container'>
            <img
              src={album.coverImg}
              alt={album.albumName}
              width='300'
              height='300'
            />
            <div className='song-list'>
              {songsInAlbum.map((song) => (
                <div key={song.id}>
                  <Link to={`/song/${song.songId}?album=${params.id}`}>
                    {song.title}
                  </Link>{' '}
                  | {song.length}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>no album found</div>
      )}
    </div>
  );
}

export default Album;
