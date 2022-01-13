import React, { Component } from 'react';
import Statistics from './Stats_Prajwal';
import background from "../helpers/images/Blueprint.jpg"
function AboutPage() {
  return (
    <div   style={{ backgroundImage: `url(${background})` }}>
      
      <div className="Heading ">
          <h1>Astra Statistics (About us page)</h1>
        </div>
        <div className="content">
          <Statistics />
        </div>
    </div>
  );
}

export default AboutPage;