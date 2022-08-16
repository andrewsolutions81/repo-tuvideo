/* eslint-disable import/prefer-default-export */
import {
  createContext, useState, useEffect, useMemo, useContext,
} from 'react';
import { getVideos } from '../services/videos';

const channelContext = createContext();

export function ChannelProvider(props) {
  const [channel, setChannel] = useState();
  const [videos, setVideos] = useState([]);
  const [modEdit, setModEdit] = useState(false);
  const [style, setStyle] = useState({ border: '' });
  const [id, setId] = useState();
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
    const fetchData = async () => {
      if (id) {
        const result = await fetch(`https://tuvideo-backend.herokuapp.com/api/channel/${id}`);
        const resultJson = await result.json();
        setChannel(resultJson);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const result = getVideos();
    setVideos(result);
  }, []);
  const value = useMemo(() => ({
    id,
    setId,
    channel,
    videos,
    modEdit,
    style,
    handleEditChannel,
  }), [id, channel, modEdit]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <channelContext.Provider value={value} {...props} />;
}

export function useChannel() {
  const context = useContext(channelContext);
  if (!context) {
    throw new Error('El channel debe estar dentro del provider');
  }
  return context;
}
