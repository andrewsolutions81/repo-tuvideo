/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UploadingSpinner from '../UploadingSpinner';

function UploadForm(props) {
  const { cloudinary, setShowFileInput, setOpenModal } = props;
  const [dataForm, setDataForm] = useState({});
  const [saveForm, setSaveForm] = useState({});
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  }

  async function handlePublish(e) {
    const thumbnail = cloudinary.replace('.mp4', '.jpg');
    e.preventDefault();
    const list = {
      ...dataForm,
      cloudinary,
      thumbnail,
    };
    setSaveForm(list);
    setIsSent(true);

    const {
      title, description, category,
    } = list;
    const data = {
      title,
      description,
      category,
      url: cloudinary,
      thumbnail,
    };
    await axios.post(`${process.env.REACT_APP_BACK_DEV_BASE_URL}/api/videos`, data);
    setTimeout(() => {
      setOpenModal(false);
      window.location.reload();
      alert('Video Uploaded successfully!');
    }, 3000);
  }
  return (
    <div>
      {
        cloudinary
        && (
          <>
            {
              setShowFileInput(false)
            }
            <h2>Video Uploaded. please, continue to publish:</h2>
            <form className="upload-form" onSubmit={handlePublish}>
              <div>
                <label htmlFor="select-category">
                  What category suits your video better
                  <select id="select-category" name="category" onChange={handleChange} required>
                    <option value="select">Select</option>
                    <option value="fun">Fun</option>
                    <option value="music">Music</option>
                    <option value="terror">Terror</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="video-title-name">What title you want for your video</label>
                <input type="text" id="video-title-name" name="title" placeholder="Write a meaningfull title" onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="video-desc-name">What description you want for your video</label>
                <textarea type="text" id="video-desc-name" name="description" rows="7" onChange={handleChange} required />
              </div>
              <div className="upload__button">
                <button type="submit">PUBLISH VIDEO</button>
              </div>
            </form>
          </>

        )
      }
      {
        isSent && (
          <>
            <UploadingSpinner />
            <h2 style={{ textAlign: 'center', fontSize: '22px' }}>Publishing... you will be redirected once video is published.</h2>
          </>
        )
      }
    </div>
  );
}
export default UploadForm;
