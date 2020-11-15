import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';
import { ResultImage, ResultText, ResultDiv } from '../styles/Result';

function SearchSongs({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/songs-results?q=${input}`
      );
      console.log('song page: ', results);
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
          Songs:
          {results.map((song) => (
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
        </div>
      ) : (
        <div>
          <h4>No songs found for the keyword '{input}'</h4>
          <h4>Try something else</h4>
        </div>
      )}
    </div>
  );
}

export default SearchSongs;
