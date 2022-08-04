import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { createSlug } from '../VideoBox';

function VideoItem(props) {
  const { video } = props;
  return (
    <Link to={`/${createSlug(video)}`} className="link">
      <div className="items-container">
        <div className="video-thumbnail">
          <img src={video.thumb} alt="" />
        </div>
        <div className="info-container">
          <div>
            <div className="title">
              {video.title}
            </div>
            <div className="statistics">
              15 K vistas - hace 18 horas
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default VideoItem;
