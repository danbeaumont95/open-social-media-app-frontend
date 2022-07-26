/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Styles/Main.css';
import Image from '../Assets/Images/all-social-media.png';

type Props = {

};
type State = {
  showLogin: boolean;
  showSignUp: boolean;
};

const Main: React.FC<Props> = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div
      className="allMainContent"
      style={{
        backgroundImage: `url(${Image})`, height: '100vh', backgroundRepeat: 'no-repeat', width: '100vw', opacity: 0.4,
      }}
    >
      <h4>Main</h4>
    </div>
  );
};
export default Main;
