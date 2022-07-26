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

const updatePassword = async (
  id: string,
  old_password: string,
  new_password: string,
  token: string,
) => {
  const res = await axios.post(`${url}/users/${id}/update_password/`, {
    old_password,
    new_password,
  }, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
};

const getMe = async (token: string) => {
  const res = await axios.get(`${url}/user/getMe/`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
};

const updateDetails = async (
  id: string,
  email: string,
  name: string,
  token: string,
) => {
  const res = await axios.post(`${url}/users/${id}/update_details/`, {
    email,
    name,
  }, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
};

// const getTweets = async () => {
//   const res = await axios.get(`${url}/twitter`);
//   return res;
// };

// const addTweetToFavourites = async (id: string) => {
//   const res = await axios.put(`${url}/addTweetAsFavourite`, {
//     id,
//   });
//   return res;
// };

// const getMyFavourites = async () => {
//   const res = await axios.get(`${url}/getMyTwitterFavourites`);
//   return res;
// };
const UserService = {
  register,
  login,
  updatePassword,
  getMe,
  updateDetails,
  // getTweets,
  // addTweetToFavourites,
  // getMyFavourites,
};

export default UserService;
