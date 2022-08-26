import React from 'react';
import moment from 'moment';
import '../Styles/Tweet.css';
import {
  FaHeart,
} from 'react-icons/fa';

interface TweetProps {
  user: string;
  tweet: string;
  userImage: string;
  createdAt: string;
}
interface Props {
tweet: TweetProps;
}

const Tweet: React.FC<Props> = ({ tweet }: Props) => {
  console.log(tweet, 'tweet');
  return (

    <div className="tweetContainer" style={{ position: 'relative' }}>
      <img src={tweet.userImage} alt="profile pic" className="tweetProfilePic" />
      <div style={{ overflow: 'auto' }}>

        <h5 style={{
          float: 'left', paddingLeft: '10px', marginTop: '15px', marginBottom: 0,
        }}
        >
          @
          {tweet.user}
        </h5>
        <h5 style={tweet.tweet.length > 70 ? {
          display: 'inline-block', textAlign: 'start', fontWeight: 400, marginTop: '5px', paddingLeft: '10px', marginBottom: '0px',
        } : {
          paddingLeft: '10px', float: 'left', position: 'absolute', marginTop: '35px', fontWeight: 400,
        }}
        >
          {tweet.tweet}
        </h5>
      </div>
      <h5 style={tweet.tweet.length > 70 ? { marginLeft: '15px', float: 'left' } : { position: 'absolute', marginTop: '50px', marginLeft: '15px' }}>{moment(tweet.createdAt).format('MMM Do YYYY')}</h5>
      <div style={{
        position: 'absolute', bottom: '0px', marginTop: '10px', paddingLeft: '15px',
      }}
      >

        <FaHeart
          className="likeIcon"
          style={{

          }}
        />
      </div>
    </div>
  );
};

export default Tweet;
