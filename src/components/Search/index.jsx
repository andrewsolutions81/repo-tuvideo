/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';
import SearchItem from '../SearchItem';

function Search() {
  const [allVideos, setAllVideos] = useState([]);
  const [query, setQuery] = useState('');
  const [close, setClose] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    setClose(false);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:3001/api/search/?q=${query}`);
      setAllVideos(res.data);
    };
    fetchVideos();
  }, [query]);
  return (
    <div>
      <form action="" className="search-form">
        <input type="search" placeholder="Search..." onChange={handleChange} value={query} />
        <div className="header__search-bar__icon">
          <img src="/media/icons/Search.png" alt="Busca" />
        </div>
      </form>
      {
        query.length > 0
          ? (
            <div className={close ? 'search-container active' : 'search-container'}>
              <SearchItem allVideos={allVideos} query={query} setClose={setClose} close={close} />
            </div>
          ) : null
      }

    </div>
  );
}

export default Search;
