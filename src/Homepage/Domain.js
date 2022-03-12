import React from "react";
import '../helpers/css/domains.css';

function Domain() {
  const domains = [
    { title: 'Embedded System', desc: 'This is a sample domain text or description', image: '../helpers/images/Embedded_systems.png', id: 1 },
    { title: 'Computer Vision', desc: 'This is a sample domain text or description', image: '../helpers/images/computer-vision-illustration.png', id: 2 },
    { title: 'Control System', desc: 'This is a sample domain text or description', image: '../helpers/images/Control_system_illustration.png', id: 3 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 4 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 5 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 6 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 8 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 9 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 10 },
    { title: 'Domain Title #', desc: 'This is a sample domain text or description', image: '/images/domain_img.jpg', id: 11 },
  ]
  return (
    <div className="domain_block">
      {domains.map(domain => (
        <div className="domain" key={domain.id}>
          <div className="domain_text">
            <h1>{domain.title}{domain.id}</h1>
            <p>{domain.desc}</p>
            <a href="#">Button</a>
          </div>
          <div className="domain_img">
            <img src={domain.image} height={300} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Domain;
