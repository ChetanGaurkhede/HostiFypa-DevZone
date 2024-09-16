import "./App.css";
import Herosection from "./assets/componants/Herosection/Herosection";
import MessageBox from "./assets/componants/MessageBox/MessageBox";
import Navbar from "./assets/componants/NavBar/Navbar";
import Trail from "./assets/componants/Trail/Trail";
import Slidding from "./assets/componants/Slidding/Slidding";
import Card from "./assets/componants/Card/Card";
import PlanToggel from "./assets/componants/PlanToggel/PlanToggel";
import CardOperate from "./assets/componants/CardOperate/CardOperate";
import WrapSlidder from "./assets/componants/WrapSlider/WrapSlidder";
import TraddingVPS from "./assets/componants/TraddingVPS/TraddingVPS";
import ServerInfo from "./assets/componants/ServerInfo/ServerInfo";
import Footer from "./assets/componants/Footer/Footer";
import Swiper from "./assets/componants/Extra.jsx/Swiper";

function App() {
  return (
    <>
      <div className="main">
        <header className="Header">
          <Navbar />
        </header>
        <div>
          <Herosection className="hero" />
        </div>
        <div>
          <Trail />
        </div>
        <div>
          <Slidding />
        </div>
        <div>
          <TraddingVPS />
        </div>
        <div className="card-container-1">
          <Card className="Swipe-1" />
        </div>
        {/* <Swiper className="Swipe-2"/> */}

        <div className="toggel">
          <PlanToggel />
        </div>
        <div className="card-container-1">
          <CardOperate />
        </div>
        <div>
          <ServerInfo />
        </div>
        <div className="slider-window">
          <WrapSlidder />
        </div>
        <MessageBox />
      </div>
      
        <footer>
          <Footer />
        </footer>
    </>
  );
}

export default App;
