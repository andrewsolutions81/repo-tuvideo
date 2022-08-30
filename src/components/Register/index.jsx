/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { isEmail } from 'validator';
import { Link } from 'react-router-dom';
import { register } from '../../actions/auth';

/* const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
}; */
function Register() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = form;
    dispatch(register(username, email, password));
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
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={onHandleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={onHandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={onHandleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
          </div>
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
