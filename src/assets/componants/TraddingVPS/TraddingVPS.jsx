import React from "react";
import "./TraddingVPS.css";

function TraddingVPS() {
  return (
    <>
      <div className="cont-t container">
        <div className="trad-heading heading">Trading Purpose VPS</div>
        <div class="tog-cont toggle-container">
          <span class="label">Month</span>

          <label class="toggle-switch">
            <input type="checkbox" id="toggleSwitch" />
            <span class="slider"></span>
          </label>

          <span class="label">Annual</span>
        </div>
      </div>
    </>
  );
}

export default TraddingVPS;
