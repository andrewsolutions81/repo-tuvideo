import "../header/styles.css";

function Header() {
    return (
    <div className="header__container">
      <div className="header__logo">
          <div className="header__logo__burger">
              <img src="/media/icons/Burger.png" alt="Menu" />
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
    </div>        
    )
}

export default Header;