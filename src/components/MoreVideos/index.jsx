/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MoreVideos() {
  const [allVideos, setAllVideos] = useState({});
  const currentVideo = useSelector((state) => state.video.currentVideo);
  const videoCategory = currentVideo.category;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_DEV_BASE_URL}/api/videos/`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setAllVideos(res);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {
      Object.entries(allVideos).map((singleVideo) => (singleVideo[1].category === videoCategory
        && (
          <div className="more-videos-container" key={singleVideo[1]._id}>
            <div className="more-videos-container__video">
              <video width="320" height="95px" src={singleVideo[1].url} />
              <div>
                <Link to={`/api/videos/${singleVideo[1]._id}`} className="more-videos-container__title">{singleVideo[1].title}</Link>
                <p className="more-videos-container__ch-name">Channel</p>
                <p className="more-videos-container__views">100.000</p>
              </div>
            </div>
          </div>
        )
      ))
      }
    </div>
  );
}
export default MoreVideos;
