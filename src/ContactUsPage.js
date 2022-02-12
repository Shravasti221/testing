import React from "react";
import logo from './helpers/images/astra_logo_white.png';
import insta from './helpers/images/insta_logo.png';
import yt from './helpers/images/youtube_logo.png';
import './helpers/css/ContactUs.css';


/* This page needs to be formatted for mobile screen */

function ContactUsPage() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contactusinfo">
        <div className="contact_clubTitle">
          <div className="contact_logo"><img src={logo} alt="" /></div>
          <div className="contact_address">
            <h2>Address</h2>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <h2>Phone Number</h2>
            <p>xxxxxxxxxx</p>
          </div>
        </div>
        <div className="contacts">
          <div className="contact_email">
            <h2>Email</h2>
            <p>emailaddress@example.com</p>
          </div>
          <div className="contact_socialmedia">
            <h2>Follow us on social media</h2>
            <ul>
              <li><a href="https://www.instagram.com/astra_robotics"><img src={insta} alt="" /></a></li>
              <li><a href="https://youtube.com/channel/UCKbeaYMw6fCF2u4iXOdOfJg"><img src={yt} alt="" /></a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUsPage;
