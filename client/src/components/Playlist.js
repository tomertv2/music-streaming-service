import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import network from '../services/network';
import './Playlist.css';

function Playlist() {
  const [playlist, setPlaylist] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await network.get(`/api/playlist/${params.id}`);
      setPlaylist(data);
    };
    fetchedData();
  }, []);

  return (
    <div>
      {playlist ? (
        <div className='playlist-container'>
          <div className='playlist-header'>{playlist.playlistName}</div>
          <div className='playlist-data-container'>
            <div className='playlist-photo-time'>
              <img
                src={playlist.coverImg}
                alt={playlist.playlistName}
                width='300'
                height='300'
              />
              <br />
              <div>
                Created At:{' '}
                {playlist.createdAt.replace(/T/g, ' ').replace(/Z/g, '')}
              </div>
            </div>
            <div className='song-list'>
              {playlist.Songs.map((song) => (
                <div key={song.id}>
                  <Link to={`/song/${song.id}?playlist=${params.id}`}>
                    {song.title}
                  </Link>{' '}
                  | {song.Artist.artistName} | {song.length}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>no playlist found</div>
      )}
    </div>
  );
}

export default Playlist;
