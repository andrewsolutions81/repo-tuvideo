import './styles.scss';

function TabCarousel() {
  return (
    <div className="carousel">
      <div className="arrow-left" />
      <div className="tabsContainer">
        <a href="/" className="tab-selected">
          PÁGINA PRINCIPAL
        </a>
        <a href="/" className="tab-unselected">
          VIDEOS
        </a>
        <a href="/" className="tab-unselected">
          LISTAS DE REPRODUCCIÓN
        </a>
        <a href="/" className="tab-unselected">
          CANALES
        </a>
        <a href="/" className="tab-unselected">
          MÁS INFORMACIÓN
        </a>
      </div>
      <div className="arrow-rigth" />
    </div>
  );
}
export default TabCarousel;
