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

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await fetch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/${id}`);
        const resultJson = await result.json();
        setUser(resultJson);
        setVideos(resultJson.video);
      }
    };

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
  }), [id, user, modEdit, videos]);

  return <channelContext.Provider value={value} {...props} />;
}

export function useChannel() {
  const context = useContext(channelContext);
  if (!context) {
    throw new Error('El channel debe estar dentro del provider');
  }
  return context;
}
