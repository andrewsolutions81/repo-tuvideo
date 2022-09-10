/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function MoreVideos() {
  const [allVideos, setAllVideos] = useState({});
  const currentVideo = useSelector((state) => state.video.currentVideo);
  const videoCategory = currentVideo.category;

  useEffect(() => {
    const fetchMoreVideos = async () => {
      try {
        const videos = await axios.get(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/`);
        return setAllVideos(videos.data);
      } catch (error) {
        return error;
      }
    };
    fetchMoreVideos();
  }, []);
  return (
    <div className="aside_container">
      {
        Object.entries(allVideos).map((singleVideo) => (singleVideo[1].category === videoCategory
          && (
            <div className="more-videos-container" key={singleVideo[1]._id}>
              <div className="more-videos-container__video">
                <Link to={`/api/videos/${singleVideo[1]._id}`} className="title">
                  <video width="320" height="95px" src={singleVideo[1].url} poster={singleVideo[1].thumbnail} />
                </Link>
                <div>
                  <Link to={`/api/videos/${singleVideo[1]._id}`} className="more-videos-container__title">{singleVideo[1].title}</Link>
                  <Link to={`/channel/${singleVideo[1].user._id}/videos`} className="more-videos-container__ch-name">
                    <p className="more-videos-container__ch-name">{singleVideo[1].user.username}</p>
                  </Link>
                  <p className="more-videos-container__views">
                    {singleVideo[1].views}
                    {' '}
                    views
                  </p>
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
