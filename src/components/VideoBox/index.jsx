import MoreVideos from "../MoreVideos";
import "../VideoBox/styles.scss";

function VideoBox(props){
  
  const { videos, id} = props;
  return(
    <div>
      { 
      videos.map((video) => (video.id + '-' + video.title.toLowerCase().replaceAll(' ', '-') === id ?
        <div key={video.id}>
        <video className="video-box" width="100%" poster={video.thumb} controls>
          <source src={video.sources} type="video/mp4" />
        </video>
        <div className="video-options">
          <h1 className="video-options__title">{video.title}</h1>
          <div className="video-options__container">
            <p className="video-options__views">3.000.000 views</p>
            <div className="video-options__buttons">
              <button type="button" className="video-options__like-btn">
                <img src="/media/icons/Mylikes.png" alt="like" />
                60.000
              </button>
              <button type="button" className="video-options__dislike-btn">
                <img src="/media/icons/dont-like.png" alt="dislike" />
                Don't like it
              </button>
              <button type="button" className="video-options__share-btn">
                <img src="/media/icons/share.png" alt="share" />
                Share
              </button>
            </div>
          </div>
        </div>
        {/* Channel info and video description */}
        <div className="ch-info-container">
          <div className="ch-info-container__avatar">
            <img src="/media/images/ch-avatar.jpeg" alt="avatar" />
          </div>
          <div className="ch-info-container__ch-info">
            <h2 className="ch-info-container__name">{video.subtitle}</h2>
            <p className="ch-info-container__subs">{`${new Intl.NumberFormat().format(Math.floor(Math.random() * 100000))} subscribers`}</p>
            <p className="ch-info-container__desc">{video.description}</p>
          </div>
          <div className="ch-info-container__subs-btn">
            <button type="button">Subscribe</button>
          </div>
        </div>
      <MoreVideos video={video} videos={videos}/>
        </div>       
      :null))
      }
    </div>
  )
}
export default VideoBox;
