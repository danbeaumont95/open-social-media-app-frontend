/* eslint-disable consistent-return */
import React from 'react';
import moment from 'moment';
import '../Styles/Tweet.css';
import {
  FaHeart,
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { FavouritedTweet } from '../Interfaces/interfaces';
import TwitterService from '../Services/twitter';

interface TweetProps {
  user: string;
  tweet: string;
  userImage: string;
  createdAt: string;
  id: string;
}

interface Props {
tweet: TweetProps;
likeTweet: any;
favouritedTweets: FavouritedTweet[];
likedTweets: string[]
}

const Tweet: React.FC<Props> = ({
  tweet, likeTweet, favouritedTweets, likedTweets,
}: Props) => {
  const favouriteError = (msg: string) => toast(msg, {
    position: toast.POSITION.TOP_CENTER,
  });

  const handleAddTweetToFavourites = () => {
    TwitterService.addTweetToFavourites(tweet.id)
      .then((res) => {
        if (res.data.Success) {
          likeTweet(tweet.id);
        }
        if (res.data.Error) {
          const strip = res.data.Error.indexOf('-');
          const errorMessage = res.data.Error.slice(strip + 2);
          return favouriteError(errorMessage);
        }
      });
  };

  return (

    <div className="tweetContainer" style={{ position: 'relative' }}>
      <ToastContainer />
      <img src={tweet.userImage} alt="profile pic" className="tweetProfilePic" />
      <div style={{ overflow: 'auto' }}>

        <h5 style={{
          float: 'left', paddingLeft: '10px', marginTop: '15px', marginBottom: 0,
        }}
        >
          @
          {tweet.user}
        </h5>
        <h5 style={tweet.tweet.length > 80 ? {
          display: 'inline-block', textAlign: 'start', fontWeight: 400, marginTop: '5px', paddingLeft: '10px', marginBottom: '0px',
        } : {
          paddingLeft: '10px', float: 'left', position: 'absolute', marginTop: '35px', fontWeight: 400,
        }}
        >
          {tweet.tweet}
        </h5>
      </div>
      <h5 style={tweet.tweet.length > 80 ? { marginLeft: '15px', float: 'left' } : { position: 'absolute', marginTop: '50px', marginLeft: '15px' }}>{moment(tweet.createdAt).format('MMM Do YYYY')}</h5>
      <div style={{
        position: 'absolute', bottom: '0px', marginTop: '10px', paddingLeft: '15px',
      }}
      >

        <FaHeart
          className="likeIcon"
          style={
            favouritedTweets.map((el) => el.id)
              .includes(tweet.id) || likedTweets.includes(tweet.id) ? {
                color: 'red',
              } : undefined
}
          onClick={handleAddTweetToFavourites}
        />
      </div>
    </div>
  );
};

export default Tweet;
