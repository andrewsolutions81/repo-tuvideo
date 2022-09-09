/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import './styles.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useChannel } from '../../channelContext';

function Subscribes() {
  const { _id } = useSelector((state) => state?.auth?.user?.profile);
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
  const { buttonSubscribe } = useChannel();
  return (
    <div className="channelItem-container">
      <img className="logo-item" src={channel.logo || 'https://res.cloudinary.com/royhuamanavila/image/upload/v1660888009/image832_ec9r7e.png'} alt="logo" />
      <div className="statisctics-item">
        <p className="username-item">{channel.username}</p>
        <p className="user-countsubs">{`${channel.video.length} videos`}</p>
      </div>
      {
        buttonSubscribe(channel._id)
      }
    </div>
  );
}
