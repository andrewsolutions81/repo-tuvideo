import './styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createSlug } from '../VideoBox';

function VideoItem(props) {
  const { video } = props;
  const [display, setDisplay] = useState(false);

  const HandleToggle = () => {
    setDisplay(!display);
  };
  return (

    <div className="items-container">
      <Link to={`/${createSlug(video)}`} className="link">
        <div className="video-thumbnail">
          <img src={video.thumb} alt="" />
        </div>
      </Link>
      <div className="info-container">
        <div>
          <div className="title-video">
            {video.title}
          </div>
          <div className="channel-name">
            Mi canal
          </div>
          <div className="statistics">
            15 K vistas - hace 18 horas
            <button type="button" className="options" onClick={HandleToggle}>
              ⦙
              {
                display
                && (
                  <div className="container-display">
                    <div>
                      Guardar en Ver más tarde
                    </div>
                    <div>
                      Guardar en una lista de reproducción
                    </div>
                  </div>
                )
              }
            </button>
          </div>

        </div>
      </div>
    </div>

  );
}
export default VideoItem;
