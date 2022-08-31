import { useParams } from 'react-router-dom';
import VideoBox from '../components/VideoBox';
import useFetch from '../hooks/useFetch';

function SingleVideo() {
  const { id } = useParams();

  const video = useFetch('https://tuvideo-backend.herokuapp.com/api/videos/', id);

  return (
    <div className="container-videito">
      <VideoBox id={id} video={video} />
    </div>
  );
}

export default SingleVideo;
