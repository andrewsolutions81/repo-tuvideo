import './styles.scss';
import Modal from '@mui/material/Modal';
import { useChannel } from '../../channelContext';

function CreateChannelModal({ open, setOpen }) {
  const { setTempBanner, tempBanner } = useChannel();

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="channel-modal-container">
        <div className="header-channel-modal">
          Añade nuevos elementos a tu canal
        </div>
        <div className="element-item">
          <div className="element-title">
            Video destacado para los suscriptores
          </div>
          <div className="element-description">
            <div>
              Destaca un video para que lo miren tus suscriptores.
              El video no estará visible en la parte superior de la página
              para aquellos que ya lo miraron.
            </div>
            <div className="button-add">
              AGREGAR
            </div>
          </div>
        </div>
        <div className="element-item">
          <div className="element-title">
            Imagen del banner
          </div>
          <div className="element-description">
            <div>
              Esta imagen aparecerá en la parte superior de tu canal.
              {' '}
              <br />
              Para obtener los mejores resultados en todos los dispositivos,
              usa una imagen de 2048 × 1152 píxeles como mínimo y 6 MB como máximo.
            </div>
            {
              tempBanner ? (
                <div className="button-added">
                  AGREGADO
                </div>
              ) : (
                <div className="button-add">
                  AGREGAR
                  <input
                    type="file"
                    className="input-upload-image"
                    onChange={(e) => {
                      setTempBanner(e.target.files[0]);
                    }}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CreateChannelModal;
