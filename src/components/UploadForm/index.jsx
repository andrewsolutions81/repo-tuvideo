/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadForm(props) {
  const { cloudinary } = props;
  const [dataForm, setDataForm] = useState({});
  const [saveForm, setSaveForm] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [videoId, setVideoId] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  }

  function handlePublish(e) {
    e.preventDefault();
    const list = {
      ...dataForm,
      cloudinary,
    };
    setSaveForm(list);
    setIsSent(true);

    const {
      title, description, category, _id,
    } = list;
    fetch('https://tuvideo-backend.herokuapp.com/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        category,
        url: cloudinary,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log('successfully added to DB 😄');
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {
        cloudinary
          && (
            <form className="upload-form" onSubmit={handlePublish}>
              <div>
                <label htmlFor="select-category">
                  What category suits your video better
                  <select id="select-category" name="category" onChange={handleChange}>
                    <option value="select">Select</option>
                    <option value="fun">Fun</option>
                    <option value="music">Music</option>
                    <option value="terror">Terror</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="video-title-name">What title you want for your video</label>
                <input type="text" id="video-title-name" name="title" placeholder="Write a meaningfull title" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="video-desc-name">What description you want for your video</label>
                <textarea type="text" id="video-desc-name" name="description" rows="7" onChange={handleChange} />
              </div>
              <div className="upload__button">
                <button type="submit">PUBLISH VIDEO</button>
              </div>
            </form>
          )
      }
      {
        isSent && <h2 style={{ textAlign: 'center', fontSize: '22px' }}>Video successfully published.</h2>
      }
    </div>
  );
}
export default UploadForm;
