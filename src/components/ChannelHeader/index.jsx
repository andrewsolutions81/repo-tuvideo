/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import './styles.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useChannel } from '../../channelContext';
import CreateChannelModal from '../CreateChannelModal';

function ChannelHeader() {
  const { id } = useParams();
  const {
    user, modEdit, setModEdit, updateUser, buttonSubscribe,
  } = useChannel();

  const [username, setUsername] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');

  const userLogged = useSelector((state) => state.auth?.user?.profile);
  const [open, setOpen] = useState(false);

  const avatar = () => {
    if (!logo) {
      if (!user?.logo) {
        return 'https://res.cloudinary.com/royhuamanavila/image/upload/v1660888009/image832_ec9r7e.png';
      }
      return user?.logo;
    }
    return URL.createObjectURL(logo);
  };

  const usernameInput = () => {
    if (!username) {
      return user?.username;
    }
    return username;
  };

  const getBanner = () => {
    if (!banner) {
      return user?.banner;
    }
    return URL.createObjectURL(banner);
  };

  return (
    <div className="channel-header">
      {
        (banner || user?.banner) && (
          <div>
            <div className="banner-visible-area" style={{ backgroundImage: `url(${getBanner()})` }}>
              <div className="banner-editor" />
              {
                modEdit && (
                  <div className="input-file">
                    <input
                      type="file"
                      className="input-upload-image"
                      onChange={(e) => {
                        setBanner(e.target.files[0]);
                      }}
                    />
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="camera-icon">
                      <g className="ge">
                        <path d="M12,10c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,10,12,10 M12,9c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,9,12,9L12,9z M14.59,5l1.71,1.71L16.59,7H17h4v12H3V7h4h0.41l0.29-0.29L9.41,5H14.59 M15,4H9L7,6H2v14h20V6h-5L15,4L15,4z" className="style-scope yt-icon" stroke="white" />
                      </g>
                    </svg>
                  </div>
                )
              }
            </div>
          </div>
        )
      }
      <div id="container" className="container-header">
        <div id="temp-logo" className="logo">
          <img className="logo-img" src={avatar()} alt="" />
          {
            modEdit && (
              <div className="input-file">
                <input
                  type="file"
                  className="input-upload-image"
                  onChange={(e) => {
                    setLogo(e.target.files[0]);
                  }}
                />
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="camera-icon">
                  <g className="ge">
                    <path d="M12,10c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,10,12,10 M12,9c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,9,12,9L12,9z M14.59,5l1.71,1.71L16.59,7H17h4v12H3V7h4h0.41l0.29-0.29L9.41,5H14.59 M15,4H9L7,6H2v14h20V6h-5L15,4L15,4z" className="style-scope yt-icon" stroke="white" />
                  </g>
                </svg>
              </div>
            )
          }
        </div>
        <div className="details">
          <div className="details-container">
            <div className="channel-description">
              <div className="channel-title">
                {
                  modEdit && user?.username ? (
                    <input
                      className="input-edit"
                      type="text"
                      placeholder={usernameInput()}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  ) : usernameInput()
                }
              </div>
              <div className="channel-stadistics">
                {`${user?.subscribers ? user.subscribers : 'No'} subscribers`}
              </div>
            </div>
            {
              modEdit ? (
                <div className="buttons-edit">
                  <button className="button-purple" type="button" onClick={() => setOpen(true)}>ADD ELEMENT</button>
                  <button
                    className="button-orange"
                    type="button"
                    onClick={() => {
                      const formData = new FormData();
                      if (username) formData.append('username', username);
                      if (logo) formData.append('logo', logo);
                      if (banner) formData.append('banner', banner);
                      updateUser(formData);
                    }}
                  >
                    SAVE CHANGES

                  </button>
                  <button className="button-red" type="button" onClick={() => { setModEdit(false); }}>CANCEL CHANGES</button>
                </div>
              ) : (
                <div>
                  {
                    (userLogged?._id === id) ? (
                      <button type="button" className="button-orange" onClick={() => setModEdit(true)}>CUSTOMIZE CHANNEL</button>
                    ) : (
                      buttonSubscribe(id)
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
        <CreateChannelModal open={open} setOpen={setOpen} banner={banner} setBanner={setBanner} />
      </div>
    </div>

  );
}

export default ChannelHeader;
