/* eslint-disable camelcase */
import axios from 'axios';
import url from './url';

const register = async (first_name: string, last_name: string, email: string, password: string) => {
  const res = await axios.post(`${url}/users/`, {
    first_name, last_name, email, password,
  });
  return res;
};

const login = async (email: string, password: string) => {
  const res = await axios.post(`${url}/token/`, {
    username: email,
    password,
  });
  return res;
};

const updatePassword = async (id: string, old_password: string, new_password: string) => {
  const res = await axios.post(`${url}/users/${id}/update_password/`, {
    old_password,
    new_password,
  });
  return res;
};

const UserService = {
  register,
  login,
  updatePassword,
};

export default UserService;
