/* eslint-disable camelcase */
import axios from 'axios';
import url from './url';

const register = async (first_name: string, last_name: string, email: string, password: string) => {
  const res = await axios.post(`${url}/users/`, {
    first_name, last_name, email, password,
  });
  return res;
};

const UserService = {
  register,
};

export default UserService;
