import './styles.scss';
import ChannelHeader from '../ChannelHeader';
import TabCarousel from '../TabCarousel';
import Banner from '../Banner';

import { AppProvider } from '../../store';

function ChannelManager({ children }) {
  return (
    <AppProvider>
      <div className="manager">
        <Banner />
        <ChannelHeader />
        <TabCarousel />
        <div className="content">
          {children}
        </div>
      </div>
    </AppProvider>
  );
}

export default ChannelManager;
