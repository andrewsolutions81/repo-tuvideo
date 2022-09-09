/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Landing/styles.css';
import setTime from '../../services/toLocalString';
import UploadingSpinner from '../UploadingSpinner';

function LandingVideos() {
  const [allVideos, setAllVideos] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setAllVideos(res);
          setShowSpinner(true);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    showSpinner
      ? (
        <>
          {
            Object.entries(allVideos).map((singleVideo) => (singleVideo[1]
              && (
                <div className="card__videos" key={singleVideo[1]._id}>
                  <Link to={`/api/videos/${singleVideo[1]._id}`} className="title"><video width="320" height="180px" src={singleVideo[1].url} poster={singleVideo[1].thumbnail} /></Link>

                  <div className="card__info">
                    <div className="card__info__title">
                      <div className="ch-info-container__avatar">
                        <Link to={`/channel/${singleVideo[1].user._id}/videos`} className="title">
                          <img className="card__info__avatar" src={singleVideo[1].user.logo || '/media/images/ch-avatar.jpeg'} alt="avatar" />
                        </Link>
                      </div>
                      <Link to={`/api/videos/${singleVideo[1]._id}`} className="title">{singleVideo[1].title}</Link>
                    </div>
                    <div className="card__info__channel">
                      <Link to={`/channel/${singleVideo[1].user._id}/videos`} className="more-videos-container__ch-name">{singleVideo[1].user.username}</Link>
                      <p className="more-videos-container__views">
                        {singleVideo[1].views}
                        {' '}
                        views •
                        {' '}
                        {setTime(singleVideo[1].createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

              )
            ))

          }

        </>
      )
      : <UploadingSpinner />
  );
}

export default LandingVideos;
