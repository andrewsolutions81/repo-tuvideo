import './styles.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ChannelHeader from '../ChannelHeader';
import TabCarousel from '../TabCarousel';
import Banner from '../Banner';
import { useChannel } from '../../channelContext';

function ChannelManager({ children }) {
  const { setId } = useChannel();
  const { id } = useParams();

  useEffect(() => {
    setId(id);
  }, [id]);

  return (
    <div className="manager">
      <Banner />
      <ChannelHeader />
      <TabCarousel />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ChannelManager;
