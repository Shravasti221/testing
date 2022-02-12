import React from "react";
import '../helpers/css/visionMission.css';

function VisionMission() {
  return (
      <>
      <div className="vision-mission">
        <p className="vision-mission-text">Our</p>

        <ul className="vision-mission-list">
          <li className="vision-mission-list-item">Mission</li>
          <li className="vision-mission-list-item"> Vision</li>
          <li className="vision-mission-list-item"> Belief</li>
          <li className="vision-mission-list-item">Message</li>
        </ul>
      </div>
      <div className="vision-mission-smallScreen"><h1> Our Vision...</h1></div>
      </>
  );
}
export default VisionMission;
