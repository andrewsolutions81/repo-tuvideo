/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom';

function MoreVideos(props) {
  const { video, videos, createSlug } = props;
  const videoCategory = video.category;
  return (
    <div>
      {
      videos.map((singleVideo) => (video.category === videoCategory
        ? (
          <div className="more-videos-container" key={singleVideo.id}>
            <div className="more-videos-container__video">
              <video width="320" poster={singleVideo.thumb} controls />
              <div>
                <Link to={`/${createSlug(singleVideo)}`} className="more-videos-container__title">{singleVideo.title}</Link>
                <p className="more-videos-container__ch-name">{singleVideo.subtitle}</p>
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
