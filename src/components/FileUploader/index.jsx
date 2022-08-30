/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import axios from 'axios';
import UploadForm from '../UploadForm';
import '../UploadVideo/styles.scss';
import UploadingSpinner from '../UploadingSpinner';

function VideoUploader() {
  const [file, setFile] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFileInput, setShowFileInput] = useState(true);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadFile = async () => {
    setLoading(true);
    const formData = new FormData();

    formData.append('file', file);
    formData.append('filename', file.name);

    try {
      const data = await axios.post('http://localhost:8080/api/upload/file', formData);
      setVideoUrl(data.data.secure_url);
      setLoading(false);
    } catch (error) {
      console.error('something happened', error);
    }
  };

  return (
    <>
      {
        showFileInput
          ? (
            <div>
              <div className="file-input">
                <img src="/media/icons/uploading.png" alt="" />
                <label htmlFor="myfile">Select a video:</label>
                <p>{file ? `File name: ${file.name} ` : 'no files uploaded yet'}</p>
                <input type="file" accept="video/*" id="myfile" style={{ opacity: '0' }} onChange={handleChange} />
                {
                  file && <button type="button" onClick={handleUploadFile}>Upload</button>
                }
              </div>
              {loading ? (
                <>
                  <UploadingSpinner />
                  {' '}
                  <h2>Uploading Video...</h2>
                </>
              ) : null}
            </div>
          ) : null
      }
      <UploadForm cloudinary={videoUrl} setShowFileInput={setShowFileInput} />
    </>
  );
}
export default VideoUploader;
