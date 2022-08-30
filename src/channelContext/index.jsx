/* eslint-disable import/prefer-default-export */
import {
  createContext, useState, useEffect, useMemo, useContext,
} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const channelContext = createContext();

export function ChannelProvider(props) {
  const userLogged = useSelector((state) => state.auth.user.profile);
  const [user, setUser] = useState();
  const [videos, setVideos] = useState([]);

  const [modEdit, setModEdit] = useState(false);
  const [style, setStyle] = useState({ border: '' });

  // Temp data
  const [tempBanner, setTempBanner] = useState('');
  const [tempLogo, setTempLogo] = useState('');
  const [tempUsername, setTempUsername] = useState('');
  //

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
    formData.append('username', tempUsername);
    formData.append('logo', tempLogo);
    formData.append('banner', tempBanner);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios({
        method: 'POST',
        url: `http://localhost:8080/api/users/${id}`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
    setModEdit(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        // eslint-disable-next-line no-underscore-dangle
        const result = await fetch(`http://localhost:8080/api/users/${userLogged._id}`);
        const resultJson = await result.json();
        setUser(resultJson);
        setTempLogo(resultJson.logo);
        setTempBanner(resultJson.banner);
        setTempUsername(resultJson.username);
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
    tempBanner,
    setTempBanner,
    tempUsername,
    setTempUsername,
    tempLogo,
    setTempLogo,
    handleEditChannel,
    updateUser,
  }), [id, user, modEdit, tempBanner, tempLogo, tempUsername, videos]);

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
