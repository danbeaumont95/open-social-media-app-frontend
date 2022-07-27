/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

  const handleSignUpChange = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };
  const handleLoginChange = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  return (
    <div
      className="allMainContent"
      style={{
        backgroundColor: '#7C29E8',
        width: '100vw ',
        height: '100vh',
      }}
    >
      <h2 style={{
        marginTop: 0, paddingTop: '20px', paddingBottom: '20px', color: 'white',
      }}
      >
        Open Social Media App
      </h2>
      <div className="login-signup-card">
        <div className="login-signup-content">
          {showLogin ? (
            <>
              <h2>Login</h2>

              <form action="submit" className="loginForm">
                <input type="text" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
                <h4>Forgotten your password?</h4>
                <button type="submit" className="loginSignupButton">Log in!</button>
              </form>
              <h4 style={{ color: 'black' }} onClick={handleSignUpChange}>
                Dont have an account?
                <span style={{ color: '#7C29E8' }}> Sign up now</span>
              </h4>
            </>
          ) : (
            <>
              <h2>Sign up</h2>
              <form action="submit" className="loginForm">
                <input type="text" className="input" placeholder="First Name" />
                <input type="text" className="input" placeholder="Last Name" />
                <input type="text" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
                <button type="submit" className="loginSignupButton">Sign up!</button>
              </form>

              <h4 style={{ color: 'black' }} onClick={handleLoginChange}>
                Already have an account?
                <span style={{ color: '#7C29E8' }}> Log in now</span>
              </h4>
            </>
          )}
        </div>
        <div>
          <img src={Image} alt="socialMedia" width="400px" height="100%" />
        </div>
      </div>
    </div>
  );
};
export default Main;
