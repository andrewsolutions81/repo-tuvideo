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
  const [username, setUsername] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');

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
  const updateUser = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('logo', logo);
    formData.append('banner', banner);
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
        const result = await fetch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/users/${userLogged._id}`);
        const resultJson = await result.json();
        setUser(resultJson);
        setVideos(resultJson.video);
      }
    };

    fetchData();
  }, [id, window.location.href]);

  const value = useMemo(() => ({
    id,
    setId,
    user,
    videos,
    modEdit,
    setModEdit,
    style,
    username,
    setUsername,
    logo,
    setLogo,
    banner,
    setBanner,
    handleEditChannel,
    updateUser,
  }), [id, user, modEdit, videos, username, banner, logo]);

  return <channelContext.Provider value={value} {...props} />;
}

export function useChannel() {
  const context = useContext(channelContext);
  if (!context) {
    throw new Error('El channel debe estar dentro del provider');
  }
  return context;
}
