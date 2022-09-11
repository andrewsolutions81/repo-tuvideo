/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-return */
/* eslint-disable no-useless-escape */
/* eslint-disable react/no-array-index-key */
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
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const getFormError = (formData) => {
    const error = [];
    const { email, password } = formData;
    const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

    if (!email.length) {
      error.push({
        key: 'email', message: 'email cannot be empty',
      });
    } else if (!isEmailValid(email)) {
      error.push({
        key: 'email', message: 'email is not valid',
      });
    }

    if (password.length < 5) {
      error.push({
        key: 'password', message: 'password is too short',
      });
    }

    return error;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const formErrors = getFormError(form).reduce((actual, error) => {
      actual[error.key] = error.message;
      return actual;
    }, {});
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }
    dispatch(register(form));
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control register-form"
                name="email"
                onChange={onHandleChange}
                required
              />
              {
                  errors?.email && (
                    <div>
                      {errors.email}
                    </div>
                  )
                }
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control register-form"
                name="password"
                onChange={onHandleChange}
                required
              />
              {
                  errors?.password && (
                    <div>
                      {errors.password}
                    </div>
                  )
                }
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
        </form>
        <p className="back-to-login">
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
