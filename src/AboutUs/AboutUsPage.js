import React from 'react';
import Statistics from './Stats_Prajwal';
import VisionMission from './VisionMision';
import TeamPageHeader from '../Team/TeamPageHeader';
import Grids from './Acheivements_Nisarga';

import '../helpers/css/aboutUs.css'

const aboutpageText = {
  normalText: "About",
  emphasisText: "us"
}

function AboutPage() {
  return (
    <div>
      <TeamPageHeader {...aboutpageText}/>
      <div className='about-astra'>
        <h1>About Astra</h1>
        <p>Astra is an Interdisciplinary Student Technical Team of RVCE which specializes
          in the field of RObotics and Automation
          We are associated with the IEEE Student Chapter of RVCE and work on various research Projects
          in association with the Robotic Automation Society.
        </p>
      </div>
      <div className="vision-mission-astra">
        <VisionMission/>
        <p>
          We believe robots can make the world a better place to live in. 
          Knowledge has no value unless you share it. We conduct various workshops to help people understand the importance
          of Robotics and Automation. We aim to compete in multiple competitions and provide the best 
          solutions to real world problems.
        </p>
      </div>
      <div className="contains-stats">
          <Statistics />
        </div>
        <div>
        <Grids/>
        </div>
    </div>
  );
}

export default AboutPage;