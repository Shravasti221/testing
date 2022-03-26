import React, { Component } from 'react';
import TeamPageHeader from '../Team/TeamPageHeader';
import Tier from './Tier';

const sponsorshipText = {
  normalText: "Sponsor",
  emphasisText: "Us",
};



function SponsorshipPage() {
  return (
    <div>
      <Tier/>
    </div>
  );
}

export default SponsorshipPage;