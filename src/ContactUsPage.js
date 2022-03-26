import React from "react";
import logo from "./helpers/images/astra_logo_white.png";
import insta from "./helpers/images/insta_logo.png";
import yt from "./helpers/images/yt.svg";
import ig from "./helpers/images/ig.svg";
import li from "./helpers/images/li.svg";
import "./helpers/css/ContactUs.css";

/* This page needs to be formatted for mobile screen */

function ContactUsPage() {
  return (
    <div className="contactus_parent contactus_parent_grid">
      <div className="contactus_div1">
        <div className="contact_logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="contactus_div2">
        <div className="contactus_info">
          <h2>Address</h2>
          <p>Address line 1</p>
          <p>Address line 2</p>
          <h2>Phone Number</h2>
          <p>Shashank: +91 76758 73584</p>
          <p>Kiran: +91 96208 48507</p>

        </div>
      </div>
      <div className="contactus_div3">
        <div className="contactus_info">
        <h2>Email</h2>
        <p>teamastra@rvce.edu.in</p>
        </div>
      </div>
      <div className="contactus_div4">
        <div className="contactus_info">
          <h2>Follow us on social media</h2>
          <div className="social-menu">
            <ul>
              <li>
                <a href="">
                <img src={ig} />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={li} />
                </a>
              </li>
              <li>
                <a href="">
                <img src={yt} />
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
