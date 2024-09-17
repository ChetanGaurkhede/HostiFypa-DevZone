import React, { useState } from "react";
import "./PlanToggel.css";
import Card from "../Card/Card";

function PlanToggel() {
  const [isAnnual, setIsAnnual] = useState(false);
  const subscription = {
    month: [
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
        server: `Windows server 2019/2022 ***`,
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
    ],
    annual: [
      // You can add corresponding annual values here
      {
        image: `src\\assets\\Images\\computer.png`,
        system: `Windows`,
        price: `10000`,
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
        price: `15500`,
        cpu: `8`,
        ram: `32`,
        graphics: `300`,
        bandwidth: `Unlimited`,
        speed: `1 Gbps`,
        server: `Windows server 2019/2022 ***`,
      },
      {
        image: `src\\assets\\Images\\linusPe.png`,
        system: `Linux`,
        price: `27000`,
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
        price: `40000`,
        cpu: `8`,
        ram: `32`,
        graphics: `3000`,
        bandwidth: `Unlimited`,
        speed: `1 Gbps`,
        server: `Linux`,
      },
    ],
  };

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <>
      <div className="toggel-cont">
        <div className="tog-first-heading">Genral Purpose vps</div>
        <div className="tog-headding headding-toggel">
          <span>Hostifyra </span> Delivers the Best Value for Your Hosting
          Needs.
        </div>
        <p className="para">
          Get more for less with Hostifyra. Our premium hosting solutions offer
          unmatched performance, security, and support—all at a price that works
          for you. Elevate your hosting experience without stretching your
          budget.
        </p>
        <div className="tog-cont toggle-container">
          <span className="label">Month</span>

          <label className="toggle-switch">
            <input type="checkbox" id="toggleSwitch" onChange={handleToggle} />
            <span className="slider"></span>
          </label>

          <span className="label">Annual</span>
        </div>
      </div>

      <div className="card-container-1">
        <Card
          className="Swipe-1"
          subscription={isAnnual ? subscription.annual : subscription.month}
        />
      </div>
    </>
  );
}

export default PlanToggel;
