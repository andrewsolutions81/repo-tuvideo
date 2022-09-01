/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../actions/auth';
import './styles.css';

function Register() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = form;
    setLoading(true);
    dispatch(register(username, email, password));
    setTimeout(() => {
      navigate('/verify');
    }, 1500);
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <form onSubmit={handleRegister}>
          <div>
            <div className="form-group">
              <label htmlFor="username">
                Username
              </label>
              <input
                type="text"
                className="form-control register-form"
                name="username"
                onChange={onHandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control register-form"
                name="email"
                onChange={onHandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control register-form"
                name="password"
                onChange={onHandleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                <span className="spinner-border spinner-border-sm" />
                )}
                <span className="loginRegisterButton">Register</span>
              </button>
            </div>
          </div>
          <input type="checkbox" name="remember" id="remember" />
        </form>
        <p>
          Do you have an account?
          <Link to="/login" className="card-container-url">
            <p>
              Log in
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
