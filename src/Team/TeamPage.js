import React from "react";
import "../helpers/css/Team.css";
import { teamData } from "./Member";

import TeamPageHeader from "./TeamPageHeader";

const teampageText = {
  normalText: "Introducing the",
  emphasisText: "Team",
};

export default function Team() {
  return (
    <>
      <TeamPageHeader {...teampageText} />
      <footer className="cred">
        <a href="https://dribbble.com/shots/2134672-Card-animation">
          Inspiration from Alex Cican on Dribble
          <i className="fa fa-share"></i>
        </a>
      </footer>
      {teamData.map((data) => {
        return (
          <div className="wrap" key={data.id}>
            <div className="card">
              <div className="card-liner">
                <figure>
                  <img src={data.img1} alt="" />
                </figure>
                <div className="card--social">
                  <ul>
                    <li className="twitter">
                      <a href="#0">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#0">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card--title">
                  <h3>{data.name1}</h3>
                  <p>{data.desig1}</p>
                </div>
                <div className="card--desc">
                  <hr />
                  <p>
                    Coffee, code, repeat... he doesn't eat food, and only stops
                    to defend the table tennis crown.
                  </p>
                </div>
                <div className="card--btn">
                  <a href="#0">
                    <span className="moreinfo">
                      <i className="fa fa-info-circle"></i> More Info
                    </span>
                    <span className="fullprof">View Full Profile</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-liner">
                <figure>
                  <img src={data.img2} alt="" />
                </figure>
                <div className="card--social">
                  <ul>
                    <li className="twitter">
                      <a href="#0">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#0">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card--title">
                  <h3>{data.name2}</h3>
                  <p>{data.desig2}</p>
                </div>
                <div className="card--desc">
                  <hr />
                  <p>
                    Coffee, code, repeat... he doesn't eat food, and only stops
                    to defend the table tennis crown.
                  </p>
                </div>
                <div className="card--btn">
                  <a href="#0">
                    <span className="moreinfo">
                      <i className="fa fa-info-circle"></i> More Info
                    </span>
                    <span className="fullprof">View Full Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
