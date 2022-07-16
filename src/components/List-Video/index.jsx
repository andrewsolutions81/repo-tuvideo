import "./styles.css"
import VideoItem from "../Video-Item";

function VideoCarousel(){
    return(
        <div className="container-list">
            <div className="list-details">
                <div className="list-name">
                    Videos subidos
                </div>
                <list className="button-play">
                    <div className="play-icon">
                    </div>
                    <div>
                        REPRODUCIR TODO
                    </div>
                </list>
            </div>
            <div className="list-videos">
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </div>
        </div>
    )
}
export default VideoCarousel;
