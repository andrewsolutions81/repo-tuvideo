/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from '@mui/material/Modal';
import './styles.scss';

function DonationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button type="button" className="video-options__donation-btn" onClick={handleOpen}>
        <img src="/media/icons/donation.png" alt="donation" />
        Thank you!
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-quantity">
          <div className="modal-quantity-content">
            <div className="quantity-cointainer">
              <label htmlFor="quantity">
                How much do you wanna donate?
              </label>
              <input type="number" name="" id="quantity" placeholder="$" />
            </div>
            <div className="donate-btn">
              <button type="submit">
                Donate
              </button>
            </div>
          </div>
        </div>

      </Modal>

    </>
  );
}

export default DonationModal;
