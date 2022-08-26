import * as React from 'react';

import '../Styles/NavBar.css';
import {
  FaHashtag,
} from 'react-icons/fa';

const NavBar = () => (

  <div className="navbar">
    <h3 style={{ float: 'left', position: 'absolute', paddingLeft: '10px' }}>Open Social Media App</h3>
    <div className="navbar_icon_container">

      <FaHashtag className="icon" />
    </div>

  </div>
);

export default NavBar;
