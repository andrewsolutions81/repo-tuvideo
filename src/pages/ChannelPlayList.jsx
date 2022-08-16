import ChannelManager from '../components/ChannelManager';
import PlayListModal from '../components/PlayListModal';

function ChannelPlayList() {
  return (
    <div>
      <ChannelManager>
        <PlayListModal />
      </ChannelManager>
    </div>
  );
}

export default ChannelPlayList;
