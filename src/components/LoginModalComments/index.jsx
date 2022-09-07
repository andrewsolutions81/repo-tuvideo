/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Login from '../Login';

function LoginModalComment() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button type="submit" onClick={handleOpen}>
        COMMENT
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

export default LoginModalComment;
