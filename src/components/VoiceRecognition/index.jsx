import React, { useContext, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SearchContext } from '../../searchContext/SearchContext';

function VoiceRecognition() {
  const { dispatch, state } = useContext(SearchContext);

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleSpeech = () => {
    dispatch({ type: 'toggleButton' });

    if (!state.toggle) {
      SpeechRecognition.startListening({ continuous: true });
    }
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  useEffect(() => {
    dispatch({ type: 'typing', payload: transcript.toLowerCase() });
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  return (
    <div>
      <button type="button" className="header__search-bar__mic" onClick={handleSpeech}>
        <img src={`${state.toggle ? '/media/icons/stop.png' : '/media/icons/Mic.png'}`} alt="Voz" />
      </button>
      <p className="clic-to-speak">{state.toggle ? 'Click to stop' : 'Click to speak'}</p>
    </div>
  );
}
export default VoiceRecognition;
