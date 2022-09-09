/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setDonation } from '../../actions/donation';
import './styles.scss';

function DonationModal() {
  const [userDonationAmmount, setUserDonationAmmount] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth?.user?.profile);
  const navigateToPayment = () => {
    dispatch(setDonation({
      amount: userDonationAmmount,
      userId: currentUser._id,
    }));
    navigate('/api/payment');
  };

  const handleChange = (e) => {
    setUserDonationAmmount(e.target.value);
    console.log(userDonationAmmount);
  };

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
              <input type="number" name="donation-ammount" id="quantity" placeholder="$" onChange={handleChange} />
            </div>
            <div className="donate-btn">
              <button type="submit" onClick={navigateToPayment}>
                {/* validacion */}
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
