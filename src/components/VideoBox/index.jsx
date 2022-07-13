import  "../VideoBox/styles.scss"

function VideoBox(){
  return(
    <div>
      <div className="video-container">
        <div className="video-container__video"></div>
    </div>
    <div className="video-options">
        <h1 className="video-options__title">This is the Video Title</h1>
        <div className="video-options__container">
            <p className="video-options__views">3.000.000 views</p>
            <div className="video-options__buttons">
                <button type="button" className="video-options__like-btn"><img src="/media/icons/Mylikes.png" alt="like"/>60.000</button>
                <button type="button" className="video-options__dislike-btn"><img src="/media/icons/dont-like.png" alt="dislike"/>Don't like it</button>
                <button type="button" className="video-options__share-btn"><img src="/media/icons/share.png" alt="share"/>Share</button>
            </div>
        </div>
    </div>
    <div className="ch-info-container">
        <div className="ch-info-container__avatar"><img src="/media/images/ch-avatar.jpeg" alt="avatar"/></div>
        <div className="ch-info-container__ch-info">
            <h2 className="ch-info-container__name">Channel name</h2>
            <p className="ch-info-container__subs">45.567 subscribers</p>
            <p className="ch-info-container__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi animi nobis facilis soluta a repellat ducimus et minima! Illum, recusandae? Nam, ipsum? Enim, minima excepturi aspernatur dolor vel commodi.</p>
        </div>
        <div className="ch-info-container__subs-btn">
            <button type="button">Subscribe</button>
        </div>
    </div>
    </div>
  )
}
export default VideoBox;
