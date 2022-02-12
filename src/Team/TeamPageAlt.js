import React from 'react';
import '../helpers/css/TeamAlt.css';
import TeamPageHeader from './TeamPageHeader';

const teampageText = {
  normalText:'Introducing the',
  emphasisText:'Team'
}

function TeamPageAlt() {
  return (
    <div>
      <TeamPageHeader {...teampageText}/>
      <div className="profile_container">
  <div className="profile_card card0">
    <div className="profile_border">
      <h2>Al Pacino</h2>
      <div className="profile_icons">
        <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div className="profile_card profile_card1">
    <div className="profile_border">
      <h2>Ben Stiller</h2>
      <div className="profile_icons">
      <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div className="profile_card profile_card2">
    <div className="profile_border">
      <h2>Patrick Stewart</h2>
      <div className="profile_icons">
        <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
export default TeamPageAlt;