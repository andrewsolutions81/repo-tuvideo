/* eslint-disable */
import {
  createContext, useState, useEffect, useMemo, useContext,
} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const channelContext = createContext();

export function ChannelProvider(props) {
  const userLogged = useSelector((state) => state.auth?.user?.profile);
  const [user, setUser] = useState();
  const [videos, setVideos] = useState([]);
  const [modEdit, setModEdit] = useState(false);
  const [id, setId] = useState();
  const [channelsSubs, setChannelSubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (userLogged) {
        const result = await axios.get(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/${userLogged._id}`);
        const data = await result.data;
        const subs = data?.subscribedChannels?.map(user => user._id)
        if (subs) setChannelSubs(subs)
      }
    }
    fetchData();
  }, [])


  const updateUser = async (formData) => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/${id}`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setModEdit(false);
    }
  };

  async function subscribeHandler(userID) {
    if (!userLogged) {

    } else {
      if (!channelsSubs.includes(userID)) {
        const axiosData = await axios.put(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/addSubscribe/${userLogged._id}`, { userToSubscribe: userID });
        setChannelSubs(channelsSubs.concat(userID));
      }
    }
  };

  const buttonSubscribe = (id) => {
    return channelsSubs?.includes(id) ? (
      <button type='button' className='button-gray' >SUBSCRIBED</button>
    ) : (
      <button type='button' className='button-purple' onClick={() => subscribeHandler(id)}>SUBSCRIBE</button>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await fetch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/${id}`);
        const resultJson = await result.json();
        setUser(resultJson);
        setVideos(resultJson.video);
      }
    };
    setModEdit(false);
    fetchData();
  }, [id]);

  const value = useMemo(() => ({
    id,
    setId,
    user,
    videos,
    modEdit,
    setModEdit,
    updateUser,
    buttonSubscribe,
  }), [id, user, modEdit, videos, channelsSubs]);

  return <channelContext.Provider value={value} {...props} />;
}

export function useChannel() {
  const context = useContext(channelContext);
  if (!context) {
    throw new Error('El channel debe estar dentro del provider');
  }
  return context;
}
