import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../helpers/css/Navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./Dropdown";
import HomePage from "./HomePage.js";
import AboutUsPage from "../AboutUs/AboutUsPage.js";
import TeamPageAlt from "../Team/TeamPageAlt.js";
//import TeamPage from "../Team/TeamPage.js";
import ContactUsPage from "../ContactUsPage.js";
import PastProjectPage from "../Project/PastProjectPage.js";
import PresentProjectPage from "../Project/PresentProjectPage.js";
import SponsorshipPage from "../Sponsorship/SponsorshipPage";
import FourOhFour from "../FourOhFour";

import AstraLogo from "../helpers/images/astra_logo_white.png";

/* Shrav you made a lot of changes to this page so don't directly add it */


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    /* Ritesh's code. Is it necessary?
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }*/
    setDropdown(false);
  };
  return (
    <>
      <Router>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Astra
            <i className="fab fa-firstdraft" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/presentprojects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/testing" element={<HomePage />} />
          <Route exact path="/sponsorship" element={<SponsorshipPage />} />
          <Route exact   path="/presentprojects" element={<PresentProjectPage />}
          />
          <Route exact path="/pastprojects" element={<PastProjectPage />} />
          <Route exact path="/team" element={<TeamPageAlt />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/404" element={<FourOhFour />} />
        </Routes>
      </Router>
    </>
  );
}

export default Navbar;
