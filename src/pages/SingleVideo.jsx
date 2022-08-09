import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoBox from '../components/VideoBox';

function SingleVideo() {
  const { id } = useParams();
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
  }, [id]);

  return (
    <div>
      <VideoBox id={id} video={video} />
    </div>
  );
}

export default SingleVideo;
