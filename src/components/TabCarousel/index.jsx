import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useChannel } from '../../channelContext';

function TabCarousel() {
  const { id } = useChannel();
  const [currentPath, setCurrentPath] = useState('');
  const links = ['featured', 'videos', 'playlist', 'channels', 'about'];
  useEffect(() => {
    const currentLink = links.filter((link) => window.location.pathname.includes(link));
    setCurrentPath(currentLink[0]);
  }, []);

  const handleSelect = (name) => {
    setCurrentPath(name);
  };
  return (
    <div className="carousel">
      <div className="arrow-left" />
      <div className="tabsContainer">
        <Link to={`/channel/${id}/featured`} onClick={() => handleSelect('featured')} className={currentPath === 'featured' ? 'tab-selected' : 'tab-unselected'}>
          PÁGINA PRINCIPAL
        </Link>
        <Link to={`/channel/${id}/videos`} onClick={() => handleSelect('videos')} className={currentPath === 'videos' ? 'tab-selected' : 'tab-unselected'}>
          VIDEOS
        </Link>
        <Link to={`/channel/${id}/playlist`} onClick={() => handleSelect('playlist')} className={currentPath === 'playlist' ? 'tab-selected' : 'tab-unselected'}>
          LISTAS DE REPRODUCCIÓN
        </Link>
        <Link to={`/channel/${id}/channels`} onClick={() => handleSelect('channels')} className={currentPath === 'channels' ? 'tab-selected' : 'tab-unselected'}>
          CANALES
        </Link>
        <Link to={`/channel/${id}/about`} onClick={() => handleSelect('about')} className={currentPath === 'about' ? 'tab-selected' : 'tab-unselected'}>
          MAS INFORMACIÓN
        </Link>
      </div>
      <div className="arrow-rigth" />
    </div>
  );
}
export default TabCarousel;
