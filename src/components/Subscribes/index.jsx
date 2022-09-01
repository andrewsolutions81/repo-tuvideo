/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import './styles.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Subscribes() {
  // eslint-disable-next-line no-underscore-dangle
  const { _id } = useSelector((state) => state?.auth?.user?.profile);
  // eslint-disable-next-line no-unused-vars
  const [channels, setChannels] = useState();

  useEffect(() => {
    const axiosData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/${_id}`);
      setChannels(data.subscribedChannels);
    };

    axiosData();
  }, []);
  return (
    <div className="subscribes-container">
      {
        channels?.map((channel, index) => <ChannelItem key={index} channel={channel} />)
      }
    </div>
  );
}

export default Subscribes;

function ChannelItem({ channel }) {
  return (
    <div className="channelItem-container">
      {
        channel?.logo ? <img className="logo-item" src={channel.logo} alt="logo" />
          : <div className="without-logo"><div className="letter-logo">{channel.username[0]}</div></div>
      }
      <div className="statisctics-item">
        <p className="username-item">{channel.username}</p>
        <p className="user-countsubs">{`${channel.video.length} videos`}</p>
      </div>
      <button type="button" className="button-gray">SUBSCRIBED</button>
    </div>
  );
}
