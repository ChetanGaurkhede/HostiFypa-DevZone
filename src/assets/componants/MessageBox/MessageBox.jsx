import React from 'react';
import './MessageBox.css'
const MessageBox = () => {
  

  return (
    <div className='Message-cont'>
      <div className="contact-message">
        <p>We're Online!</p>
        <p>How may I help you today..</p>
      </div>
      <img src="\src\assets\Images\MessageBox.png" alt="" className='message-img'/>
    </div>
  );
};

export default MessageBox;
