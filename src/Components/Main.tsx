/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import '../Styles/Main.css';
import { ToastContainer, toast } from 'react-toastify';
import Image from '../Assets/Images/all-social-media.png';
import UserService from '../Services/user';
import { UserToRegister, UserToLogin } from '../Interfaces/interfaces';
import 'react-toastify/dist/ReactToastify.css';

type Props = {

};

type State = {
  showLogin: boolean;
  showSignUp: boolean;
  userToRegister: UserToRegister;
  userToLogin: UserToLogin;
};

const Main: React.FC<Props> = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userToRegister, setUserToRegister] = useState<UserToRegister>({
    first_name: '', last_name: '', email: '', password: '',
  });
  const [userToLogin, setUserToLogin] = useState<UserToLogin>({
    email: '', password: '',
  });

  const notify = () => toast('Signed up successfully!', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyLogin = (str: string) => toast(str, {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyForgottenPasswordClick = (str: string) => toast(str, {
    position: toast.POSITION.TOP_CENTER,
  });

  const handleSignUpChange = () => {
    setShowSignUp(true);
    setShowLogin(false);
    setUserToRegister({
      email: '', password: '', first_name: '', last_name: '',
    });
  };
  const handleLoginChange = () => {
    setShowLogin(true);
    setShowSignUp(false);
    setUserToLogin({ email: '', password: '' });
  };

  const handleChangeUser = (event: any) => {
    setUserToRegister({
      ...userToRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeUserLogin = (event: any) => {
    setUserToLogin({
      ...userToLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const {
      first_name, last_name, email, password,
    } = userToRegister;
    UserService.register(first_name, last_name, email, password).then((res) => {
      if (res.data.Success) {
        notify();
      }
    });
  };

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    const {
      email, password,
    } = userToLogin;
    // eslint-disable-next-line consistent-return
    UserService.login(email, password).then((res) => {
      if (res.data.Error) {
        notifyLogin(res.data.Error);
      }
      if (res.data.access) {
        notifyLogin('logged in successfully');
        localStorage.setItem('loginAccessToken', res.data.access);
        localStorage.setItem('loginRefreshToken', res.data.refresh);
        localStorage.setItem('userId', res.data.id);
        // eslint-disable-next-line no-return-assign
        return window.location.href = '/home';
      }
    });
  };

  const handleForgottenPasswordClick = (e: any) => {
    notifyForgottenPasswordClick('Hoyaaa');
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
        marginTop: 0, paddingTop: '20px', paddingBottom: '20px', color: 'floralwhite',
      }}
      >
        Open Social Media App
      </h2>
      <div className="login-signup-card">
        <div className="login-signup-content">
          <ToastContainer />
          {showLogin ? (
            <>
              <h2>Login</h2>

              <form className="loginForm" onSubmit={handleLoginSubmit}>
                <input type="text" className="input" placeholder="Email" onChange={handleChangeUserLogin} name="email" />
                <input type="password" className="input" placeholder="Password" onChange={handleChangeUserLogin} name="password" />
                <h4 onClick={handleForgottenPasswordClick}>Forgotten your password?</h4>
                <button type="submit" className="loginSignupButton">Log in!</button>
              </form>
              <h4 style={{ color: 'black' }} onClick={handleSignUpChange}>
                Dont have an account?
                <span style={{ color: '#7C29E8', cursor: 'pointer' }}> Sign up now</span>
              </h4>
            </>
          ) : (
            <>
              <h2>Sign up</h2>
              <form className="loginForm" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="First Name" onChange={handleChangeUser} name="first_name" />
                <input type="text" className="input" placeholder="Last Name" onChange={handleChangeUser} name="last_name" />
                <input type="text" className="input" placeholder="Email" onChange={handleChangeUser} name="email" />
                <input type="password" className="input" placeholder="Password" onChange={handleChangeUser} name="password" />
                <button type="submit" className="loginSignupButton">Sign up!</button>
              </form>

              <h4 style={{ color: 'black' }} onClick={handleLoginChange}>
                Already have an account?
                <span style={{ color: '#7C29E8', cursor: 'pointer' }}> Log in now</span>
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
