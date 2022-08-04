/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import UploadForm from '../UploadForm';
import '../UploadVideo/styles.scss';

function VideoUploader() {
  const [file, setFile] = useState(null);
  const [showVideo, setShowVideo] = useState();

  const handleChange = (ev) => {
    const newFile = ev.target.files[0];
    setFile(newFile);

    const reader = new FileReader();

    if (file) {
      reader.onload = async function (e) {
        const uint8Array = new Uint8Array(e.target.result);
        const arrayBuffer = uint8Array.buffer;
        const blob = new Blob([arrayBuffer]);
        setShowVideo(URL.createObjectURL(blob));
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return (
    <div>
      <div className="file-input">
        <img src="/media/icons/uploading.png" alt="" />
        <label htmlFor="myfile">Select a video:</label>
        <p>{file ? `File name: ${file.name} ` : 'no files uploaded yet'}</p>
        <input type="file" accept="video/*" id="myfile" style={{ opacity: '0' }} onChange={handleChange} />
      </div>
      <div>
        {file ? <video width="100%" src={`${showVideo}#t=5`} poster={showVideo} controls /> : null}
      </div>
      <UploadForm file={showVideo} />
    </div>
  );
}
export default VideoUploader;
