/* eslint-disable  */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MoreVideos from '../MoreVideos';
import './styles.scss';
import CommentsApp from '../Comments';
import SocialShareModal from '../SocialShareModal';
import DonationModal from '../DonationModal';
import { useChannel } from '../../channelContext';
import { dislike, like } from '../../services/videoSlice';
import LoginModal from '../LoginModal';

function VideoBox(props) {
  const { video } = props;
  const { buttonSubscribe } = useChannel();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth?.user?.profile);
  const currentVideo = useSelector((state) => state.video.currentVideo);

  useEffect(() => {
    const addView = async () => {
      try {
        return await axios.patch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/view/${currentVideo._id}`);
      } catch (err) {
        return err;
      }
    };
    addView();
  }, [currentVideo._id]);

  const handleLike = async () => {
    await axios.patch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handleDislike = async () => {
    await axios.patch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleModal = () => {

  }

  return (
    <div className="video-full-section">
      {
        <>
          <main key={currentVideo.id}>
            <video className="video-box" src={currentVideo.url} poster={currentVideo.thumbnail} controls />
            <div className="video-options">
              <h1 className="video-options__title">{currentVideo.title}</h1>
              <div className="video-options__container">
                <p className="video-options__views">
                  {currentVideo.views}
                  {' '}
                  views
                </p>
                <div className="video-options__buttons">
                  {
                    currentUser ?

                      <><button type="button" className="video-options__like-btn" onClick={handleLike}>
                        {currentVideo?.likes?.includes(currentUser?._id) ? (
                          <img src="/media/icons/like.png" alt="like" style={{ opacity: '1' }} />
                        ) : (
                          <img src="/media/icons/like.png" alt="like" style={{ opacity: '0.2' }} />
                        )}
                        {' '}
                        {currentVideo?.likes?.length}
                      </button><button type="button" className="video-options__dislike-btn" onClick={handleDislike}>
                          {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                            <img src="/media/icons/dislike.png" alt="dislike" style={{ opacity: '1' }} />
                          ) : (
                            <img src="/media/icons/dislike.png" alt="dislike" style={{ opacity: '0.2' }} />
                          )}
                          {' '}
                          Dislike
                        </button></>
                      :
                      <LoginModal currentVideo={currentVideo} currentUser={currentUser} />
                  }
                  <DonationModal />
                  <SocialShareModal />
                </div>
              </div>
            </div>
            {/* Channel info and video description */}
            <div className="ch-info-container">
              <Link to={`/channel/${currentVideo?.user?._id}/videos`} className="ch-info-container__avatar">
                <img src={currentVideo?.user?.logo || '/media/icons/blank_profile.png'} alt="avatar" />
              </Link>
              <div className="ch-info-container__ch-info">
                <Link to={`/channel/${currentVideo?.user?._id}/videos`} className="ch-info-container__name">{currentVideo?.user?.username}</Link>
                <p className="ch-info-container__subs"></p>
                <p className="ch-info-container__desc">{currentVideo.description}</p>
              </div>
              <div className="ch-info-container__subs-btn">
                {
                  buttonSubscribe(currentVideo?.user?._id)
                }
              </div>
            </div>
            <CommentsApp />
            <div>
            </div>
          </main>
          <aside>
            <MoreVideos />
          </aside>
        </>
      }
    </div>
  );
}

export default VideoBox;
