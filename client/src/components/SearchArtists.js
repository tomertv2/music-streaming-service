import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import network from '../services/network';
import { ResultImage, ResultDiv, ResultText } from '../styles/Result';

function SearchArtists({ input }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { data: results } = await network.get(
        `/api/search/artists-results?q=${input}`
      );
      console.log('artists page: ', results);
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
          Artists:
          {results.map((artist) => (
            <div key={artist.id} className='one-result-div'>
              <ResultImage
                src={artist.coverImg}
                alt={artist.artistName}
                width='50'
                height='50'
              ></ResultImage>
              <Link to={`/artist/${artist.id}`}>
                <ResultText>{artist.artistName}</ResultText>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4>No artists found for the keyword '{input}'</h4>
          <h4>Try something else</h4>
        </div>
      )}
    </div>
  );
}

export default SearchArtists;
