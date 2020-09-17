import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Artist() {
  const [artist, setArtist] = useState();  
  const params = useParams();
  
  useEffect(() => {
    const fetchedData = async () => {
        const { data } = await axios.get(`/artist/${params.id}`);
        setArtist(data);
    }
    fetchedData();
  }, [params])

  return (
    <div>
        
    </div>
  );
}

export default Artist;
