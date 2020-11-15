import React from 'react';
import { Link } from 'react-router-dom';

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
          <div><Link to={'/search/songs'}>Show more...</Link></div>
        </div>
      ) : (
        <h4>No songs to show</h4>
      )}
      <br />
      {albums.length > 0 ? (
        <div>
          Albums:
          {albums.map((album) => (
            <div key={album.id}>
              <Link to={`/album/${album.id}`}>{album.albumName}</Link>
            </div>
          ))}
          <div><Link to={'/search/albums'}>Show more...</Link></div>
        </div>
      ) : (
        <h4>No albums to show</h4>
      )}
      <br />
      {playlists.length > 0 ? (
        <div>
          Playlists:
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>
                {playlist.playlistName}
              </Link>
            </div>
          ))}
          <div><Link to={'/search/playlists'}>Show more...</Link></div>
        </div>
      ) : (
        <h4>No playlists to show</h4>
      )}
      <br />
      {artists.length > 0 ? (
        <div>
          Artists:
          {artists.map((artist) => (
            <div key={artist.id}>
              <Link to={`/artist/${artist.id}`}>{artist.artistName}</Link>
            </div>
          ))}
          <div><Link to={'/search/artists'}>Show more...</Link></div>
        </div>
      ) : (
        <h4>No artists to show</h4>
      )}
    </div>
  );
}

export default SearchAll;
