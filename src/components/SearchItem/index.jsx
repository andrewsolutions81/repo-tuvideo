/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';

function SearchItem(props) {
  const { allVideos, query } = props;
  return (
    <div>
      {
        allVideos
  && Object.entries(allVideos).filter((video) => {
    if (query === '') {
      return video[1];
    } if (video[1].title.toLowerCase().includes(query.toLowerCase())) {
      return video[1];
    }
  }).map((video) => (
    <div className="box" key={video[1]._id}>
      <p>{video[1].title}</p>
    </div>
  ))
}
    </div>
  );
}

export default SearchItem;
