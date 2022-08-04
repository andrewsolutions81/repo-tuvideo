import { useEffect, useState } from 'react';
import { getVideos } from '../../services/videos';

import './styles.scss';
import VideoItem from '../VideoItem';

function VideoCarousel() {
  const [videos, setVideos] = useState([]);
  const [styleScroll, setStyleScroll] = useState({});
  const [amount, setAmount] = useState(0);

  const handleClick = () => {
    const container = document.querySelector('.list-videos');
    const totalWidth = videos.length * 180;
    const translate = container.clientWidth;
    const restante = totalWidth - amount;

    console.log('totalWidth: ', totalWidth);
    console.log('translate: ', translate);
    console.log('restante: ', restante);
    console.log('amountTranslate:', amount);

    if (restante >= translate) {
      setAmount(amount + translate);
      const newStyle = { transform: `translate(-${amount}px)` };
      setStyleScroll(newStyle);
    } else {
      const newStyle = { transform: `translate(-${amount + restante}px)` };
      setStyleScroll(newStyle);
    }
    /* const newStyle = { transform: `translate(-${width - 10}px)` };
    setWidth(container.clientWidth);
    setStyleScroll(newStyle);
    console.log(width);
    console.log(maxWidth); */
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
        <div className="scroll-container" style={styleScroll}>
          {
            videos.map((video) => <VideoItem key={video.id} video={video} />)
          }
        </div>
      </div>
      <button type="button" className="arrow" onClick={handleClick}>
        <svg height="40" width="40">
          <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" />
        </svg>
      </button>
    </div>
  );
}
export default VideoCarousel;
