/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Landing/styles.css';

function LandingVideos() {
  const [allVideos, setAllVideos] = useState({});

  useEffect(() => {
    fetch('https://tuvideo-backend.herokuapp.com/api/videos/')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setAllVideos(res);
          console.log(res);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {
    Object.entries(allVideos).map((singleVideo) => (singleVideo[1]
      && (
      <div className="card__videos" key={singleVideo[1]._id}>

        <video width="320" src={singleVideo[1].url} />
        <div className="card__info">
          <div className="card__info__title">
            <div className="ch-info-container__avatar">
              <img src="/media/images/ch-avatar.jpeg" alt="avatar" />
            </div>
            <Link to={`/api/videos/${singleVideo[1]._id}`} className="title">{singleVideo[1].title}</Link>
          </div>
          <div className="card__info__channel">
            <p className="more-videos-container__ch-name">Channel</p>
            <p className="more-videos-container__views">206 visualizaciones • 7 ago 2022</p>
          </div>
        </div>
      </div>

      )
    ))

    }

    </>
  );
}

export default LandingVideos;
