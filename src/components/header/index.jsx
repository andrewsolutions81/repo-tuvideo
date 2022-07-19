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
              <img src="/media/icons/LogoYoutube.png" alt="Menu" />
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
                  <p className="header__user__sign-in__text--center">Sign In</p>
              </div>
          </div>
      </div>

      <div className="sidebar">
        <div className="main-sidebar">
            <div className="main-sidebar__categories">
                <Link to='/' className="main-sidebar__category">
                    <img src="/media/icons/Home-icon.png" alt="Home-icon"/>
                    <p>Home</p>
                </Link>
                <Link to='/channel' className="main-sidebar__category">
                    <img src="/media/icons/Trending-icon.png" alt="Trending-icon"/>
                    <span>Trending</span>
                </Link>
                <div className="main-sidebar__category">
                    <img src="/media/icons/Compass.png" alt="Compass-explore-icon"/>
                    <span>Explore</span>
                </div>
                <div className="main-sidebar__category">
                    <img src="/media/icons/Subscriptions.png" alt="Subcriptions-icon"/>
                    <span>Subcriptions</span>
                </div>
            </div>
            <hr></hr>
            <div className="main-sidebar__sub-categories">
                <div className="main-sidebar__category">
                    <img src="/media/icons/Library.png" alt="Library-icon"/>
                    <span>Library</span>
                </div>
                <div className="main-sidebar__category">
                    <img src="/media/icons/History.png" alt="History-icon"/>
                    <span>History</span>
                </div>
                <div className="main-sidebar__category">
                    <img src="/media/icons/Yourvideos.png" alt="Yourvideos-icon"/>
                    <span>Your Videos</span>
                </div>
                <div className="main-sidebar__category">
                    <img src="/media/icons/Watchlater.png" alt="Watchlater-icon"/>
                    <span>Watch Later</span>
                </div>
                <div className="main-sidebar__category">
                    <img src="/media/icons/Mylikes.png" alt="Mylikes-icon"/>
                    <span>Liked Videos</span>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>
    </div>        
    )
}

export default Header;
