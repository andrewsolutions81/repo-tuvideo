import './styles.scss'

function VideoIntroduccion(props){
    const {video} = props
    return (
        <div className="container">
            <div className="introduccion">
                <div className="video-container">
                    <video src={video.sources} controls></video>
                </div>
                <div className="video-details-container">
                    <div className="video-title">
                        <div className="title">
                            <a href="#">
                                {video.title}
                            </a>    
                        </div>
                        <div className="video-stadistics">
                            500,116 vistas - hace 2 días
                        </div>
                    </div>
                    <div className="video-description">
                        {video.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoIntroduccion;
