/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Modal from '@mui/material/Modal';
import './styles.css';
import { useState, useRef } from 'react';
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UploadVideo from '../UploadVideo';

import Search from '../Search';
import VoiceRecognition from '../VoiceRecognition';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../../actions/auth';

function MainHeader() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  const profile = useSelector((state) => state.auth?.user?.profile);
  const [open, setOpen] = useState();
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropdownToggles = () => {
    setDropdown(!dropdown);
  };

  const handleMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');
    setOpen(sidebar.classList.toggle('sidebar-open'));
    setOpen(body.classList.toggle('sidebar-open--main'));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="header__container">
      <div className="header__logo">
        <div className="header__logo__burger">
          <img src="/media/icons/Burger.png" alt="Menu" onClick={handleMenu} />
        </div>
        <div className="header__logo__logo">
          <Link to="/"><img src="/media/icons/LogoYoutube.png" alt="Menu" /></Link>
        </div>
      </div>
      <div className="header__search-bar">
        <Search />
        <VoiceRecognition />
      </div>
      <div className="header__user">
        {
      profile && (
        <div className="header__user__apps">
          <button type="button" onClick={handleOpen}><img src="/media/icons/Addvideo.png" alt="Apps" /></button>
        </div>
      )
    }
        <div className="header__user__sign-in">
          <div className="header__user__sign-in__icon">
            <img src="/media/icons/User.png" alt="Sign In" />
          </div>

          <UploadVideo setOpenModal={setOpenModal} openModal={openModal} />

          {
            profile
              ? (
                <div className="header__user__sign-in__text">
                  <Dropdown isOpen={dropdown} toggle={dropdownToggles}>
                    <DropdownToggle className="header__user__sign-in__text--toggle">
                      <p className="header__user__sign-in__text--center">{profile.username}</p>
                    </DropdownToggle>
                    <DropdownMenu>
                      <div>
                        <DropdownItem className="dropdown-items"><Link to="/login">Mi canal</Link></DropdownItem>
                        <DropdownItem className="dropdown-items">
                          <div className="form-group">
                            <button onClick={handleLogout} type="button" className="btn-primary-logout">
                              <span>Logout</span>
                            </button>
                          </div>
                        </DropdownItem>
                      </div>
                    </DropdownMenu>
                  </Dropdown>

                </div>
              )
              : (
                <div className="header__user__sign-in__text">
                  <Link to="/login"><p className="header__user__sign-in__text--center">Sign In</p></Link>
                </div>
              )
          }
        </div>
      </div>

      <div className="sidebar">
        <div className="header__logo--active">
          <div className="header__logo__burger">
            <img src="/media/icons/Burger.png" alt="Menu" onClick={handleMenu} />
          </div>
          <div className="header__logo__logo">
            <Link to="/"><img src="/media/icons/LogoYoutube.png" alt="Menu" /></Link>
          </div>
        </div>
        <div className="main-sidebar">
          <div className="main-sidebar__categories">
            <ul>
              <Link to="/" className="main-sidebar__category">
                <img src="/media/icons/Home-icon.png" alt="Home-icon" />
                {' '}
                Home
              </Link>
              <Link to="/channel/630a7d0c4c8dc798daf3d9c4/featured" className="main-sidebar__category">
                <img src="/media/icons/trending-icon.png" alt="Trending-icon" />
                {' '}
                Trending
              </Link>
              <Link to="/singlevideo" className="main-sidebar__category">
                <img src="/media/icons/Compass.png" alt="Compass-explore-icon" />
                {' '}
                Explore
              </Link>
              <Link to="/upload" className="main-sidebar__category">
                <img src="/media/icons/upload.png" alt="Subcriptions-icon" />
                {' '}
                Subscriptions
              </Link>
            </ul>
          </div>
          <hr />
          <div className="main-sidebar__categories">
            <ul>
              <Link to="/" className="main-sidebar__category">
                <img src="/media/icons/Library.png" alt="Library-icon" />
                {' '}
                Library
              </Link>
              <Link to="/" className="main-sidebar__category">
                <img src="/media/icons/History.png" alt="History-icon" />
                {' '}
                History
              </Link>
              <Link to="/" className="main-sidebar__category">
                <img src="/media/icons/Yourvideos.png" alt="Yourvideos-icon" />
                {' '}
                Your Videos
              </Link>
              <Link to="/" className="main-sidebar__category">
                <img src="/media/icons/Watchlater.png" alt="Watchlater-icon" />
                {' '}
                Watch Later
              </Link>
              <Link to="/" className="main-sidebar__category">
                <img src="/media/icons/Mylikes.png" alt="Watchlater-icon" />
                {' '}
                Liked Videos
              </Link>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
