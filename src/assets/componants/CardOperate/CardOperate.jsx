import React from "react";
import "./CardOperate.css";

function CardOperate(props) {
  return (
    <>
      {data.map((d, index) => (
        <div className="card-container" key={index}>
          <div className="left">
            <div className="headding">{d.system} India</div>
            <img
              src={d.image}
              alt=""
              className="card-img-1 card-img"
            />
            <div className="price">
              <span>₹ </span>
              <span>{d.price}</span>
              <span>/ Month</span>
            </div>
            <button className="card-btn-2 card-btn btn">Select Plan</button>
          </div>
          <div className="V-line"></div>
          <div className="right">
            <p>{d.cpu} vCPU cores</p>
            <p>{d.ram} GB RAM</p>
            <p>{d.graphics} GB Enterprise NVMe</p>
            <p>1 Dedicated IP</p>
            <p>{d.bandwidth} TB bandwidth</p>
            <p>Upto {d.speed} port speed</p>
            <p>Tier 4 Indian Datacenter</p>
            <p>{d.server}</p>
          </div>
        </div>
      ))}
    </>
  );
}
const data = [
  {
    image: `src\\assets\\Images\\computer.png`,
    system: `Windows`,
    price: `1000`,
    cpu: `2`,
    ram: `2`,
    graphics: `40`,
    bandwidth: `10 TB`,
    speed: `500 Mbps`,
    server: `Windows server 2019/2022 ***`,
  },
  {
    image: `src\\assets\\Images\\computer.png`,
    system: `Windows`,
    price: `4999`,
    cpu: `8`,
    ram: `32`,
    graphics: `300`,
    bandwidth: `Unlimited`,
    speed: `1 Gbps`,
    server: `server 2019/2022 ***`,
  },
  {
    image: `src\\assets\\Images\\linusPe.png`,
    system: `Linux`,
    price: `600`,
    cpu: `1`,
    ram: `1`,
    graphics: `50`,
    bandwidth: `10 TB`,
    speed: `1 Gbps`,
    server: `Linux`,
  },
  {
    image: `src\\assets\\Images\\linusPe.png`,
    system: `Linux`,
    price: `4500`,
    cpu: `8`,
    ram: `32`,
    graphics: `3000`,
    bandwidth: `Unlimited`,
    speed: `1 Gbps`,
    server: `Linux`,
  },
];
export default CardOperate;
