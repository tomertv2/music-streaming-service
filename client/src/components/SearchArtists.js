import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';

function SearchArtists({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/artists-results?q=${input}`
      );
      console.log('artists page: ', results);
      setResults(results);
    };
    fetchData();
  }, [input]);

  return (
    <div>
      {results.length > 0 ? (
        <div>
          Artists:
          {results.map((artist) => (
            <div key={artist.id}>
              <Link to={`/artist/${artist.id}`}>{artist.artistName}</Link>
            </div>
          ))}
        </div>
      ) : (
        <h4>No artists to show</h4>
      )}
    </div>
  );
}

export default SearchArtists;
