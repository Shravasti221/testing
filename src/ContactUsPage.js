import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Homepage/HomePage.js";
import AboutUsPage from "./AboutUs/AboutUsPage.js";
import TeamPage from "./Team/TeamPage.js";
import PastProjectPage from "./Project/PastProjectPage.js";
import PresentProjectPage from "./Project/PresentProjectPage.js";
import "bootstrap/dist/css/bootstrap.min.css";


/*function ContactUsPage(){
  return(
    <div className="Heading ">
    <nav class="shelf">
      <a class="book home-page">Home page</a>
      <a class="book about-us">About us</a>
      <a class="book contact">Contact</a>
      <a class="book faq">F.A.Q.</a>

      <span class="book not-found"></span>

      <span class="door left"></span>
      <span class="door right"></span>
    </nav>
    <h1>Error 404</h1>
    <p>LOST IN THE ROBOSPACE</p>
    </div>

  );
}*/

function ContactUsPage() {
  return (
    <div>
      Contact Us
      </div>
  );
}

export default ContactUsPage;
