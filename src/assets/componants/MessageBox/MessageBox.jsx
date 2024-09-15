import React from 'react';
import './MessageBox.css'
const MessageBox = () => {
  

  return (

    // <div className="contact-icon-container">
    //   <div className="contact-icon">
    //     📞
    //   </div>
    //   <div className="contact-message">
    //     Contact us at: support@example.com
    //   </div>
    // </div>

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
