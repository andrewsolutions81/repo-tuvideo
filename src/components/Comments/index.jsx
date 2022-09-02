/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import axios from 'axios';
/* import CommentsList from './CommentsList'; */

function CommentsApp({ video }) {
  const [comment, setComment] = useState('');
  const logedUser = useSelector((state) => state?.auth?.user?.profile);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('user', logedUser?._id);
    formData.append('commentText', comment);
    try {
      const response = await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_BACK_DEV_BASE_URL}/api/comments/${video.id}`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      console.error(error, 'error in comment handle submit');
      return error;
    }
  };

  return (
    <div className="comments">
      <div className="coments-container">
        <div className="comments-header-renderer">
          <h2 className="comments__title">Comments</h2>
          <div className="comments-imput">
            <div className="imput-container">
              <form>
                <input onChange={(e) => setComment(e.target.value)} type="text" className="new-comment" name="new-comment" placeholder="Add a comment..." />
              </form>
              <br className="comments-line" />
            </div>
            <div className="comments__buttons-container">
              <button onClick={handleSubmit} type="submit" className="comments__button comment-button">
                COMMENT
              </button>
            </div>
          </div>
        </div>
        <div className="comments-section-container">
          <div className="comments-comment-container">
            {/* <CommentsList comments={comments} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsApp;
