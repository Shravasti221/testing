import React from "react";
import video from '../helpers/images/video.mp4';
import '../helpers/css/videoheader.css'
function Videoheader () {

  return (
    <div className="videohead">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4"/>
      </video>
      <div className="text">
        <h1>Astra hompage Title</h1>
        <p>This is a sample text and video</p>
        <a href="#">Button</a>
      </div>
    </div>
  );
}
 
export default Videoheader;