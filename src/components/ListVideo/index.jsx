import { useEffect, useState } from 'react';
import { getVideos } from '../../services/videos';

import './styles.scss';
import VideoItem from '../VideoItem';

function VideoCarousel() {
  const [videos, setVideos] = useState([]);
  const [move, setMove] = useState(0);
  const [style, setStyle] = useState({ transform: 'translateX(0px)' });

  const handleClickRight = () => {
    const width = document.querySelector('.list-videos').clientWidth;
    const maxWidth = videos.length * 180;
    const limit = maxWidth - width;
    const restWidth = limit - move;
    if (restWidth > width) {
      setMove(move + width);
    } else {
      setMove(limit);
    }
    setMove((state) => {
      setStyle({ transform: `translateX(-${state}px)` });
      return state;
    });
  };

  const handleClickLeft = () => {
    const width = document.querySelector('.list-videos').clientWidth;
    if (move > 0 && move > width) {
      setMove(move - width);
    } else {
      setMove(0);
    }
    setMove((state) => {
      setStyle({ transform: `translateX(-${state}px)` });
      return state;
    });
  };
  useEffect(() => {
    const result = getVideos();
    setVideos(result);
  }, []);

  return (
    <div className="container-list">
      <div className="list-details">
        <div className="list-name">
          Videos subidos
        </div>
        <list className="button-play">
          <div>
            ▶ REPRODUCIR TODO
          </div>
        </list>
      </div>
      <div className="list-videos">
        <div className="scroll-container" style={style}>
          {
            videos.map((video) => <VideoItem key={video.id} video={video} />)
          }
        </div>
      </div>
      <button type="button" className="arrow-right" onClick={handleClickRight}>
        <svg height="40" width="40">
          <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" />
        </svg>
      </button>
      <button type="button" className="arrow-left" onClick={handleClickLeft}>
        <svg height="40" width="40">
          <path d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z" />
        </svg>
      </button>
    </div>
  );
}
export default VideoCarousel;
