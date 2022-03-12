import React from "react";
import "../helpers/css/tier.css";
import outline1 from "../helpers/images/01.png";
import outline2 from "../helpers/images/02.png";
import outline3 from "../helpers/images/03.png";
function Tier() {
  return (
    <>
      <section classname="sponsorship_tiers">
        <div className="sponsorship_tiers_back"></div>
        <div className="sponsorship_tiers_heading">
          <span>Why sponsor us?</span>
        </div>
        <div className="sponsorship_tiers_description">
          <p>
            Here is to why sponsor us . Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis, earum aut, facere nesciunt,
            asperiores distinctio dolore porro fuga rem exercitationem
            doloremque debitis corrupti architecto labore aperiam adipisci
            quibusdam qui saepe.
          </p>
        </div>
        <div className="sponsorship_tiers_heading">
          <span>How can you help us?</span>
        </div>
        <div className="sponsorship_tiers_description">
          <p>
            . Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, earum aut, facere nesciunt, asperiores distinctio
            dolore porro fuga rem exercitationem doloremque debitis corrupti
            architecto labore aperiam adipisci quibusdam qui saepe.
          </p>
        </div>
        <div class="sponsorship_tiers_parent">
          <div class="sponsorship_tiers_div1">
            {" "}
            <div className="sponsorship_tiers_text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad
              voluptatibus quam ipsam porro? Voluptate inventore dolores
              voluptatibus, ullam, distinctio laboriosam quia iure recusandae
              eum incidunt nostrum officiis dolor maxime.
            </p>
          </div>
          </div>
          <div class="sponsorship_tiers_div2">
            {" "}
            <img src={outline1} alt="" class="sponsorship_tiers_img_right" />
          </div>
          <div class="sponsorship_tiers_div3">
            {" "}
            <div className="sponsorship_tiers_text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad
              voluptatibus quam ipsam porro? Voluptate inventore dolores
              voluptatibus, ullam, distinctio laboriosam quia iure recusandae
              eum incidunt nostrum officiis dolor maxime.
            </p>
          </div>
          </div>
          <div class="sponsorship_tiers_div4">
            {" "}
            <img src={outline2} alt="" class="sponsorship_tiers_img_left" />
          </div>
          <div class="sponsorship_tiers_div5">
            {" "}
            <div className="sponsorship_tiers_text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad
              voluptatibus quam ipsam porro? Voluptate inventore dolores
              voluptatibus, ullam, distinctio laboriosam quia iure recusandae
              eum incidunt nostrum officiis dolor maxime.
            </p>
          </div>
          </div>
          <div class="sponsorship_tiers_div6">
            {" "}
            <img src={outline3} alt="" class="sponsorship_tiers_img_right" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Tier;
 