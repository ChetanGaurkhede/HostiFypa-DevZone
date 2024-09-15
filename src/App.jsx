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

function App() {
  return (
    <>
      <div className="container">
        <div className="main">
          <header>
            <Navbar />
          </header>
          <Herosection />
          <Trail />
          <Slidding />
          <div className="card-container-1">
            <Card />
          </div>
          <div className="toggel">
            <PlanToggel />
          </div>
          <div className="card-container-1">
            <CardOperate />
          </div>
          <div className="slider-window">
            <WrapSlidder />
          </div>
        </div>
      </div>
      <MessageBox />
    </>
  );
}

export default App;
