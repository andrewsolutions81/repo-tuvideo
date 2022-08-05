/* eslint-disable jsx-a11y/media-has-caption */

import './styles.scss';

function VideoIntroduccion(props) {
  const { video } = props;
  return (
    <div className="container">
      <div className="introduccion">
        <div className="video-container">
          <video controls autoPlay><source src={video.sources} type="video/mp4" /></video>
        </div>
        <div className="video-details-container">
          <div className="video-title">
            <div className="title">
              <div>{video.title}</div>
            </div>
            <div className="video-stadistics">
              500,116 vistas - hace 2 días
            </div>
          </div>
          <div className="video-description">
            {video.description}
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoIntroduccion;
