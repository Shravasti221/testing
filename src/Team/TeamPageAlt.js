import React from "react";
import "../helpers/css/TeamAlt.css";
import MemberAlt from "./MemberAlt";

import TeamPageHeader from "./TeamPageHeader";

const teampageText = {
  normalText: "Introducing the",
  emphasisText: "Team",
};

export default function Team() {
  /*
      <footer className="cred">
        <a href="https://dribbble.com/shots/2134672-Card-animation">
          Inspiration from Alex Cican on Dribble
          <i className="fa fa-share"></i>
        </a>
      </footer> 
  */
  return (
    <>
      <TeamPageHeader {...teampageText} />
      <div className="team_alt_parent">
        <div className="team_alt_div1">
         <MemberAlt id={0}/>
        </div>
        <div className="team_alt_div2">
        <MemberAlt id={1}/>
        </div>
        <div className="team_alt_div3">
        <MemberAlt id={2}/>
        </div>
        <div className="team_alt_div4">
        <MemberAlt id={3}/>
        </div>
        <div className="team_alt_div5">
        <MemberAlt id={4}/>
        </div>
        <div className="team_alt_div6">
        <MemberAlt id={5}/>
        </div>
        <div className="team_alt_div7">
        <MemberAlt id={6}/>
        </div>
        <div className="team_alt_div8">
        <MemberAlt id={7}/>
        </div>
        <div className="team_alt_div9">
        <MemberAlt id={8}/>
        </div>
        <div className="team_alt_div10">
        <MemberAlt id={9}/>
        </div>
        <div className="team_alt_div11">
        <MemberAlt id={10}/>
        </div>
        <div className="team_alt_div12">
        <MemberAlt id={11}/>
        </div>
        <div className="team_alt_div13">
        <MemberAlt id={12}/>
        </div>
        <div className="team_alt_div14">
        <MemberAlt id={13}/>         
        </div>
      </div>
    </>
  );
}
