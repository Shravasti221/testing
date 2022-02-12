import React from "react";
import "../helpers/css/Team.css";
import { teamData } from "./Member";

export default function Team() {
  const overlayColors = ["hotpink", "yellow", "dodgerblue", "darkgreen"];
  return (
    <div className="team">
      {teamData.map((data, index) => {
        return (
          <div
            className="promo"
            style={{ "--overlay-color": overlayColors[index % 4] }}
          >
            <div className="image-wrapper">
              <img src={data.img} alt="#" />
            </div>
            <h2 className="title">{data.title}</h2>
            <h2 className="line">{data.line}</h2>
            <h2 className="name" data-cta={data.name}>
              {data.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
