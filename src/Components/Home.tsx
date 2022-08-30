/* eslint-disable no-loss-of-precision */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import TwitterService from '../Services/twitter';
import Tweet from './Tweet';
import '../Styles/Home.css';
import { FavouritedTweet } from '../Interfaces/interfaces';

const Home = () => {
  // const [tweets, setTweets] = useState([]);
  const [tweets, setTweets] = useState([
    {
      user: 'KSI',
      tweet: 'TODAY IS THE DAY YOU SEE ME KO 2 PEOPLE IN 1 NIGHT https://t.co/Oldr6wd8wt',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-27T08:04:46Z',
      id: '1563437350968909826',
    },
    {
      user: 'KSI',
      tweet: 'Go tell your daddy I said this @TheSNEAKO',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T23:39:43Z',
      id: '1563310251327119363',
    },
    {
      user: 'KSI',
      tweet: 'Crying from outside of the club 😂😂. Jake Paul and you can get it soon. \n\nI WANT ALL THE SMOKE 😤 https://t.co/5ihyaSoh9Y',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T23:27:10Z',
      id: '1563307091527290881',
    },
    {
      user: 'KSI',
      tweet: '👏🏿👏🏿👏🏿👏🏿 https://t.co/PmLdMxr83t https://t.co/1dAn5aL3lk',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T17:53:57Z',
      id: '1563223235952807936',
    },
    {
      user: 'KSI',
      tweet: 'TOMORROW THE NIGHTMARE RETURNS. 2 FIGHTS IN ONE NIGHT. I NEED 2 KNOCKOUTS BABY. IM HUNGRY FOR THEM. 2 SACRIFICIAL L… https://t.co/Gya8P65q82',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T16:56:11Z',
      id: '1563208696926072832',
    },
    {
      user: 'KSI',
      tweet: 'When you see me KO both of them, we’ll see if it isn’t “fighting”.\n\nJake, I get it, you’re mad rn. You’re afraid th… https://t.co/z9ETE6xQ69',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T14:17:13Z',
      id: '1563168691595780096',
    },
    {
      user: 'KSI',
      tweet: 'Has anyone actually watched Jake Paul’s fights with Tyron Woodley? Besides the KO, it’s one of the most boring figh… https://t.co/JBwqDzu9Y6',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T14:11:59Z',
      id: '1563167376652132356',
    },
    {
      user: 'KSI',
      tweet: 'And how many fights have you had this year? 😂😂😂 https://t.co/wvQYbz5PQ0',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T14:06:27Z',
      id: '1563165984672088066',
    },
    {
      user: 'KSI',
      tweet: 'I tried making both fights 6 rounds but the commission wouldn’t allow it. Mainly because I’m fighting 2 fights in 1… https://t.co/8TEOCaZ2Nf',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T14:00:40Z',
      id: '1563164527239512065',
    },
    {
      user: 'KSI',
      tweet: 'And your BS podcast is shit. Views are poor for your standards. Your co host are boring and have 0 personality. Log… https://t.co/UfLCAEtVq2',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T13:57:34Z',
      id: '1563163750425067522',
    },
    {
      user: 'KSI',
      tweet: 'Was wondering when you were gonna pipe up. You must be so sad and bored on your arse, having no event happening 😂.… https://t.co/u425r5sA7A',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-26T13:55:32Z',
      id: '1563163236278538242',
    },
    {
      user: 'KSI',
      tweet: 'The most popular community on twitter https://t.co/XQW8qlBPGH',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-25T22:17:12Z',
      id: '1562927098725122048',
    },
    {
      user: 'KSI',
      tweet: 'They should just fight on the other Misfits cards coming out this year tbh https://t.co/lh4kANHpuw',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-25T22:10:48Z',
      id: '1562925486178713600',
    },
    {
      user: 'KSI',
      tweet: '👀 https://t.co/6wGDJ688Pq',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-25T17:27:37Z',
      id: '1562854221992820737',
    },
    {
      user: 'KSI',
      tweet: '⚡️ “KSI Talks Weight Loss, Boxing and Exposing Jake Paul” by @MensHealthUK https://t.co/agHdM9RJck',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T15:25:58Z',
      id: '1562461217955794946',
    },
    {
      user: 'KSI',
      tweet: 'MENS HEALTH COVER BABY \n@MensHealthUK https://t.co/7iPHI69acg',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T15:24:15Z',
      id: '1562460787922243584',
    },
    {
      user: 'KSI',
      tweet: 'I’m ready. 2 fights in 1 night baby https://t.co/JIXP8IZqbV',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T13:21:50Z',
      id: '1562429980893622274',
    },
    {
      user: 'KSI',
      tweet: 'Media workout today 😈',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T08:56:05Z',
      id: '1562363103794401280',
    },
    {
      user: 'KSI',
      tweet: 'Think my troll went a bit far? 😅 https://t.co/MRSmKYnHQv',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-24T07:41:20Z',
      id: '1562344291069984768',
    },
    {
      user: 'KSI',
      tweet: 'I’m gonna shock the world',
      userImage: 'https://pbs.twimg.com/profile_images/1474087102065348609/iZOpA_bm_normal.jpg',
      createdAt: '2022-08-23T21:25:22Z',
      id: '1562189277622312962',
    },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');
  const [likedTweets, setLikedTweets] = useState<string[]>([]);
  const [favouritedTweets, setFavouritedTweets] = useState<FavouritedTweet[]>([]);

  const likeTweet = (id: string) => {
    setLikedTweets([...likedTweets, id]);
  };

  // useEffect(() => {
  //   TwitterService.getTweets()
  //     .then((res) => {
  //       console.log(res, 'ress');
  //       if (res.data.tweets) {
  //         setTweets(res.data.tweets);
  //       } else {
  //         setErrorMessage(res.data);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    TwitterService.getMyFavourites()
      .then((res) => {
        if (res.data.Success) {
          setFavouritedTweets(res.data.Success);
        }
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Home</h2>
      <div className="outerTweetContainer">

        {tweets.map((el) => (
          <Tweet
            tweet={el}
            likeTweet={likeTweet}
            favouritedTweets={favouritedTweets}
            likedTweets={likedTweets}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
