import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoBox from '../components/VideoBox';
import { getVideos } from '../services/videos';

function SingleVideo() {
  const { id } = useParams();
  const [videos, setVideos] = useState(getVideos());

  return (
    <div>
      <VideoBox videos={videos} setVideos={setVideos} id={id} />
    </div>
  );
}

export default SingleVideo;
