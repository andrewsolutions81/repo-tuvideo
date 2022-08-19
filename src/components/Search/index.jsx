/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './styles.scss';
// import SearchItem from '../SearchItem';

function Search() {
  // const [allVideos, setAllVideos] = useState({});
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  /*   useEffect(() => {
    fetch('https://tuvideo-backend.herokuapp.com/api/videos/')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setAllVideos(res);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [handleChange]); */
  return (
    <div>
      <form action="" className="search-form">
        <input type="search" placeholder="Search..." onChange={handleChange} value={query} />
        <div className="header__search-bar__icon">
          <img src="/media/icons/Search.png" alt="Busca" />
        </div>
      </form>
      <div className="search-container">
        {/*         <SearchItem allVideos={allVideos} query={query} />
 */}
        {' '}

      </div>
    </div>
  );
}

export default Search;
