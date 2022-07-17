import "./styles.css";

function Header() {
    return (
    <div ClassName="header__container">
      <div ClassName="header__logo">
          <div ClassName="header__logo__burger">
              <img src="/media/icons/Burger.png" alt="Menu" />
          </div>
          <div ClassName="header__logo__logo">
              <img src="/media/icons/LogoYoutube.png" alt="Menu" />
          </div>
      </div>
      <div ClassName="header__search-bar">
          <form action="">
              <input type="text" placeholder="Search.." />
              <div ClassName="header__search-bar__icon">
                  <img src="/media/icons/Search.png" alt="Busca" />
              </div>
          </form>
          <div ClassName="header__search-bar__mic">
              <img src="/media/icons/Mic.png" alt="Voz" />
          </div>
      </div>
      <div ClassName="header__user">
          <div ClassName="header__user__apps">
              <img src="/media/icons/Apps.png" alt="Apps" />
          </div>
          <div ClassName="header__user__settings">
              <img src="/media/icons/Options.png" alt="Settings" />
          </div>
          <div ClassName="header__user__sign-in">
              <div ClassName="header__user__sign-in__icon">
                  <img src="/media/icons/User.png" alt="Sign In" />
              </div>
              <div ClassName="header__user__sign-in__text">
                  <p ClassName="header__user__sign-in__text--center">Sign In</p>
              </div>
          </div>
      </div>
    </div>        
    )
}

export default Header;