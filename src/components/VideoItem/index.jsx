/* eslint-disable no-underscore-dangle */
import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlayListModal from '../PlayListModal';
import setTime from '../../services/toLocalString';

function VideoItem({ videoID }) {
  const [display, setDisplay] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [video, setVideo] = useState('');
  const HandleToggle = () => {
    setDisplay(!display);
  };
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const axiosData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/${videoID}`);
      const { data } = result;
      // eslint-disable-next-line no-unused-vars
      setVideo(data);
    };

    axiosData();
  }, [videoID]);

  return (

    <div className="items-container">
      <Link to={`/api/videos/${video?._id}`} className="link">
        <div className="video-thumbnail">
          <img src={video?.thumbnail} alt="" />
        </div>
      </Link>
      <div className="info-container">
        <div>
          <Link to={`/api/videos/${video?._id}`} className="link">
            <div className="title-video">
              {video?.title}
            </div>
          </Link>
          <div className="channel-name">
            {video?.user?.username}
          </div>
          <div className="statistics">
            {video?.views}
            {' '}
            views -
            {' '}
            {setTime(video?.createdAt)}
            <button type="button" className="options" onClick={HandleToggle}>
              <div className="button-content">
                ⦙
              </div>
              {
                display
                && (
                  <div className="container-display">
                    <div>
                      Save in Watch later
                    </div>
                    <button type="button" onClick={handleModal}>
                      Save in a playlist
                    </button>
                  </div>
                )
              }
            </button>
          </div>

        </div>
      </div>
      {
        modalOpen && <PlayListModal handleModal={handleModal} />
      }
    </div>

  );
}
export default VideoItem;
