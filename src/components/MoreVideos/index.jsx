/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom';

function MoreVideos(props) {
  const { video, videos, createSlug } = props;
  const videoCategory = video.category;
  return (
    <div>
      {
      videos.map((video, index) => (video.category === videoCategory
        ? (
          <div className="more-videos-container" key={index}>
            <div className="more-videos-container__video">
              <video width="320" poster={video.thumb} controls />
              <div>
                <Link to={`/${createSlug(video)}`} className="more-videos-container__title">{video.title}</Link>
                <p className="more-videos-container__ch-name">{video.subtitle}</p>
                <p className="more-videos-container__views">100.000</p>
              </div>
            </div>
          </div>
        )
        : null))

      }

    </div>
  );
}
export default MoreVideos;
