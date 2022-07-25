import "./styles.css";
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [open, setOpen] = useState()

  const handleMenu = (e) => {
    const sidebar = document.querySelector(".sidebar")
    const body = document.querySelector("body")
    setOpen(sidebar.classList.toggle('sidebar-open'))
    setOpen(body.classList.toggle('sidebar-open--main'))
  }
      return (
    <div className="header__container">
      <div className="header__logo">
          <div className="header__logo__burger">
          <img src="/media/icons/Burger.png" alt="Menu" onClick={handleMenu}/>
          </div>
          <div className="header__logo__logo">
          <Link to="/"><img src="/media/icons/LogoYoutube.png" alt="Menu" /></Link>
          </div>
      </div>
      <div className="header__search-bar">
          <form action="">
              <input type="text" placeholder="Search.." />
              <div className="header__search-bar__icon">
                  <img src="/media/icons/Search.png" alt="Busca" />
              </div>
          </form>
          <div className="header__search-bar__mic">
              <img src="/media/icons/Mic.png" alt="Voz" />
          </div>
      </div>
      <div className="header__user">
          <div className="header__user__apps">
              <img src="/media/icons/Apps.png" alt="Apps" />
          </div>
          <div className="header__user__settings">
              <img src="/media/icons/Options.png" alt="Settings" />
          </div>
          <div className="header__user__sign-in">
              <div className="header__user__sign-in__icon">
                  <img src="/media/icons/User.png" alt="Sign In" />
              </div>
              <div className="header__user__sign-in__text">
              <Link to="/login-register"><p className="header__user__sign-in__text--center">Sign In</p></Link>
              </div>
          </div>
      </div>

      <div className="sidebar">
      <div className="header__logo--active">
          <div className="header__logo__burger">
          <img src="/media/icons/Burger.png" alt="Menu" onClick={handleMenu}/>
          </div>
          <div className="header__logo__logo">
              <img src="/media/icons/LogoYoutube.png" alt="Menu" />
          </div>
      </div>
        <div className="main-sidebar">
            <div className="main-sidebar__categories">
              <ul>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/Home-icon.png" alt="Home-icon"/> Home
                </Link>
                <Link to="/channel" className="main-sidebar__category">
                  <img src="/media/icons/Trending-icon.png" alt="Trending-icon"/> Trending
                </Link>
                <Link to="/singlevideo" className="main-sidebar__category">
                  <img src="/media/icons/Compass.png" alt="Compass-explore-icon"/> Explore
                </Link>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/Subscriptions.png" alt="Subcriptions-icon"/> Subscriptions
                </Link>
              </ul>
            </div>
            <hr />
            <div className="main-sidebar__categories">
              <ul>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/Library.png" alt="Library-icon"/> Library
                </Link>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/History.png" alt="History-icon"/> History
                </Link>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/Yourvideos.png" alt="Yourvideos-icon"/> Your Videos
                </Link>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/Watchlater.png" alt="Watchlater-icon"/> Watch Later
                </Link>
                <Link to="/" className="main-sidebar__category">
                  <img src="/media/icons/Mylikes.png" alt="Watchlater-icon"/> Liked Videos
                </Link>
              </ul>
            </div>
            <hr />
        </div>
    </div>
    </div>        
    )
}

export default Header;
