/* eslint-disable no-underscore-dangle */
import React from 'react';
import './styles.scss';
import Modal from '@mui/material/Modal';
import {
  copyToClipboardUrl, copyToClipboardEmbed, showTooltipUrl, showTooltipEmbed,
} from '../../services/copyToClipboard';

function SocialShareModal(props) {
  const { videoId } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const videoUrl = `https://tuvideo-frontend-ten.vercel.app/api/videos/${videoId._id}`;
  return (
    <>
      <button type="button" className="video-options__share-btn" onClick={handleOpen}>
        <img src="/media/icons/forward.png" alt="share" />
        Share
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <h2>SHARE</h2>
          <div className="modal-content">
            <div className="modal-social">
              <a href={`http://www.facebook.com/sharer.php?u=${videoUrl}`} target="_blank" rel="noreferrer">
                <img src="/media/icons/facebook.png" alt="" />
                {' '}
              </a>
              <p>Facebook</p>
            </div>
            <div className="modal-social">
              <a href={`https://twitter.com/intent/tweet?text=Check out this video! ${videoUrl}`} target="_blank" rel="noreferrer">
                <img src="/media/icons/twitter.png" alt="" />
                {' '}
              </a>
              <p>Twitter</p>
            </div>
            <div className="modal-social">
              <a href={`https://api.whatsapp.com/send?text=Check out this video! ${videoUrl}`} target="_blank" rel="noreferrer">
                <img src="/media/icons/whatsapp.png" alt="" />
                {' '}
              </a>
              <p>WhatsApp</p>
            </div>
            <div className="modal-social">
              <a href={`mailto:?Subject=Check out this video! &body=${videoUrl}`} target="_blank" rel="noreferrer">
                <img src="/media/icons/email.png" alt="" />
                {' '}
              </a>
              <p>Email</p>
            </div>
          </div>
          <div className="modal-clipboard">
            <input type="text" value={videoUrl} id="clipboardUrl" />
            <div className="tooltip">
              <button type="button" onClick={copyToClipboardUrl} onMouseOut={showTooltipUrl} onBlur={() => undefined}>
                <span className="tooltiptext" id="tooltipUrl">Copy to clipboard</span>
                COPY URL
              </button>
            </div>
          </div>
          <div className="modal-clipboard">
            <input type="text" value={`<iframe title="embed-video" id="player" type="text/html" width="640" height="390" src=${videoId.url} />`} id="clipboardEmbed" />
            <div className="tooltip">
              <button type="button" onClick={copyToClipboardEmbed} onMouseOut={showTooltipEmbed} onBlur={() => undefined}>
                <span className="tooltiptext" id="tooltipEmbed">Copy to clipboard</span>
                COPY EMBED
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SocialShareModal;
