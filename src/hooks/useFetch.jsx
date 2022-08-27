import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, id) => {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${url}${id}`);
      setVideos(res.data);
    };

    fetchData();
  }, [id]);

  return videos;
};

export default useFetch;
