/* eslint-disable max-len */
/* eslint-disable */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import axios from 'axios';
import { COMMENT } from '../../actions/types';
import setTime from '../../services/toLocalString';
import LoginModalComment from '../LoginModalComments';

function CommentsApp() {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth?.user?.profile);
  const allComments = useSelector((state) => state.comment.commentText);
  const currentVideo = useSelector((state) => state.video.currentVideo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComment('');
    dispatch({ type: COMMENT, payload: { user: currentUser._id, commentText: comment } });
    const data = {
      user: currentUser._id,
      commentText: comment,
    };

    try {
      await axios.post(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/comments/${currentVideo._id}`, data);
    } catch (error) {
      console.error(error, 'error in comment handle submit');
    }
  };
  return (
    <div className="comments">
      <div className="comments-header">
        {
          currentVideo?.comments?.length > 0
            ? (
              <h3 className="comments__title">
                {currentVideo.comments.length}
                {' '}
                comments
              </h3>
            )
            : (
              <h3 className="comments__title">
                0 comments
              </h3>
            )
        }

      </div>
      <div className="comments-form-container">
        <div className="comments-view__avatar">
          <img src={currentUser?.logo || '/media/icons/blank_profile.png'} alt="avatar" />
        </div>
        <form className="comments-form" onSubmit={handleSubmit}>
          <div className="comments-form__input">
            <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" name="new-comment" placeholder="Add a comment..." />
          </div>
          <div className="comments-form__btn">
            {
              currentUser
                ? (
                  <button type="submit">
                    COMMENT
                  </button>
                )
                : <LoginModalComment currentVideo={currentVideo} currentUser={currentUser} />
            }
          </div>
        </form>
      </div>
      <div className="comments-view">
        <div>
          {
            allComments
            && (
              <div className="single-comment">
                <img src={currentUser?.logo || '/media/icons/blank_profile.png'} alt="avatar" />
                <div className="single-comment__comment">
                  <p className="single-comment__comment__username">
                    {currentUser?.username}
                    {' '}
                    <span>Just Now</span>
                  </p>
                  <p>{allComments}</p>

                </div>
              </div>
            )
          }

          {
            currentVideo?.comments?.map((comment, index) => {
              return (
                <div className="single-comment" key={index}>
                  <img src={comment?.user?.logo || '/media/icons/blank_profile.png'} alt="avatar" />
                  <div className="single-comment__comment">
                    <p className="single-comment__comment__username">
                      {comment?.user?.username}
                      {' '}
                      <span>{setTime(comment.createdAt)}</span>
                    </p>
                    <p>{comment.commentText}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  );
}

export default CommentsApp;
