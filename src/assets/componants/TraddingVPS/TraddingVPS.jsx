import React, { useState } from "react";
import "./TraddingVPS.css";
import Card from "../Card/Card";

function TraddingVPS() {
  const [isAnnual, setIsAnnual] = useState(false);

  // const subscription = {
  //   month: [
  //     {
  //       system: "T1",
  //       price: "1000",
  //       cpu: "2",
  //       ram: "4",
  //     },
  //     {
  //       system: "T2",
  //       price: "1400",
  //       cpu: "2",
  //       ram: "6",
  //     },
  //     {
  //       system: "T3",
  //       price: "1600",
  //       cpu: "4",
  //       ram: "8",
  //     },
  //     {
  //       system: "T4",
  //       price: "1900",
  //       cpu: "4",
  //       ram: "8",
  //     },
  //   ],
  //   annual: [
  //     {
  //       system: "T1",
  //       price: "11000",
  //       cpu: "2",
  //       ram: "4",
  //     },
  //     {
  //       system: "T2",
  //       price: "15800",
  //       cpu: "2",
  //       ram: "6",
  //     },
  //     {
  //       system: "T3",
  //       price: "18000",
  //       cpu: "4",
  //       ram: "8",
  //     },
  //     {
  //       system: "T4",
  //       price: "21000",
  //       cpu: "4",
  //       ram: "8",
  //     },
  //   ],
  // };

  const subscription = {
    month: [
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T1", // Updated from original
        price: "1000", // Updated from original
        cpu: "2", // Updated from original
        ram: "4", // Updated from original
        graphics: `40`,
        bandwidth: `100 GB bandwidth`,
        speed: `500 Mbps`,
        server: `Windows server 2019/2022 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T2", // Updated from original
        price: "1400", // Updated from original
        cpu: "2", // Updated from original
        ram: "6", // Updated from original
        graphics: `300`,
        bandwidth: `Unlimited`,
        speed: `1 Gbps`,
        server: `Windows server 2019 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T3", // Updated from original
        price: "1600", // Updated from original
        cpu: "4", // Updated from original
        ram: "8", // Updated from original
        graphics: `50`,
        bandwidth: `100 GB bandwidth`,
        speed: `1 Gbps`,
        server: `Windows server 2019 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T4", // Updated from original
        price: "1900", // Updated from original
        cpu: "4", // Updated from original
        ram: "8", // Updated from original
        graphics: `3000`,
        bandwidth: `Unlimited`,
        speed: `1 Gbps`,
        server: `Windows server 2019 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
    ],
    annual: [
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T1", // Updated from original
        price: "11000", // Updated from original
        cpu: "2", // Updated from original
        ram: "4", // Updated from original
        graphics: `40`,
        bandwidth: `100 GB bandwidth`,
        speed: `500 Mbps`,
        server: `Windows server 2019/2022 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T2", // Updated from original
        price: "15800", // Updated from original
        cpu: "2", // Updated from original
        ram: "6", // Updated from original
        graphics: `300`,
        bandwidth: `Unlimited`,
        speed: `1 Gbps`,
        server: `Windows server 2019 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T3", // Updated from original
        price: "18000", // Updated from original
        cpu: "4", // Updated from original
        ram: "8", // Updated from original
        graphics: `50`,
        bandwidth: `100 GB bandwidth`,
        speed: `1 Gbps`,
        server: `Windows server 2019 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
      {
        image: `src\\assets\\Images\\computer.png`,
        system: "Windows T4", // Updated from original
        price: "21000", // Updated from original
        cpu: "4", // Updated from original
        ram: "8", // Updated from original
        graphics: `3000`,
        bandwidth: `Unlimited`,
        speed: `1 Gbps`,
        server: `Windows server 2019 ***`,
        link: `https://billing.hostifyra.com/order/main/packages/vps/?group_id=7`,
      },
    ],
  };

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <>
      <div className="cont-t container">
        <div className="trad-heading heading">Trading Purpose VPS</div>
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

export default TraddingVPS;
