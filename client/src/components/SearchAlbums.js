import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';

function SearchAlbums({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/albums-results?q=${input}`
      );
      console.log('album page: ', results);
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
          Albums:
          {results.map((album) => (
            <div key={album.id}>
              <Link to={`/album/${album.id}`}>{album.albumName}</Link>
            </div>
          ))}
        </div>
      ) : (
        <h4>No albums to show</h4>
      )}
    </div>
  );
}

export default SearchAlbums;
