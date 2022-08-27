/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SpeechRecognition } from 'react-speech-recognition';
import { SearchContext } from '../../searchContext/SearchContext';

function SearchItem(props) {
  const { dispatch, state } = useContext(SearchContext);

  const {
    allVideos, debounceSearch, setClose, close,
  } = props;

  const handleClick = () => {
    setClose(!close);
    dispatch({ type: 'untoggleButton' });
    if (state.toggle) {
      SpeechRecognition.stopListening();
      dispatch({ type: 'toggleButton' });
      setClose(close);
    }
    dispatch({ type: 'clearTyping' });
  };

  return (
    <div className="search-results">
      {
       debounceSearch
         ? allVideos.map((video) => video
        && <Link to={`api/videos/${video._id}`} onClick={handleClick}>{video.title}</Link>)

         : null
}
    </div>

  );
}

export default SearchItem;
