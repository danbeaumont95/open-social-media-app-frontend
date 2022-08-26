/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import UserService from '../Services/user';
import Tweet from './Tweet';
import '../Styles/Home.css';

const Home = () => {
  // const [tweets, setTweets] = useState([]);
  const [tweets, setTweets] = useState([
    {
      user: 'KSI',
      tweet: '⚡️ “KSI Talks Weight Loss, Boxing and Exposing Jake Paul” by @MensHealthUK https://t.co/agHdM9RJck',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T15:25:58Z',
    },
    {
      user: 'KSI',
      tweet: 'MENS HEALTH COVER BABY \n@MensHealthUK https://t.co/7iPHI69acg',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T15:24:15Z',
    },
    {
      user: 'KSI',
      tweet: 'I’m ready. 2 fights in 1 night baby https://t.co/JIXP8IZqbV',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T13:21:50Z',
    },
    {
      user: 'KSI',
      tweet: 'Media workout today 😈',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T08:56:05Z',
    },
    {
      user: 'KSI',
      tweet: 'Think my troll went a bit far? 😅 https://t.co/MRSmKYnHQv',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T07:41:20Z',
    },
    {
      user: 'KSI',
      tweet: 'I’m gonna shock the world',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T21:25:22Z',
    },
    {
      user: 'KSI',
      tweet: 'My goal is to get him with a flip flap https://t.co/oyLto5NocN',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T18:16:37Z',
    },
    {
      user: 'KSI',
      tweet: 'https://t.co/lk8mkmmxiK',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T16:53:51Z',
    },
    {
      user: 'KSI',
      tweet: 'First time playing Not Over Yet live with @Tom_Grennan  at @wearefstvl was a big vibe. Full video is on YouTube now https://t.co/6lx0l1Q9B6',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T16:53:17Z',
    },
    {
      user: 'KSI',
      tweet: '🥹 https://t.co/psi26OB4xg',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T14:53:14Z',
    },
    {
      user: 'KSI',
      tweet: 'Don’t forget about my fight against Joe Weller. February 3rd 2018 https://t.co/MAelxog2ca',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T09:02:53Z',
    },
    {
      user: 'KSI',
      tweet: 'Just wanna make sure you’re gonna pay for the fight bro 👀@Realdevinhaney https://t.co/yqWex4GlB9',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T07:03:40Z',
    },
    {
      user: 'KSI',
      tweet: 'https://t.co/Pc9YSkNsqz',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-22T14:33:17Z',
    },
    {
      user: 'KSI',
      tweet: 'FIGHT WEEK!!!! https://t.co/477VbAaECs',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-22T12:38:20Z',
    },
    {
      user: 'KSI',
      tweet: 'IT’S FIGHT WEEK',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-22T07:30:54Z',
    },
    {
      user: 'bot_dans',
      tweet: 'Woi',
      userImage: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
      createdAt: '2022-08-21T17:20:41Z',
    },
    {
      user: 'bot_dans',
      tweet: 'Test tweet',
      userImage: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
      createdAt: '2022-08-21T17:19:18Z',
    },
    {
      user: 'KSI',
      tweet: 'Oh go away Man City',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-21T16:54:40Z',
    },
    {
      user: 'KSI',
      tweet: 'https://t.co/6f8nvNQtzP',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-21T15:14:28Z',
    },
    {
      user: 'KSI',
      tweet: 'Anyone manage to get some Sidecards?',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-21T15:14:18Z',
    },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');

  console.log('dan');
  // useEffect(() => {
  //   UserService.getTweets()
  //     .then((res) => {
  //       console.log(res, 'ress');
  //       if (res.data.tweets) {
  //         setTweets(res.data.tweets);
  //       } else {
  //         setErrorMessage(res.data);
  //       }
  //     });
  // }, []);

  console.log(tweets, 'tweets');
  return (
    <div>
      <NavBar />
      <h2>Home</h2>
      <div className="outerTweetContainer">

        {tweets.map((el) => (
          <Tweet tweet={el} />
        ))}
      </div>
    </div>
  );
};

export default Home;
