/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import { Link } from 'react-router-dom';

function SearchItem(props) {
  const {
    allVideos, debounceSearch, setClose, close,
  } = props;

  return (
    <div className="search-results">
      {
       debounceSearch
         ? allVideos.map((video) => video
        && <Link to={`api/videos/${video._id}`} onClick={() => { setClose(!close); }}>{video.title}</Link>)

         : null
}
    </div>

  );
}

export default SearchItem;
