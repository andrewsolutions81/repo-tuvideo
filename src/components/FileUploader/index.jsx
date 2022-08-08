/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import UploadForm from '../UploadForm';
// import UploadingSpinner from '../UploadingSpinner';
import '../UploadVideo/styles.scss';

function VideoUploader() {
  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');

  const uploadVideoDetails = (video) => {
    const data = new FormData();
    data.append('file', video);
    data.append('upload_preset', 'tuvideo-video');
    data.append('cloud_name', 'dqv35f3nq');
    fetch('https://api.cloudinary.com/v1_1/dqv35f3nq/video/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((newdata) => {
        setUrl(newdata.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const fileData = e.target.files[0];
    setFile(fileData);
    setUrl(uploadVideoDetails(fileData));
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
        {url && <video width="100%" src={`${url}#t=5`} poster={url} controls />}
      </div>
      <UploadForm cloudinary={url} />
    </div>
  );
}
export default VideoUploader;
