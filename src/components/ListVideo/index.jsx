import "./styles.scss"
import VideoItem from "../VideoItem";
import { useEffect, useState } from "react";
import { getVideos } from "../../services/videos";

const VideoCarousel =()=>{
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        const result = getVideos();
        setVideos(result);
        console.log(result);
    },[])

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
            <div className="arrow">
                
            </div>
            <div>
                <div className="list-videos">
                {
                    videos.map((video)=>{
                        return <VideoItem key={video.id} video = {video}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default VideoCarousel;
