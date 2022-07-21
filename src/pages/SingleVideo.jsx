import { useState } from "react"
import VideoBox from "../components/VideoBox"
import { getVideos } from '../services/videos'
import {useParams} from 'react-router-dom'



function SingleVideo(){
  const {id} = useParams();
  const [videos, setVideos] = useState(getVideos())

  return(
    <div>
      <VideoBox videos={videos} setVideos={setVideos} id={id}/>
    </div>
  )
}

export default SingleVideo;
