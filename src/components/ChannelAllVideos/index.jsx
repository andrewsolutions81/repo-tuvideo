/* eslint-disable react/no-array-index-key */
import './styles.scss';
import VideoItem from '../VideoItem';
import { useChannel } from '../../channelContext';

function ChannelAllVideos() {
  const { videos } = useChannel();
  return (
    <div className="allVideos-container">
      {videos.map((video, index) => <VideoItem key={index} video={video} />)}
    </div>
  );
}

export default ChannelAllVideos;
