import React from 'react';
import { Link } from 'react-router-dom';
import { ResultImage, ResultText } from '../styles/Result';

function SearchAll({ songs, albums, playlists, artists }) {
  return (
    <div>
      {songs.length > 0 ? (
        <div>
          Songs:
          {songs.map((song) => (
            <div key={song.id}>
              <Link to={`/song/${song.id}?album=${song.albumId}`}>
                {song.title}
              </Link>
            </div>
          ))}
          <div>
            <Link to={'/search/songs'}>Show more...</Link>
          </div>
        </div>
      ) : null}
      <br />
      {albums.length > 0 ? (
        <div>
          Albums:
          {albums.map((album) => (
            <div key={album.id}>
              <ResultImage
                src={album.coverImg}
                alt={album.albumName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/album/${album.id}`}>
                <ResultText>{album.albumName}</ResultText>
              </Link>
            </div>
          ))}
          <div>
            <Link to={'/search/albums'}>Show more...</Link>
          </div>
        </div>
      ) : null}
      <br />
      {playlists.length > 0 ? (
        <div>
          Playlists:
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <ResultImage
                src={playlist.coverImg}
                alt={playlist.playlistName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/playlist/${playlist.id}`}>
                <ResultText>{playlist.playlistName}</ResultText>
              </Link>
            </div>
          ))}
          <div>
            <Link to={'/search/playlists'}>Show more...</Link>
          </div>
        </div>
      ) : null}
      <br />
      {artists.length > 0 ? (
        <div>
          Artists:
          {artists.map((artist) => (
            <div key={artist.id}>
              <ResultImage
                src={artist.coverImg}
                alt={artist.artistName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/artist/${artist.id}`}>
                <ResultText>{artist.artistName}</ResultText>
              </Link>
            </div>
          ))}
          <div>
            <Link to={'/search/artists'}>Show more...</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SearchAll;
