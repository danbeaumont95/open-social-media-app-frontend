/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../Styles/Profile.css';

import { FaUserLock } from 'react-icons/fa';
// import UserService from '../Services/user';

const Profile = () => {
  console.log('hi');
  const [passwordChange, setPasswordChange] = useState({
    old_password: '',
    new_password: '',
    re_typed_new_password: '',
  });
  const [buttonTitle, setButtonTitle] = useState<String>('Edit');
  const [showForm, setShowForm] = useState<Boolean>(false);

  const handleChangeDetailsHandler = (event: any) => {
    setPasswordChange({
      ...passwordChange,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    console.log(e, 'eeee');
    // UserService.updatePassword()
  };

  const handleButtonClick = () => {
    if (buttonTitle === 'Edit') {
      setButtonTitle('Close');
      setShowForm((prevCheck) => !prevCheck);
    } else {
      setButtonTitle('Edit');
      setShowForm((prevCheck) => !prevCheck);
    }
  };
  console.log(buttonTitle, 'buttonTitle');
  console.log(passwordChange, 'passwordChange');
  return (
    <div className="profileContainer">
      <div className="loginContainer">Login</div>
      <div className="updatePasswordFormContainer">
        <div className="updatePasswordDiv">

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
            onClick={handleButtonClick}
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
  );
};
export default Profile;
