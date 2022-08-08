import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoBox from '../components/VideoBox';
import { getVideos } from '../services/videos';

function SingleVideo() {
  const { id } = useParams();
  const [videos, setVideos] = useState(getVideos());
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`https://tuvideo-backend.herokuapp.com/api/videos/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setVideo(res);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <VideoBox videos={videos} setVideos={setVideos} id={id} video={video} />
    </div>
  );
}

export default SingleVideo;
