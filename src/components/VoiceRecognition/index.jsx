import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Modal from '@mui/material/Modal';

function VoiceRecognition() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    SpeechRecognition.stopListening();
  };

  const handleSpeech = () => {
    handleOpen();
    SpeechRecognition.startListening();
  };
  const {
    transcript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  return (
    <div>
      <button type="button" className="header__search-bar__mic" onClick={handleSpeech}>
        <img src="/media/icons/Mic.png" alt="Voz" />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <h2>{transcript}</h2>
        </div>
      </Modal>
    </div>
  );
}
export default VoiceRecognition;
