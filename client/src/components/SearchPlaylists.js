import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';

function SearchPlaylists({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/playlists-results?q=${input}`
      );
      console.log('playlist page: ', results);
      setResults(results);
    };
    fetchData();
  }, [input]);
  return (
    <div>
      {results.length > 0 ? (
        <div>
          Playlists:
          {results.map((playlist) => (
            <div key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>
                {playlist.playlistName}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h4>No playlists to show</h4>
      )}
    </div>
  );
}

export default SearchPlaylists;
