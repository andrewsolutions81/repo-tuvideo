import './styles.scss';
import Modal from '@mui/material/Modal';
import { useChannel } from '../../channelContext';

function CreateChannelModal({ open, setOpen }) {
  const { setBanner, banner } = useChannel();

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="channel-modal-container">
        <div className="header-channel-modal">
          Add new elements to your channel
        </div>
        <div className="element-item">
          <div className="element-title">
            Featured Video for subscribers
          </div>
          <div className="element-description">
            <div>
              Star a video for your subscribers to watch.
              The video will not be visible at the top of the page
              For those who already watched it.
            </div>
            <div className="button-add">
              ADD
            </div>
          </div>
        </div>
        <div className="element-item">
          <div className="element-title">
            Banner Image
          </div>
          <div className="element-description">
            <div>
              This image will appear at the top of your channel.
              {' '}
              <br />
              For best results on all devices,
              use an image that is 2048 × 1152 pixels minimum and 6 MB maximum.
            </div>
            {
              banner ? (
                <div className="button-added">
                  ADDED
                </div>
              ) : (
                <div className="button-add">
                  ADD
                  <input
                    type="file"
                    className="input-upload-image"
                    onChange={(e) => {
                      setBanner(e.target.files[0]);
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
