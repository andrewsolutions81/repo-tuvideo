import './styles.scss';
import { Link } from 'react-router-dom';

function TabCarousel() {
  return (
    <div className="carousel">
      <div className="arrow-left" />
      <div className="tabsContainer">
        <a href="/" className="tab-selected">
          PÁGINA PRINCIPAL
        </a>
        <Link to="/channel/videos" className="tab-unselected">
          VIDEOS
        </Link>
        <Link to="/channel/playlist" className="tab-unselected">
          LISTAS DE REPRODUCCIÓN
        </Link>
        <Link to="/channel/channels" className="tab-unselected">
          CANALES
        </Link>
        <Link to="/channel/about" className="tab-unselected">
          MAS INFORMACIÓN
        </Link>
      </div>
      <div className="arrow-rigth" />
    </div>
  );
}
export default TabCarousel;
