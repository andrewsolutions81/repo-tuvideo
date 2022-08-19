/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect } from 'react';
import MoreVideos from '../MoreVideos';
import './styles.scss';
import CommentsApp from '../Comments';
import SocialShareModal from '../SocialShareModal';

function VideoBox(props) {
  const [isActive, setIsActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { video } = props;

  return (
    <div>
      {
        <div key={video.id}>
          <video className="video-box" width="100%" src={video.url} poster={video.thumbnail} controls />
          <div className="video-options">
            <h1 className="video-options__title">{video.title}</h1>
            <div className="video-options__container">
              <p className="video-options__views">3.000.000 views</p>
              <div className="video-options__buttons">
                <button type="button" className="video-options__like-btn">
                  <img src="/media/icons/like.png" alt="like" style={!isActive ? { opacity: '1' } : { opacity: '0.2' }} />
                </button>
                <button type="button" className="video-options__dislike-btn" style={isActive ? { opacity: '1' } : { opacity: '0.2' }}>
                  <img src="/media/icons/dislike.png" alt="dislike" />
                  Don`t like it
                </button>
                <SocialShareModal videoId={video} />
              </div>
            </div>
          </div>
          {/* Channel info and video description */}
          <div className="ch-info-container">
            <div className="ch-info-container__avatar">
              <img src="/media/images/ch-avatar.jpeg" alt="avatar" />
            </div>
            <div className="ch-info-container__ch-info">
              <h2 className="ch-info-container__name">Channel</h2>
              <p className="ch-info-container__subs">{`${new Intl.NumberFormat().format(Math.floor(Math.random() * 100000))} subscribers`}</p>
              <p className="ch-info-container__desc">{video.description}</p>
            </div>
            <div className="ch-info-container__subs-btn">
              <button type="button">Subscribe</button>
            </div>
          </div>
          <MoreVideos video={video} />
          <CommentsApp />
        </div>
      }
    </div>
  );
}
export default VideoBox;
