/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import './styles.scss';
import Login from '../Login';

function LoginModal({ currentVideo, currentUser }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button type="button" className="video-options__like-btn" onClick={handleOpen}>
        <img src="/media/icons/like.png" alt="like" style={{ opacity: '1' }} />
        {currentVideo?.likes?.length}
      </button>
      <button type="button" className="video-options__dislike-btn" onClick={handleOpen}>
        {currentVideo?.dislikes?.includes(currentUser?._id) ? (
          <img src="/media/icons/dislike.png" alt="dislike" style={{ opacity: '1' }} />
        ) : (
          <img src="/media/icons/dislike.png" alt="dislike" style={{ opacity: '0.2' }} />
        )}
        {' '}
        Dislike
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="login-modal__modal"
      >
        <Login handleClose={handleClose} />
      </Modal>
    </>

  );
}

export default LoginModal;
