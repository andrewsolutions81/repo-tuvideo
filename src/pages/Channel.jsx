import { useEffect, useState } from 'react';
import ChannelManager from '../components/ChannelManager';
import ListVideo from '../components/ListVideo';
import VideoIntroduccion from '../components/VideoIntroduccion';
import { getVideo } from '../services/videos';

function Channel() {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const result = getVideo(1);
    setVideo(result);
  });
  return (
    <div>
      <ChannelManager>
        {
          video && <VideoIntroduccion video={video} />
        }
        <ListVideo />
        <ListVideo />
      </ChannelManager>
    </div>
  );
}

export default Channel;
