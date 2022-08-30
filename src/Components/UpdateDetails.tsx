/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */

import '../Styles/UpdateDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  FaUserLock, FaRegUser, FaEnvelope, FaWindowClose,
} from 'react-icons/fa';
import UserService from '../Services/user';
import { User } from '../Interfaces/interfaces';

const UpdateDetails = () => {
  const [passwordChange, setPasswordChange] = useState({
    old_password: '',
    new_password: '',
    re_typed_new_password: '',
  });

  const [user, setUser] = useState<User>({
    name: '',
    email: '',
  });

  const [buttonTitle, setButtonTitle] = useState<String>('Edit');
  const [nameButtonTitle, setNameButtontitle] = useState<String>('Edit');
  const [emailButtonTitle, setEmailButtontitle] = useState<String>('Edit');
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [emailEditable, setEmailEditable] = useState<Boolean>(false);
  const [nameEditable, setNameEditable] = useState<Boolean>(false);
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken]: any = useState(localStorage.getItem('loginAccessToken'));

  const notify = () => toast('New passwords do not match!', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifySuccess = () => toast('Success! Password sucessfully changed', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyDetailsSuccess = () => toast('Success! Details sucessfully changed', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyError = () => toast('Error! Current password not correct', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyOtherError = () => toast('Error! Unable to update password at this time', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyOtherDetailsError = () => toast('Error! Unable to update details at this time', {
    position: toast.POSITION.TOP_CENTER,
  });
  const notifyUnableToGetUser = () => toast('Error! Unable to fetch user details', {
    position: toast.POSITION.TOP_CENTER,
  });

  useEffect(() => {
    UserService.getMe(accessToken)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.data.first_name) {
          const first = res.data.first_name;
          const last = res.data.last_name;
          const name = `${first} ${last}`;
          const obj = { name, email: res.data.email };
          setUser(obj);
        } else {
          return notifyUnableToGetUser();
        }
      })
      .catch(() => notifyUnableToGetUser());
  }, []);

  const handleChangeDetailsHandler = (event: any) => {
    setPasswordChange({
      ...passwordChange,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeNameHandler = (event: any) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeEmailHandler = (event: any) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // eslint-disable-next-line consistent-return
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const userId: any = localStorage.getItem('userId');
    const { old_password, new_password, re_typed_new_password } = passwordChange;
    if (new_password !== re_typed_new_password) {
      return notify();
    }
    UserService.updatePassword(userId, old_password, new_password, accessToken)
      .then((res) => {
        if (res.data.Success) {
          return notifySuccess();
        }

        if (res.data.Error) {
          return notifyError();
        }
        return notifyOtherError();
      })
      .catch(() => notifyOtherError());
  };

  const handleLoginButtonClick = () => {
    if (buttonTitle === 'Edit') {
      setButtonTitle('Close');
      setShowForm((prevCheck) => !prevCheck);
    } else {
      setButtonTitle('Edit');
      setShowForm((prevCheck) => !prevCheck);
    }
  };
  const handleNameButtonClick = () => {
    if (nameButtonTitle === 'Edit') {
      setNameButtontitle('Close');
      setNameEditable((prevCheck) => !prevCheck);
    } else {
      setNameButtontitle('Edit');
      setNameEditable((prevCheck) => !prevCheck);
    }
  };

  const handleEmailButtonClick = () => {
    if (emailButtonTitle === 'Edit') {
      setEmailButtontitle('Close');
      setEmailEditable((prevCheck) => !prevCheck);
    } else {
      setEmailButtontitle('Edit');
      setEmailEditable((prevCheck) => !prevCheck);
    }
  };

  const handleNameConfirmClick = (e: any) => {
    e.preventDefault();
    const { email, name } = user;
    const userId: any = localStorage.getItem('userId');

    UserService.updateDetails(userId, email, name, accessToken)
      .then((res) => {
        if (res.data.Success) {
          setNameEditable((prevCheck) => !prevCheck);
          return notifyDetailsSuccess();
        }

        return notifyOtherDetailsError();
      })
      .catch(() => notifyOtherDetailsError());
  };

  return (
    <div style={{ border: '2px solid green', width: '1000px', height: '600px' }}>
      <ToastContainer />
      <div className="allLoginContainer">
        <div className="loginContainer">
          <h4 style={{ margin: 0, textAlign: 'left', paddingLeft: '10px' }}>
            Login
          </h4>
        </div>
        <div className="updatePasswordFormContainer">
          <div className="updatePasswordDiv" style={showForm ? { borderBottom: 'none' } : { borderBottom: '1px solid #DCDFE2' }}>

            <FaUserLock size={40} />
            <div>
              <p style={{
                flex: 1, paddingLeft: '10px', fontWeight: 'bold', margin: 0,
              }}
              >
                Change password
              </p>
              <p style={{ paddingLeft: '10px', margin: 0 }}>Its a good idea to use a strong secure password</p>
            </div>
            <button
              className="editButton"
              type="button"
              onClick={handleLoginButtonClick}
            >
              {buttonTitle.length ? buttonTitle : 'Edit'}
            </button>
          </div>
          {showForm ? (

            <form className="updatePasswordForm" onSubmit={handleFormSubmit}>
              <label htmlFor="old_password">Current Password</label>
              <input type="password" className="input" placeholder="Old Password" onChange={handleChangeDetailsHandler} name="old_password" />
              <label htmlFor="new_password">New Password</label>
              <input type="password" className="input" placeholder="New Password" onChange={handleChangeDetailsHandler} name="new_password" />
              <label htmlFor="new_password">Re-Type New Password</label>
              <input type="password" className="input" placeholder="New Password" onChange={handleChangeDetailsHandler} name="re_typed_new_password" />

              <button type="submit" className="updatePasswordButton">Update!</button>
            </form>
          ) : null}
        </div>
      </div>
      <div className="allLoginContainer">
        <div className="loginContainer">
          <h4 style={{ margin: 0, textAlign: 'left', paddingLeft: '10px' }}>
            General account settings
          </h4>
        </div>
        <div className="updatePasswordFormContainer">
          <div className="updatePasswordDiv" style={showForm ? { borderBottom: 'none' } : { borderBottom: '1px solid #DCDFE2' }}>

            <FaRegUser size={40} />
            <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <p style={{
                flex: 1, paddingLeft: '10px', fontWeight: 'bold', margin: 0,
              }}
              >
                Name
              </p>
            </div>

            {nameEditable ? (
              <input
                style={{
                  paddingLeft: '15px',
                  marginLeft: '15px',
                  fontSize: '1em',
                  width: '300px',
                }}
                type="text"
                onChange={handleChangeNameHandler}
                name="name"
                value={`${user.name}`}
              />
            ) : (
              <p style={{ paddingLeft: '15px' }}>
                {user.name}
              </p>
            )}

            <button
              className="editButton"
              type="button"
              onClick={handleNameButtonClick}
              style={nameEditable ? { marginRight: '0px' } : { color: 'white' }}
            >
              {nameButtonTitle === 'Edit' ? (
                nameButtonTitle
              ) : <FaWindowClose size={12} />}

            </button>
            {nameEditable ? (
              <button type="button" className="editButton" onClick={handleNameConfirmClick}>Confirm</button>
            ) : null}
          </div>

        </div>
        <div className="updatePasswordFormContainer">
          <div className="updatePasswordDiv" style={showForm ? { borderBottom: 'none' } : { borderBottom: '1px solid #DCDFE2' }}>

            <FaEnvelope size={40} />
            <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <p style={{
                flex: 1, paddingLeft: '10px', fontWeight: 'bold', margin: 0,
              }}
              >
                Email
              </p>
            </div>
            {emailEditable ? (
              <input
                style={{
                  paddingLeft: '15px',
                  marginLeft: '15px',
                  fontSize: '1em',
                  width: '300px',
                }}
                type="text"
                onChange={handleChangeEmailHandler}
                name="email"
                value={user.email}
              />
            ) : (
              <p style={{ paddingLeft: '15px' }}>
                {user.email}
              </p>
            )}

            <button
              className="editButton"
              type="button"
              onClick={handleEmailButtonClick}
              style={emailEditable ? { marginRight: '0px' } : { color: 'white' }}
            >
              {/* {emailButtonTitle.length ? emailButtonTitle : 'Edit'} */}
              {emailButtonTitle === 'Edit' ? emailButtonTitle : <FaWindowClose size={12} />}

            </button>

            {emailEditable ? (
              <button type="button" className="editButton" onClick={handleNameConfirmClick}>Confirm</button>

            ) : null}
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpdateDetails;
