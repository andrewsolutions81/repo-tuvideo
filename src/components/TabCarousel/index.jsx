import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useChannel } from '../../channelContext';

function TabCarousel() {
  const { id } = useChannel();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  });

  function setSelected(name) {
    if (currentPath.includes(name)) {
      return 'tab-selected';
    }
    return 'tab-unselected';
  }
  return (
    <div className="carousel">
      <div className="arrow-left" />
      <div className="tabsContainer">
        <Link to={`/channel/${id}/featured`} className={setSelected('featured')}>
          PÁGINA PRINCIPAL
        </Link>
        <Link to={`/channel/${id}/videos`} className={setSelected('videos')}>
          VIDEOS
        </Link>
        <Link to={`/channel/${id}/playlist`} className={setSelected('playlist')}>
          LISTAS DE REPRODUCCIÓN
        </Link>
        <Link to={`/channel/${id}/channels`} className={setSelected('channels')}>
          CANALES
        </Link>
        <Link to={`/channel/${id}/about`} className={setSelected('about')}>
          MAS INFORMACIÓN
        </Link>
      </div>
      <div className="arrow-rigth" />
    </div>
  );
}
export default TabCarousel;
