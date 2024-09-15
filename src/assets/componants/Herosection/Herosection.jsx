import React from 'react';
import './Herosection.css'

function Herosection () {

  return (
    <>
    
    <div className="hero">
      <div className="description">
        <h1 className="heading">Exclusive VPS Hosting Offer</h1>
        <p className="detail">High-Perfomance 100% VPS Hosting Plans</p>
        <p className="detail">Starting from <span>₹ 600/ month</span></p>
        <p className="detail">High-Performance Servers</p>
        <p className="detail">Scalable Resources to Fit Your Needs</p>
        <button className="btn">Elevate your hosting experience today</button>
      </div>
      <div>
        <img src="\src\assets\Images\Cloud.svg" alt="" className="server-img" />
      </div>
    </div>


    </>
  );
};
export default Herosection;