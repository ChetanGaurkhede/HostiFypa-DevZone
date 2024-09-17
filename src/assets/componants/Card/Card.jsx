import React from "react";
import "./Card.css";

function Card() {
  return (
    <>
      {data.map((d, index) => (
        <div className="card-container" key={index}>
          <div className="left">
            <img
              src="\src\assets\Images\computer.png"
              alt=""
              className="card-img"
            />
            <div className="headding c-head">Windows {d.system} India</div>
            <div className="price">
              <span>₹ </span>
              <span>{d.price}</span>
              <span>/ Month</span>
            </div>
            <button className="card-btn btn">Select Plan</button>
          </div>
          <div className="V-line"></div>
          <div className="right">
            <p>{d.cpu} vCPU cores</p>
            <p>{d.ram} GB RAM</p>
            <p>40 GB Enterprise NVMe</p>
            <p>1 Dedicated IP</p>
            <p>100 GB bandwidth</p>
            <p>upto 500 Mbps port speed</p>
            <p>Tier 4 Indian Datacenter</p>
            <p>Windows server 2019 ***</p>
          </div>
        </div>
      ))}
    </>
  );
}
const data = [
  {
    system: `T1`,
    price: `1000`,
    cpu: `2`,
    ram: `4`,
  },
  {
    system: `T2`,
    price: `1400`,
    cpu: `2`,
    ram: `6`,
  },
  {
    system: `T3`,
    price: `1600`,
    cpu: `4`,
    ram: `8`,
  },
  {
    system: `T4`,
    price: `1900`,
    cpu: `4`,
    ram: `8`,
  },
  
];
export default Card;
