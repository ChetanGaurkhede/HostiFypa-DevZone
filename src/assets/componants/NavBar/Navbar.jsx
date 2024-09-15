import React from 'react';
import './Navbar.css'

function Navbar () {

  return (
    <nav className='nav-bar'>
      <div className="logo">
        <a href="">
        <img className='logo-img' src="\src\assets\Images\logo.png"  alt="" />
        </a>
      </div>
      <div className="contact">
        <div className="call">
          <a href="">
            <img className="call-img" src="\src\assets\Images\telephone.png"  alt="" />
          </a>
        </div>
        <div className="mail">
          <a href="mailto:sales@hostifyra.com">
            <img className="mail-img" src="\src\assets\Images\email.png"  alt="" />
          </a>
        </div>
      </div>
      <div className="user">
          <a href="">
            <img className="user-img" src="\src\assets\Images\user.png"  alt="" />
          </a>
      </div>
    </nav>
  );
};
export default Navbar;