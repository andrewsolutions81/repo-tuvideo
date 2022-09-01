/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoreVideos from '../MoreVideos';
import './styles.scss';
import CommentsApp from '../Comments';
import SocialShareModal from '../SocialShareModal';
import DonationModal from '../DonationModal';
import { useChannel } from '../../channelContext';

function VideoBox(props) {
  const [isActive, setIsActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { video } = props;
  const { buttonSubscribe } = useChannel();
  return (
    <div className="video-full-section">
      {
        <>
          <main key={video.id}>
            <video className="video-box" src={video.url} poster={video.thumbnail} controls />
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
                  <DonationModal />
                  <SocialShareModal videoId={video} />
                </div>
              </div>
            </div>
            {/* Channel info and video description */}
            <div className="ch-info-container">
              <Link to={`/channel/${video?.user?._id}/featured`} className="ch-info-container__avatar">
                <img src={video?.user?.logo} alt="avatar" />
              </Link>
              <div className="ch-info-container__ch-info">
                <Link to={`/channel/${video?.user?._id}/featured`} className="ch-info-container__name">{video?.user?.username}</Link>
                <p className="ch-info-container__subs">{`${new Intl.NumberFormat().format(Math.floor(Math.random() * 100000))} subscribers`}</p>
                <p className="ch-info-container__desc">{video.description}</p>
              </div>
              <div className="ch-info-container__subs-btn">
                {
                  buttonSubscribe(video?.user?._id)
                }
              </div>
            </div>
            <CommentsApp />
            <div>
              {video?.comments?.map((comment, index) => <p key={index}>{comment.commentText}</p>)}
            </div>
          </main>
          <aside>
            <MoreVideos video={video} />
          </aside>
        </>
      }
    </div>
  );
}
export default VideoBox;
