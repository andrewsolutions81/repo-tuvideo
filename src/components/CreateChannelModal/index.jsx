import './styles.scss';
import { useState } from 'react';
import Modal from '../Modal';

function CreateChannelModal({ setActiveModal }) {
  const [logoTemp, setLogoTemp] = useState('https://res.cloudinary.com/royhuamanavila/image/upload/v1660888009/image832_ec9r7e.png');
  return (
    <Modal>
      <div className="channel-modal-container">
        <div className="header-channel-modal">
          Cómo te veran los demás
        </div>
        <div className="image-perfil">
          <img src={logoTemp} alt="perfil" />
        </div>
        <div className="upload-image-perfil">
          <p className="text-button">
            SUBIR IMAGEN
          </p>
          <input
            type="file"
            accept=".jpg, .png"
            className="input-upload"
            onChange={(e) => {
              const [file] = e.target.files;
              if (file) {
                setLogoTemp(URL.createObjectURL(file));
              }
            }}
          />
        </div>
        <div className="input-channel-name">
          <label htmlFor="channel-name">
            Nombre
            {' '}
            <br />
            <input className="input-text" type="text" />
          </label>
        </div>
        <div className="options-buttons">
          <button className="button-cancel" type="button" onClick={() => setActiveModal(false)}>CANCELAR</button>
          <button className="button-create-channel" type="button">CREAR CANAL</button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateChannelModal;
