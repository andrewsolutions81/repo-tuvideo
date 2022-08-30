/* eslint-disable max-len */
import Modal from '@mui/material/Modal';
import VideoUploader from '../FileUploader';
import './styles.scss';

function UploadVideo({ openModal, setOpenModal }) {
  const handleClose = () => setOpenModal(false);
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <div className="upload">
          <div className="upload__header">
            <h2>Upload videos</h2>
            <div className="upload__header__icons">
              <button type="button" className="upload__close-button" onClick={handleClose}><img src="/media/icons/close.png" alt="close button" /></button>
            </div>
          </div>
          <div className="upload__container">
            <VideoUploader setOpenModal={setOpenModal} />
          </div>
          <div className="upload__footer">
            <p>By submitting your videos to TuVideo, you acknowledge that you agree to TuVideo Terms of Service and Community Guidelines.</p>
            <p>Please be sure not to violate others copyright or privacy nights.</p>
          </div>
        </div>

      </div>
    </Modal>
  );
}
export default UploadVideo;
