import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import network from '../services/network';
import './Album.css';

function Album() {
  const [album, setAlbum] = useState({});
  const [songsInAlbum, setSongsInAlbum] = useState([]);
  const [artistName, setArtistName] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await network.get(`/api/album/${params.id}`);
      setAlbum(data);
      setSongsInAlbum(data.Songs);
      setArtistName(data.Artist.artistName);
    };
    fetchedData();
  }, [params]);

  console.log(album)

  return (
    <div>
      {album && songsInAlbum ? (
        <div className='album-container'>
          <h3 className='album-header'>{album.albumName}</h3>
          <h4 className='art-header'>By {artistName}</h4>
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
                  <Link to={`/song/${song.id}?album=${params.id}`}>
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
