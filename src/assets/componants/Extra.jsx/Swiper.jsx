import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  let screenResolution = () => {
    const width = window.screen.width; // Get the screen width
    console.log(width, "hi");
  
    if (width < 420) {
      return 1;
    } else if (width < 800) {
      return 2;
    } else {
      return 3;
    } 
    
  };
  
  console.log(screenResolution(), "hi");
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={screenResolution()}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((d, index) => (
        <SwiperSlide>
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
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

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

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import './SlickGoTo';

// function SlickGoTo() {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [updateCount, setUpdateCount] = useState(0);
//   let sliderRef = useRef(null);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     afterChange: () => setUpdateCount(updateCount + 1),
//     beforeChange: (current, next) => setSlideIndex(next)
//   };
//   return (
//     <div className="slider-container">

//       <Slider
//         ref={slider => {
//           sliderRef = slider;
//         }}
//         {...settings}
//       >
//         {data.map((d, index) => (
//         <div className="card-container" key={index}>
//           <div className="left">
//             <img
//               src="\src\assets\Images\computer.png"
//               alt=""
//               className="card-img"
//             />
//             <div className="headding c-head">Windows {d.system} India</div>
//             <div className="price">
//               <span>₹ </span>
//               <span>{d.price}</span>
//               <span>/ Month</span>
//             </div>
//             <button className="card-btn btn">Select Plan</button>
//           </div>
//           <div className="V-line"></div>
//           <div className="right">
//             <p>{d.cpu} vCPU cores</p>
//             <p>{d.ram} GB RAM</p>
//             <p>40 GB Enterprise NVMe</p>
//             <p>1 Dedicated IP</p>
//             <p>100 GB bandwidth</p>
//             <p>upto 500 Mbps port speed</p>
//             <p>Tier 4 Indian Datacenter</p>
//             <p>Windows server 2019 ***</p>
//           </div>
//         </div>
//       ))}
//       </Slider>
//     </div>
//   );
// }
// const data = [
//   {
//     system: `T1`,
//     price: `1000`,
//     cpu: `2`,
//     ram: `4`,
//   },
//   {
//     system: `T2`,
//     price: `1400`,
//     cpu: `2`,
//     ram: `6`,
//   },
//   {
//     system: `T3`,
//     price: `1600`,
//     cpu: `4`,
//     ram: `8`,
//   },
//   {
//     system: `T4`,
//     price: `1900`,
//     cpu: `4`,
//     ram: `8`,
//   },
// ];

// export default SlickGoTo;
