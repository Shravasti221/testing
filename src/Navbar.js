import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./helpers/css/Navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./Homepage/Dropdown";
import HomePage from "./Homepage/HomePage.js";
import AboutUsPage from "./AboutUs/AboutUsPage.js";
import TeamPage from "./Team/TeamPage.js";
import ContactUsPage from "./ContactUsPage.js";
import PastProjectPage from "./Project/PastProjectPage.js";
import PresentProjectPage from "./Project/PresentProjectPage.js";
import SponsorshipPage from "./Sponsorship/SponsorshipPage";
import FourOhFour from "./FourOhFour";

import AstraLogo from "./helpers/images/astra_logo_white.png";

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

  const openDropdown_mobileMode = () => {
    /*on click open dropdown only in mobile mode*/
    if (window.innerWidth < 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <>
      <Router>
        <nav className="navbar">
        <img src={AstraLogo} alt="" width={55} height={50} />
          <Link to="/testing" className="navbar-name" onClick={closeMobileMenu}>
            Astra
            <i className="fa fa-firstdraft" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/testing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item hide-on-mobile"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <p className="nav-links" onClick={openDropdown_mobileMode}>
                Projects <i className="fa fa-caret-down" />
                
            <li>{dropdown && <Dropdown />}</li>
              </p>
            </li>
            <li className="nav-item show-on-mobile">
              <Link
                to="/testing/presentprojects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Present Projects
              </Link>
            </li>
            <li className="nav-item show-on-mobile">
              <Link
                to="/testing/pastprojects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Past Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/testing/team"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/testing/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testing/sponsorship"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sponsorships
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/testing/contact-us"
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
          <Route
            exact
            path="/testing/sponsorship"
            element={<SponsorshipPage />}
          />
          <Route
            exact
            path="/testing/presentprojects"
            element={<PresentProjectPage />}
          />
          <Route
            exact
            path="/testing/pastprojects"
            element={<PastProjectPage />}
          />
          <Route exact path="/testing/team" element={<TeamPage />} />
          <Route exact path="/testing/contact-us" element={<ContactUsPage />} />
          <Route exact path="/testing/about-us" element={<AboutUsPage />} />
          <Route exact path="/testing/404" element={<FourOhFour />} />
        </Routes>
      </Router>
    </>
  );
}

export default Navbar;
