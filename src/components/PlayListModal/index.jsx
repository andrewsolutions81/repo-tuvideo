import './styles.scss';
import Modal from '../Modal';

function PlayListModal({ handleModal }) {
  return (
    <Modal>
      <div className="modal-container">
        <div className="modal-header">
          Guardar en...
          <button className="close-modal" type="button" onClick={handleModal}>X</button>
        </div>
        <div className="playlist-container">
          <PlaylistItem name="Ver más tarde" />
          <PlaylistItem name="Programacion" />
          <PlaylistItem name="Diseño" />
          <PlaylistItem name="Gameplays" />
          <PlaylistItem name="Pintar" />
          <PlaylistItem name="Bootcamp" />
          <PlaylistItem name="Importante" />
        </div>
        <div />
        <button type="button" className="playlist-add">
          <p className="cross">+</p>
          <p>
            Nueva lista de reproducción
          </p>
        </button>
      </div>
    </Modal>
  );
}

export default PlayListModal;

function PlaylistItem({ name }) {
  return (
    <div className="playlist-item">
      <input className="check" type="checkbox" name="" id="" />
      <div className="playlist-name">{name}</div>
    </div>
  );
}
