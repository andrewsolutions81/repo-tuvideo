import ChannelManager from '../components/ChannelManager';
import { useChannel } from '../channelContext';

function ChannelMoreInfo() {
  const { channel } = useChannel();
  return (
    <div>
      <ChannelManager>
        <h2>{channel.description}</h2>
      </ChannelManager>
    </div>
  );
}

export default ChannelMoreInfo;
