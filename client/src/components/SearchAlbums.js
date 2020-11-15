import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';
import { ResultImage, ResultText, ResultDiv } from '../styles/Result';

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
        </div>
      ) : (
        <div>
          <h4>No albums found for the keyword '{input}'</h4>
          <h4>Try something else</h4>
        </div>
      )}
    </div>
  );
}

export default SearchAlbums;
