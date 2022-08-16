import './styles.scss';

function PlayListModal({ modAddList }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        Guardar en...
        <button type="button">X</button>
      </div>
      <div className="playlist-container">
        <div className="playlist-item">
          <input type="checkbox" name="" id="" />
          <div className="playlist-name">Ver mas tarde</div>
        </div>
      </div>
      {
        modAddList ? (
          <div>
            Nombre
            <input type="text" placeholder="Escribe el nombre de la lista" />
            <button type="button">Guardar</button>
          </div>
        ) : (
          <div className="playlist-add">
            <span>+</span>
            Nueva lista de reproducción
          </div>
        )
      }

    </div>
  );
}

export default PlayListModal;
