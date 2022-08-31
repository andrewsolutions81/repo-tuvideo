import { useParams } from 'react-router-dom';
import VideoBox from '../components/VideoBox';
import useFetch from '../hooks/useFetch';

function SingleVideo() {
  const { id } = useParams();

  const video = useFetch(`${process.env.REACT_APP_BACK_DEV_BASE_URL}/api/videos`, id);

  return (
    <div className="container">
      <VideoBox id={id} video={video} />
    </div>
  );
}

export default SingleVideo;
