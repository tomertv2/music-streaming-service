import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';
import { ResultImage, ResultText, ResultDiv } from '../styles/Result';

function SearchPlaylists({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/playlists-results?q=${input}`
      );
      console.log('playlist page: ', results);
      setResults(results);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [input]);
  return (
    <div>
      {results.length > 0 ? (
        <div>
          Playlists:
          {results.map((playlist) => (
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
        </div>
      ) : (
        <div>
          <h4>No playlists found for the keyword '{input}'</h4>
          <h4>Try something else</h4>
        </div>
      )}
    </div>
  );
}

export default SearchPlaylists;
