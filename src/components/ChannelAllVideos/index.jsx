import './styles.scss';
import VideoItem from '../VideoItem';
import { useChannel } from '../../channelContext';

function ChannelAllVideos() {
  const { videos } = useChannel();
  return (
    <div className="allVideos-container">
      {videos.map((video) => <VideoItem video={video} />)}
    </div>
  );
}

export default ChannelAllVideos;
