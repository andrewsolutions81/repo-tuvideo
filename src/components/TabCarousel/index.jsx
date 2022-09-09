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
        <Link to={`/channel/${id}/videos`} onClick={() => handleSelect('videos')} className={currentPath === 'videos' ? 'tab-selected' : 'tab-unselected'}>
          VIDEOS
        </Link>
      </div>
      <div className="arrow-rigth" />
    </div>
  );
}
export default TabCarousel;
