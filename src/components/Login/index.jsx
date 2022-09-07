import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import './styles.css';

function Login({ handleClose }) {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = form;
    setLoading(true);
    dispatch(login(email, password));
    // No se hace nada mas, porq el dispatch cambia todo en el reducer
    // entocnes en el componente se va a volver a renderizar
    // y tendra el estado de redux actulizado con isLoggedIn = true
  };

  if (isLoggedIn) {
    navigate('/');
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <button type="button" className="x-btn" onClick={handleClose}>X</button>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                onChange={onHandleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={onHandleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm" />
              )}
              <span className="loginRegisterButton">Login</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <input type="checkbox" name="remember" id="remember" />
        </form>
        <p>
          Don&apos;t have an account?
          <Link to="/register" className="card-container-url">
            <p>
              Register
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
