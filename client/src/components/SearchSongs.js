import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';

function SearchSongs({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/songs-results?q=${input}`
      );
      console.log('song page: ', results);
      setResults(results);
    };
    fetchData();
  }, [input]);

  return (
    <div>
      {results.length > 0 ? (
        <div>
          Songs:
          {results.map((song) => (
            <div key={song.id}>
              <Link to={`/song/${song.id}?album=${song.albumId}`}>
                {song.title}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h4>No songs to show</h4>
      )}
    </div>
  );
}

export default SearchSongs;
