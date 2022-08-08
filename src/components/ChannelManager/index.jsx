import './styles.scss';
import { useState, useEffect } from 'react';
import ChannelHeader from '../ChannelHeader';
import TabCarousel from '../TabCarousel';
import Banner from '../Banner';

import { getChannel } from '../../services/channels';

function ChannelManager({ children }) {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const result = getChannel(1);
    setChannel(result);
  }, []);

  return (
    <div className="manager">
      {
        channel ? <Banner channel={channel} /> : <p>Error</p>
      }
      {
        channel ? <ChannelHeader channel={channel} /> : <p>Error</p>
      }
      <TabCarousel />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ChannelManager;
