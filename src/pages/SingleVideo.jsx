/* eslint-disable no-empty */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import VideoBox from '../components/VideoBox';
import { fetchSuccess } from '../services/videoSlice';

function SingleVideo() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/videos/${id}`);

        dispatch(fetchSuccess(videoRes.data));
      } catch (err) { }
    };
    fetchData();
  }, [dispatch, id]);

  return (
    <div className="container-videito">
      <VideoBox id={id} />
    </div>
  );
}

export default SingleVideo;
