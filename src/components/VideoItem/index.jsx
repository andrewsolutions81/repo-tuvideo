/* eslint-disable no-underscore-dangle */
import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlayListModal from '../PlayListModal';

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
      const result = await axios.get(`http://localhost:8080/api/videos/${videoID}`);
      const { data } = result;
      // eslint-disable-next-line no-unused-vars
      setVideo(data);
    };

    axiosData();
  }, [videoID]);

  return (

    <div className="items-container">
      <Link to={`/${video?._id}`} className="link">
        <div className="video-thumbnail">
          <img src={video?.thumbnail} alt="" />
        </div>
      </Link>
      <div className="info-container">
        <div>
          <div className="title-video">
            {video?.title}
          </div>
          <div className="channel-name">
            {video?.user?.username}
          </div>
          <div className="statistics">
            15 K vistas - hace 18 horas
            <button type="button" className="options" onClick={HandleToggle}>
              <div className="button-content">
                ⦙
              </div>
              {
                display
                && (
                  <div className="container-display">
                    <div>
                      Guardar en Ver más tarde
                    </div>
                    <button type="button" onClick={handleModal}>
                      Guardar en una lista de reproducción
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
