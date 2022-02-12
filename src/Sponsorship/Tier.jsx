import React from "react";
import "../helpers/css/tier.css";
import outline1 from "../helpers/images/01.png";
import outline2 from "../helpers/images/02.png";
import outline3 from "../helpers/images/03.png";

function Tier() {
  return (
    <>
      <div className="container">
        <div className="full">
          <div className="upblock" style={{ right: "0px", top: "0px" }}></div>
          <div className="front" style={{ right: "0px", top: "210px" }}>
            <img src={outline1} alt="" />
          </div>
          <div
            className="downblock"
            style={{ right: "0px", top: "410px" }}
          ></div>
          <div className="back" style={{ right: "0px", top: "210px" }}></div>
          <div className="tier">
            <h3>
              Tier 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Tempora debitis hic alias nulla! Dolorum illo vel soluta voluptas
              fuga recusandae voluptatibus praesentium. Eius dolorem dignissimos
              laudantium itaque iure necessitatibus iusto.
            </h3>
          </div>
        </div>

        <div className="full">
          <div className="upblock2" style={{ left: "0px", top: "0px" }}></div>

          <div className="front" style={{ left: "0px", top: "430px" }}>
            <img src={outline2} alt="" />
          </div>
          {/* <div className="downblock"></div> */}
          <div className="back" style={{ left: "0px", top: "430px" }}></div>
          <div className="tier2">
            <h3>
              Tier 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta laboriosam earum enim ratione quam inventore assumenda quis
              quae! Quia, illum minus commodi optio error porro repudiandae
              perferendis nisi consectetur iure?
            </h3>
          </div>
        </div>

        <div className="full">
          <div className="upblock" style={{ right: "0px", top: "420px" }}></div>
          <div className="front" style={{ right: "0px", top: "630px" }}>
            <img src={outline3} alt="" />
          </div>
          <div
            className="downblock"
            style={{ right: "0px", top: "840px" }}
          ></div>
          <div className="back" style={{ right: "0px", top: "630px" }}></div>
          <div className="tier">
            <h3>
              Tier 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima quos rem impedit vel animi maxime doloribus delectus error
              praesentium rerum inventore assumenda sequi dolor repellendus
              quod, molestias vitae voluptatem saepe! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic necessitatibus temporibus nihil
              dolores natus vero voluptas aspernatur pariatur reiciendis fugit
              ducimus, mollitia libero, odit, assumenda id voluptatibus error.
              Eum, animi?
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tier;
