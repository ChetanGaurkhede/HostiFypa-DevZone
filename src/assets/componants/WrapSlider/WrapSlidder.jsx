import React from "react";
import "./WrapSlidder.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WrapSlidder() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-wrapper">
        <div className="card-list">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div className="card-item" key={index}>
                {console.log(d.img)}
                <div className="title">{d.title}</div>
                <img src={d.img} alt="" />
                <div className="headding-card headding">{d.heading}</div>
                <div className="para">{d.para}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
const data = [
  {
    title: `Performance`,
    img: "\\src\\assets\\Images\\Rocket.png",
    heading: `Unlock Unmatched Performance With HostyFyra VPS Hosting`,
    para: `Hostifyra, we understand the importance of speed and uptime for your business. Our VPS hosting solutions are designed to deliver lightning-fast performance, ensuring that your website or application runs smoothly without interruptions. Whether you're running a high-traffic e-commerce site or a resource-intensive application, our VPS plans give you the power and control you need`,
  },
  {
    title: `Flexible Plans`,
    img: `\\src\\assets\\Images\\flexible.png`,
    heading: `Flexible Plans Tailored to Your Needs`,
    para: `No two businesses are the same, and neither are their hosting requirements. That's why we offer a range of VPS hosting plans that can be tailored to your specific needs. Effortlessly scale your resources up or down with the flexibility to adapt as your business grows.`,
  },
  {
    title: `Security`,
    img: `\\src\\assets\\Images\\security.png`,
    heading: `Security You Can Trust`,
    para: `Your data is safe with us. Hostifyra provides top-notch security features, including DDoS protection, automated backups, and advanced firewalls. Rest easy knowing that your information is protected 24/7 by our state-of-the-art security measures.`,
  },
  {
    title: `Why HostiFyra`,
    img: `\\src\\assets\\Images\\whyhosti.png`,
    heading: `Unlock Unmatched Performance With HostyFyra VPS Hosting`,
    para: `Your data is safe with us. Hostifyra provides top-notch security features, including DDoS protection, automated backups, and advanced firewalls. Rest easy knowing that your information is protected 24/7 by our state-of-the-art security measures.`,
  },
];
export default WrapSlidder;
