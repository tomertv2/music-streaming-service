import React from 'react';
import { Link } from 'react-router-dom';
import { ResultImage, ResultText, ResultDiv } from '../styles/Result';

function SearchAll({ songs, albums, playlists, artists }) {
  return (
    <div>
      {songs.length > 0 ? (
        <div>
          Songs:
          {songs.map((song) => (
            <ResultDiv key={song.id}>
              <ResultImage
                src={song.Album.coverImg}
                alt={song.title}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/song/${song.id}?album=${song.albumId}`}>
                <ResultText>{song.title}</ResultText>
              </Link>
            </ResultDiv>
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
            <ResultDiv key={album.id}>
              <ResultImage
                src={album.coverImg}
                alt={album.albumName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/album/${album.id}`}>
                <ResultText>{album.albumName}</ResultText>
              </Link>
            </ResultDiv>
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
            <ResultDiv key={playlist.id}>
              <ResultImage
                src={playlist.coverImg}
                alt={playlist.playlistName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/playlist/${playlist.id}`}>
                <ResultText>{playlist.playlistName}</ResultText>
              </Link>
            </ResultDiv>
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
            <ResultDiv key={artist.id}>
              <ResultImage
                src={artist.coverImg}
                alt={artist.artistName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/artist/${artist.id}`}>
                <ResultText>{artist.artistName}</ResultText>
              </Link>
            </ResultDiv>
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
