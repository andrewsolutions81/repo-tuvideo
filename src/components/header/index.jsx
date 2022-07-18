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
                    <i className="material-icons">home</i>
                </Link>
                <Link to='/channel' className="main-sidebar__category">
                    <i className="material-icons">local_fire_department</i>
                </Link>
                <div className="main-sidebar__category">
                    <i className="material-icons">home</i>
                    <span>Suscriptions</span>
                </div>
                <div className="main-sidebar__category">
                    <i className="material-icons">subscriptions</i>
                    <span>Subscriptions</span>
                </div>
            </div>
            <hr></hr>
            <div className="main-sidebar__sub-categories">
                <div className="main-sidebar__category">
                    <i className="material-icons">library_add_check</i>
                    <span>Library</span>
                </div>
                <div className="main-sidebar__category">
                    <i className="material-icons">history</i>
                    <span>History</span>
                </div>
                <div className="main-sidebar__category">
                    <i className="material-icons">play_arrow</i>
                    <span>Your Videos</span>
                </div>
                <div className="main-sidebar__category">
                    <i className="material-icons">watch_later</i>
                    <span>Watch Later</span>
                </div>
                <div className="main-sidebar__category">
                    <i className="material-icons">thumb_up</i>
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
