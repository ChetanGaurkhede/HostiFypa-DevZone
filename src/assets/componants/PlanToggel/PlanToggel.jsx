import React from "react";
import "./PlanToggel.css";

function PlanToggel() {
  return (
    <>
      <div className="toggel-cont">
        <div className="tog-first-heading">
        Genral Purpose  vps
        </div>
        <div className="tog-headding headding-toggel">
          <span>Hostifyra </span> Delivers the Best Value for Your
          Hosting Needs.
        </div>
        <p className="para">
          Get more for less with Hostifyra. Our premium hosting solutions offer
          unmatched performance, security, and support—all at a price that works
          for you. Elevate your hosting experience without stretching your
          budget.
        </p>
        <div class="toggle-container">
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

export default PlanToggel;
