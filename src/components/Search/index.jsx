/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';
import SearchItem from '../SearchItem';
import useDebounce from '../../hooks/useDebounce';

function Search() {
  const [allVideos, setAllVideos] = useState([]);
  const [query, setQuery] = useState('');
  const [close, setClose] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    setClose(false);
  };

  const debounceSearch = useDebounce(query, 500);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`https://tuvideo-backend.herokuapp.com/api/search/?q=${debounceSearch}`);
      setAllVideos(res.data);
    };
    if (debounceSearch) fetchVideos();
  }, [debounceSearch]);
  return (
    <div>
      <form action="" className="search-form">
        <input type="search" placeholder="Type something..." onChange={handleChange} value={query} />
      </form>
      {
        debounceSearch
          ? (
            <div className={close ? 'search-container active' : 'search-container'}>
              <SearchItem allVideos={allVideos} debounceSearch={debounceSearch} setClose={setClose} close={close} />
            </div>
          ) : null
      }

    </div>
  );
}

export default Search;
