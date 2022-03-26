import React from "react";
import "../helpers/css/tier.css";
import outline1 from "../helpers/images/01.png";
import outline2 from "../helpers/images/02.png";
import outline3 from "../helpers/images/03.png";


class Tier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size1: 30,
      size2: 30,
      size3: 30,
    }
  }
  handleScroll(){
    document.addEventListener('scroll',()=>{
      let scrollTop = document.documentElement.scrollTop,
          windowHeight = window.innerHeight,
          height = document.body.scrollHeight - windowHeight,
          scrollPercentage = (scrollTop / height);;
      if(scrollPercentage > 0.2) {
        let newSize = this.state.size1 + 10;
        this.setState({
          size1 : newSize
        });
      }
      
    });
  }
  render(){
  return (
    <>
      <section className="sponsorship_tiers">
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
        <div className="sponsorship_tiers_parent">
        <div className="sponsorship_tiers_back"></div>
          <div className="sponsorship_tiers_div1">
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
          <div className="sponsorship_tiers_div2">
            {" "}
            <img src={outline1} alt="" className="sponsorship_tiers_img_right" />
          </div>
          <div className="sponsorship_tiers_div3">
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
          <div className="sponsorship_tiers_div4">
            {" "}
            <img src={outline2} alt="" className="sponsorship_tiers_img_left" />
          </div>
          <div className="sponsorship_tiers_div5">
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
          <div className="sponsorship_tiers_div6">
            {" "}
            <img src={outline3} alt="" className="sponsorship_tiers_img_right" />
          </div>
        </div>
      </section>
    </>
  );
}
}
export default Tier;
 