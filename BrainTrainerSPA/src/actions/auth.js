import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const login = token => ({
  type: 'LOGIN',
  token
});

export const startRegister = (password, username) => dispatch => {
  return axios
    .post(`${baseUrl}/api/auth/register`, {
      username,
      password
    })
    .then(data => dispatch(login(data.data.token)));
};

export const startLogin = (password, username) => dispatch => {
  return axios
    .post(`${baseUrl}/api/auth/login`, {
      username,
      password
    })
    .then(data => dispatch(login(data.data.token)));
};
