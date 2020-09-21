import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

function Artist() {
  const [artist, setArtist] = useState();  
  const [albumsByArtist, setAlbumsByArtist] = useState([]);
  const [songsByArtist, setSongsByArtist] = useState();
  const params = useParams();
  
  useEffect(() => {
    const fetchedData = async () => {
        const { data } = await axios.get(`/artist/${params.id}`);
        setArtist(data[0]);
        const albums = await (await axios.get(`/albumsByArtist/${params.id}`)).data;
        setAlbumsByArtist(albums);
        const songs = await (await axios.get(`/songsByArtist/${params.id}`)).data;
        setSongsByArtist(songs);
    }
    fetchedData();
  }, [params]);

  console.log(songsByArtist);
  
  return (
    <div>
        {artist && albumsByArtist && songsByArtist ? 
        <div className="artist-container">
            <div>{artist.artist_name}</div>
            <img src={artist.cover_img} alt={artist.artist_name} width='300' height='300' />
            <Carousel>
                {albumsByArtist.map(album => 
                    <div key={album.album_id}>
                        <img src={album.cover_img} alt={album.album_name} width='150' height='150' />
                        <br />
                        <Link to={`/album/${album.album_id}`}>{album.album_name}</Link>
                    </div>
                )}
            </Carousel>
            <Carousel>
                {songsByArtist.map(song =>
                    <div key={song.song_id}>
                        <Link to={`/song/${song.song_id}/?artist=${artist.artist_id}`}>{song.title}</Link>
                    </div>
                )}
            </Carousel>
        </div> :
        <div>no artist found</div>}
    </div>
  );
}

export default Artist;
