import axios from 'axios';

const BACK_DEV_BASE_URL = 'http://localhost:3001/api/';
const register = (username, email, password) => axios.post(`${BACK_DEV_BASE_URL}auth/register`, {
  username,
  email,
  password,
});
const login = (email, password) => axios
  .post(`${BACK_DEV_BASE_URL}auth/login`, {
    email,
    password,
  })
  .then((response) => {
    if (response) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
const logout = () => {
  localStorage.removeItem('user');
};

export async function verify(token) {
  const response = await fetch(`${BACK_DEV_BASE_URL}auth/verify-account/${token}`);
  return response.json();
}

export default {
  register,
  login,
  logout,
};
