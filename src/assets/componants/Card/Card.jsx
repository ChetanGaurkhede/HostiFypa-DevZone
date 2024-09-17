import React from "react";
import "./Card.css";

function Card({ subscription }) {
  console.log("data", subscription);
  return (
    <>
      {subscription &&
        subscription.length > 0 &&
        subscription.map((card, index) => (
          <div className="card-container" key={index}>
            <div className="left">
              <img
                // src="\src\assets\Images\computer.png"
                src={card.image}
                alt=""
                className="card-img"
              />
              <div className="headding c-head">{card.system} India</div>
              <div className="price">
                <span>₹ </span>
                <span>{card.price}</span>
                <span>/ Month</span>
              </div>
              {/* <a className="card-btn btn" href={card.link}>
                {console.log("link", card.link)}
                Select Plan
              </a> */}

              <button className="card-btn btn">
                <a href={card.link}>Select Plan</a>
              </button>
            </div>
            <div className="V-line"></div>
            <div className="right">
              <p>{card.cpu} vCPU cores</p>
              <p>{card.ram} GB RAM</p>
              {/* <p>40 GB Enterprise NVMe</p> */}
              <p>{card.ssd}</p>
              <p>1 Dedicated IP</p>
              {/* <p>100 GB bandwidth</p> */}
              <p>{card.bandwidth}</p>
              <p>upto {card.speed} port speed</p>
              {/* <p>upto 500 Mbps port speed</p> */}
              <p>Tier 4 Indian Datacenter</p>
              {/* <p>Windows server 2019 ***</p> */}
              <p>{card.server}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Card;
