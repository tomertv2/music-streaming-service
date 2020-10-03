import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import './Artist.css';

function Artist() {
  const [artist, setArtist] = useState();
  const [albumsByArtist, setAlbumsByArtist] = useState([]);
  const [songsByArtist, setSongsByArtist] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(`/api/artist/${params.id}`);
      setArtist(data.artist);
      setAlbumsByArtist(data.artist.Albums);
      setSongsByArtist(data.songsByArtist.Songs);
    };
    fetchedData();
  }, [params]);

  console.log(albumsByArtist);
  console.log(artist);
  console.log(songsByArtist);

  return (
    <div>
      {artist && albumsByArtist && songsByArtist ? (
        <div>
          <div className='artist-header'>{artist.artistName}</div>
          <div className='artist-data-container'>
            <img
              src={artist.coverImg}
              alt={artist.artistName}
              width='300'
              height='300'
            />
            <div className='artist-carousels'>
              <div className='artist-carousels-header'>
                Albums By {artist.artistName}:
              </div>
              <Carousel itemsToShow={1}>
                {albumsByArtist.map((album) => (
                  <div key={album.albumId} className='cube-in-carousel'>
                    <img
                      src={album.coverImg}
                      alt={album.albumName}
                      width='150'
                      height='150'
                    />
                    <br />
                    <Link to={`/album/${album.albumId}`}>
                      {album.albumName}
                    </Link>
                  </div>
                ))}
              </Carousel>
              <br />
              <div className='artist-carousels-header'>
                Songs By {artist.artistName}:
              </div>
              <Carousel itemsToShow={3}>
                {songsByArtist.map((song) => (
                  <div key={song.songId} className='cube-in-carousel'>
                    <img
                      src={artist.coverImg}
                      alt={song.title}
                      width='150'
                      height='150'
                    />
                    <br />
                    <Link to={`/song/${song.songId}/?artist=${artist.artistId}`}>{song.title}</Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      ) : (
        <div>no artist found</div>
      )}
    </div>
  );
}

export default Artist;
