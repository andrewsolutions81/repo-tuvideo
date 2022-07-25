import MoreVideos from "../MoreVideos"
import {useEffect, useState} from 'react'
import "../VideoBox/styles.scss"

function VideoBox(props){
  
  const [likes, setLikes] = useState(0)
  const [isActive, setIsActive] =useState(true)
  const [saveLocal, setSaveLocal] =useState()
  const { videos, id} = props

  function createSlug(video){
    return video.id + '-' + video.title.toLowerCase().replaceAll(' ', '-')
  }


  function handleLike(){
      isActive ?
      setLikes(likes + 1):
      setLikes(likes - 1)
      setIsActive(!isActive)
    }
    function handleDislike(){
      setDislike(!dislike)
    }

  function handleDislike(){
    //setIsActive(!isActive)
    }

  useEffect(() => {
    videos.map(video => (createSlug(video) === id ? document.title = video.title : null ))
  }, [videos,id])
  
  return(
    <div>
      { 
      videos.map((video) => (createSlug(video) === id ?
        <div key={video.id}>
        <video className="video-box" width="100%" poster={video.thumb} controls>
          <source src={video.sources} type="video/mp4" />
        </video>
        <div className="video-options">
          <h1 className="video-options__title">{video.title}</h1>
          <div className="video-options__container">
            <p className="video-options__views">3.000.000 views</p>
            <div className="video-options__buttons">
              <button type="button" className="video-options__like-btn" onClick={handleLike}>
                <img src="/media/icons/like.png" alt="like" style={ isActive > true ? { opacity:'1'} : {opacity:'0.2'}}/>
             {likes}
              </button>
              <button type="button" className="video-options__dislike-btn" onClick={handleDislike}>
                <img src="/media/icons/dislike.png" alt="dislike"/>
                Don't like it
              </button>
              <button type="button" className="video-options__share-btn">
                <img src="/media/icons/forward.png" alt="share" />
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
        <MoreVideos video={video} videos={videos} createSlug={createSlug}/>
        </div>       
      :null))
      }
    </div>
  )
}
export default VideoBox

