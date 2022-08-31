import axios from 'axios';

const register = (username, email, password) => axios.post(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/auth/register`, {
  username,
  email,
  password,
});
const login = (email, password) => axios
  .post(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/auth/login`, {
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
  const response = await fetch(`${process.env.REACT_APP_BACK_PROD_BASE_URL}/api/auth/verify-account/${token}`);
  return response.json();
}

export default {
  register,
  login,
  logout,
};
