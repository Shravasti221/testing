import React from "react";
import '../helpers/css/domains.css';
import domain from "../helpers/images/domain_img.jpg"
import domain1 from "../helpers/images/Embedded_systems.png"
import domain2 from "../helpers/images/computer-vision-illustration.png"
import domain3 from "../helpers/images/Control_system_illustration.png"

function Domain() {
  const domains = [
    { title: 'Embedded System', desc: 'This is a sample domain text or description', image: domain1, id: 1 },
    { title: 'Computer Vision', desc: 'This is a sample domain text or description', image: domain2, id: 2 },
    { title: 'Control System', desc: 'This is a sample domain text or description', image: domain3, id: 3 },
    { title: '(Mech)Domain Title #', desc: 'This is a sample domain text or description', image: domain, id: 4 },
    { title: '(BMS)Domain Title #', desc: 'This is a sample domain text or description', image: domain, id: 5 },
  ]
  return (
    <div className="domain_block">
      {domains.map(domain => (
        <div className="domain" key={domain.id}>
          <div className="domain_text">
            <h1>{domain.title}</h1>
            <p>{domain.desc}</p>
            {/* <a href="#">Button</a> */}
          </div>
          <div className="domain_img">
            <img src={domain.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Domain;
