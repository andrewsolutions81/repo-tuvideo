import ChannelManager from '../components/ChannelManager';
import { useChannel } from '../channelContext';

function ChannelMoreInfo() {
  const { channel } = useChannel();
  return (
    <div>
      <ChannelManager>
        <h1>{channel.description}</h1>
      </ChannelManager>
    </div>
  );
}

export default ChannelMoreInfo;
