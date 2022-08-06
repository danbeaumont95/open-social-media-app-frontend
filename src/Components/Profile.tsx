import React, { useState } from 'react';

const Profile = () => {
  console.log('hi');
  const [passwordChange, setPasswordChange] = useState({
    old_password: '',
    new_password: '',
  });
  const handleChangeDetailsHandler = (event: any) => {
    setPasswordChange({
      ...passwordChange,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    console.log(e, 'eeee');
  };
  return (
    <div>
      <form className="loginForm" onSubmit={handleFormSubmit}>
        <input type="text" className="input" placeholder="Email" onChange={handleChangeDetailsHandler} name="email" />
        <input type="password" className="input" placeholder="Password" onChange={handleChangeDetailsHandler} name="password" />
        <h4>Forgotten your password?</h4>
        <button type="submit" className="loginSignupButton">Log in!</button>
      </form>
    </div>
  );
};
export default Profile;
