import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';

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
            <div key={song.id} className='one-result-div'>
              <Link to={`/song/${song.id}?album=${song.albumId}`}>
                {song.title}
              </Link>
            </div>
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
