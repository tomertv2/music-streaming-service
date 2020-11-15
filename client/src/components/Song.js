import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import network from '../services/network';
import './Song.css';

function Song() {
  const [songData, setSongData] = useState();
  const [listOfSongs, setListOfSongs] = useState([]);
  const location = useLocation();
  const params = useParams();
  const qParams = new URLSearchParams(location.search);
  const playlist = qParams.get('playlist');
  const artist = qParams.get('artist');
  const album = qParams.get('album');

  useEffect(() => {
    const fetchedData = async () => {
      if (playlist) {
        const { data } = await network.get(`/api/playlist/${playlist}`);
        setListOfSongs(data.Songs);
      } else if (album) {
        const { data } = await network.get(`/api/album/${album}`);
        setListOfSongs(data.Songs);
      } else if (artist) {
        const { data } = await network.get(`/api/artist/${artist}`);
        setListOfSongs(data.songsByArtist.Songs);
      }
    };
    fetchedData();
  }, [playlist, album, artist]);

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await network.get(`/api/song/${params.id}`);
      setSongData(data);
    };
    fetchedData();
  }, [params]);

  return (
    <div>
      {songData && listOfSongs ? (
        <div>
          <h3 className='song-header'>{songData.title}</h3>
          <h4 className='mini-header'>
            {songData.Artist.artistName} | {songData.Album.albumName}
          </h4>
          <div className='song-data-container'>
            <div className='not-lyrics'>
              <iframe
                title='song-video'
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${songData.youtubeLink}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <div className='song-list-container'>
                {listOfSongs.map((song) => (
                  <div key={song.id}>
                    <Link to={`/song/${song.id}${location.search}`}>
                      {song.title}
                    </Link>{' '}
                    | {song.length}
                  </div>
                ))}
              </div>
            </div>
            <div className='lyrics'>{songData.lyrics}</div>
          </div>
        </div>
      ) : (
        <div>no song found</div>
      )}
    </div>
  );
}

export default Song;
