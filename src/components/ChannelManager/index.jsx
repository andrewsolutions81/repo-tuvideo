/* eslint-disable max-len */
import './styles.scss';
import { useState, useEffect } from 'react';
import ChannelHeader from '../ChannelHeader';
import TabCarousel from '../TabCarousel';
import Banner from '../Banner';

import { getChannel } from '../../services/channels';

function ChannelManager({ children }) {
  const [channel, setChannel] = useState(null);
  const [modEdit, setModEdit] = useState(false);
  const [style, setStyle] = useState({ border: '' });

  const handleEditChannel = () => {
    setModEdit((prevModEdit) => !prevModEdit);
    setModEdit((prevModEdit) => {
      if (prevModEdit) {
        setStyle({ border: '3px solid #14ad73' });
      } else {
        setStyle({ border: '' });
      }
      return prevModEdit;
    });
  };
  useEffect(() => {
    const result = getChannel(1);
    setChannel(result);
  }, []);

  return (
    <div className="manager">
      {
        channel && (
          <>
            <Banner channel={channel} modEdit={modEdit} style={style} />
            <ChannelHeader channel={channel} modEdit={modEdit} handleEditChannel={handleEditChannel} style={style} />
          </>
        )
      }
      <TabCarousel />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ChannelManager;
