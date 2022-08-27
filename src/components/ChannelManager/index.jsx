import './styles.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useChannel } from '../../channelContext';

function ChannelManager({ children }) {
  const { id } = useParams();
  const {
    setId,
  } = useChannel();
  useEffect(() => {
    setId(id);
  }, [id]);
  return (
    <div className="manager">
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ChannelManager;
