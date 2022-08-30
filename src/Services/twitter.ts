import axios from 'axios';
import url from './url';

const getTweets = async () => {
  const res = await axios.get(`${url}/twitter`);
  return res;
};

const addTweetToFavourites = async (id: string) => {
  const res = await axios.put(`${url}/addTweetAsFavourite`, {
    id,
  });
  return res;
};

const getMyFavourites = async () => {
  const res = await axios.get(`${url}/getMyTwitterFavourites`);
  return res;
};

const TwitterService = {
  getTweets,
  addTweetToFavourites,
  getMyFavourites,
};

export default TwitterService;
