/* eslint-disable react/no-array-index-key */
import { useChannel } from '../channelContext';
import ChannelManager from '../components/ChannelManager';
import VideoItem from '../components/VideoItem';

function ChannelVideos() {
  const { videos } = useChannel();
  return (
    <div>
      <ChannelManager>
        {
          videos?.map((videoID, index) => <VideoItem key={index} videoID={videoID} />)
        }
      </ChannelManager>
    </div>
  );
}

export default ChannelVideos;
