import './styles.scss';

function LoginCard() {
  return (
    <div className="container-card">
      <div className="card">
        <div className="tabs-container">
          <div className="tabs">
            <div className="tab-login">
              <p>INGRESAR</p>
            </div>
            <div className="tab-register">
              <p>REGISTRARSE</p>
            </div>
          </div>
          <div className="formData">
            <form className="formData" action="submit">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="........." />
            </form>
          </div>
          <button type="button" className="button-login">INGRESAR</button>
          <div className="forgot-password">
            <a href="/">Olvidaste la contraseña?</a>
          </div>

        </div>
      </div>
      <div className="image-login">
        <img src="./media/images/imageLogin.png" alt="" />
      </div>
    </div>
  );
}
export default LoginCard;
